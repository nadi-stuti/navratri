#!/usr/bin/env node

/**
 * CLI script to run i18n audit
 * Usage: node scripts/i18n-audit.cjs [options]
 */

const fs = require('fs');
const path = require('path');

class SimpleStringDetector {
  constructor(config) {
    this.config = config;
  }

  async detectHardcodedStrings() {
    const hardcodedStrings = [];
    const affectedFiles = [];
    let totalFiles = 0;

    for (const sourceDir of this.config.sourceDirectories) {
      const files = await this.getAllTsxFiles(sourceDir);
      totalFiles += files.length;

      for (const file of files) {
        const fileStrings = await this.scanFile(file);
        if (fileStrings.length > 0) {
          hardcodedStrings.push(...fileStrings);
          affectedFiles.push(file);
        }
      }
    }

    const summary = this.generateSummary(hardcodedStrings);

    return {
      hardcodedStrings,
      totalFiles,
      affectedFiles,
      summary
    };
  }

  async getAllTsxFiles(dir) {
    const files = [];
    
    try {
      const entries = await fs.promises.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (!this.shouldExcludeDirectory(entry.name)) {
            const subFiles = await this.getAllTsxFiles(fullPath);
            files.push(...subFiles);
          }
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(`Could not read directory ${dir}:`, error.message);
    }
    
    return files;
  }

  async scanFile(filePath) {
    try {
      const content = await fs.promises.readFile(filePath, 'utf-8');
      const lines = content.split('\n');
      const hardcodedStrings = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineNumber = i + 1;

        // Simple detection patterns
        const jsxStrings = this.detectJsxStrings(line, lineNumber, filePath);
        hardcodedStrings.push(...jsxStrings);

        const attributeStrings = this.detectAttributeStrings(line, lineNumber, filePath);
        hardcodedStrings.push(...attributeStrings);
      }

      return hardcodedStrings;
    } catch (error) {
      console.warn(`Could not read file ${filePath}:`, error.message);
      return [];
    }
  }

  detectJsxStrings(line, lineNumber, filePath) {
    const strings = [];
    const jsxTextPattern = />([^<>{]*[a-zA-Z][^<>{}]*)</g;
    
    let match;
    while ((match = jsxTextPattern.exec(line)) !== null) {
      const content = match[1].trim();
      
      if (content && 
          !this.isTranslationCall(content) && 
          !this.isJustNumbers(content) &&
          !this.isJustSymbols(content) &&
          content.length > 1) {
        
        strings.push({
          file: filePath,
          line: lineNumber,
          column: match.index + 1,
          content,
          context: 'jsx-content',
          priority: 'medium',
          suggestedKey: this.generateSuggestedKey(content, filePath)
        });
      }
    }

    return strings;
  }

  detectAttributeStrings(line, lineNumber, filePath) {
    const strings = [];
    const attributePatterns = [
      /alt=["']([^"']+)["']/g,
      /aria-label=["']([^"']+)["']/g,
      /placeholder=["']([^"']+)["']/g,
      /title=["']([^"']+)["']/g,
    ];

    for (const pattern of attributePatterns) {
      let match;
      while ((match = pattern.exec(line)) !== null) {
        const content = match[1].trim();
        
        if (content && !this.isTranslationCall(content) && content.length > 1) {
          strings.push({
            file: filePath,
            line: lineNumber,
            column: match.index + 1,
            content,
            context: 'attribute',
            priority: 'high',
            suggestedKey: this.generateSuggestedKey(content, filePath)
          });
        }
      }
    }

    return strings;
  }

  isTranslationCall(content) {
    const translationPatterns = [
      /\bt\(/,
      /useTranslation/,
      /i18n\./,
      /\$t\(/,
    ];

    return translationPatterns.some(pattern => pattern.test(content));
  }

  isJustNumbers(content) {
    return /^\d+(\.\d+)?$/.test(content.trim());
  }

  isJustSymbols(content) {
    return /^[^\w\s]+$/.test(content.trim());
  }

  generateSuggestedKey(content, filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const cleanContent = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 30);
    
    return `${fileName}.${cleanContent}`;
  }

  shouldExcludeDirectory(dirName) {
    const excludedDirs = ['node_modules', '.git', 'dist', 'build', '.next', 'coverage'];
    return excludedDirs.includes(dirName);
  }

  generateSummary(hardcodedStrings) {
    const byContext = {};
    const byPriority = {};

    for (const str of hardcodedStrings) {
      byContext[str.context] = (byContext[str.context] || 0) + 1;
      byPriority[str.priority] = (byPriority[str.priority] || 0) + 1;
    }

    return { byContext, byPriority };
  }
}

class SimpleTranslationValidator {
  constructor(config) {
    this.config = config;
  }

  async validateTranslations() {
    const translationData = await this.loadAllTranslations();
    const missingKeys = this.findMissingKeys(translationData);
    
    return {
      missingKeys,
      structuralInconsistencies: { expectedStructure: {}, actualStructure: {} },
      qualityIssues: []
    };
  }

  async loadAllTranslations() {
    const translations = {};

    for (const language of this.config.supportedLanguages) {
      translations[language] = {};
      
      for (const namespace of this.config.namespaces) {
        try {
          const filePath = path.join(
            this.config.translationDirectories[0], 
            language, 
            `${namespace}.json`
          );
          
          const content = await fs.promises.readFile(filePath, 'utf-8');
          translations[language][namespace] = JSON.parse(content);
        } catch (error) {
          console.warn(`Could not load ${language}/${namespace}.json:`, error.message);
          translations[language][namespace] = {};
        }
      }
    }

    return translations;
  }

  findMissingKeys(translations) {
    const missingKeys = [];
    const referenceLanguage = 'en';
    const referenceTranslations = translations[referenceLanguage];

    if (!referenceTranslations) {
      console.warn('No English translations found to use as reference');
      return missingKeys;
    }

    for (const namespace of this.config.namespaces) {
      const referenceKeys = this.getAllKeys(referenceTranslations[namespace] || {});
      
      for (const language of this.config.supportedLanguages) {
        if (language === referenceLanguage) continue;
        
        const languageKeys = this.getAllKeys(translations[language]?.[namespace] || {});
        const missing = referenceKeys.filter(key => !languageKeys.includes(key));
        
        if (missing.length > 0) {
          missingKeys.push({
            language,
            namespace,
            keys: missing
          });
        }
      }
    }

    return missingKeys;
  }

  getAllKeys(obj, prefix = '') {
    const keys = [];

    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        keys.push(...this.getAllKeys(value, fullKey));
      } else {
        keys.push(fullKey);
      }
    }

    return keys;
  }
}

async function runAudit() {
  const config = {
    sourceDirectories: ['src'],
    translationDirectories: ['src/locales'],
    supportedLanguages: ['en', 'hi', 'ta', 'mr', 'te', 'ml', 'bn', 'kn'],
    namespaces: ['common', 'pages', 'recipes', 'festival']
  };

  console.log('🌍 I18N AUDIT REPORT');
  console.log('===================');
  console.log('');

  try {
    // Detect hardcoded strings
    console.log('📝 Scanning for hardcoded strings...');
    const detector = new SimpleStringDetector(config);
    const stringResult = await detector.detectHardcodedStrings();

    // Validate translations
    console.log('🔧 Validating translation files...');
    const validator = new SimpleTranslationValidator(config);
    const validationResult = await validator.validateTranslations();

    // Display results
    console.log('');
    console.log('🔤 HARDCODED STRINGS');
    console.log('-------------------');
    console.log(`Total found: ${stringResult.hardcodedStrings.length}`);
    console.log(`Files affected: ${stringResult.affectedFiles.length}/${stringResult.totalFiles}`);
    
    if (stringResult.hardcodedStrings.length > 0) {
      console.log('');
      console.log('Top 10 hardcoded strings:');
      stringResult.hardcodedStrings.slice(0, 10).forEach((str, i) => {
        console.log(`${i + 1}. "${str.content}" in ${path.basename(str.file)}:${str.line} (${str.priority})`);
      });
    }

    console.log('');
    console.log('❌ MISSING TRANSLATIONS');
    console.log('----------------------');
    let totalMissing = 0;
    for (const missing of validationResult.missingKeys) {
      totalMissing += missing.keys.length;
      console.log(`${missing.language}/${missing.namespace}: ${missing.keys.length} missing keys`);
    }
    console.log(`Total missing: ${totalMissing}`);

    console.log('');
    console.log('✅ Audit complete!');
    
    if (stringResult.hardcodedStrings.length > 0 || totalMissing > 0) {
      console.log('');
      console.log('💡 NEXT STEPS:');
      console.log('- Replace hardcoded strings with translation keys');
      console.log('- Add missing translations to language files');
      console.log('- Run audit again to verify improvements');
    }

  } catch (error) {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  }
}

// Run the audit
if (require.main === module) {
  runAudit();
}

module.exports = { runAudit };