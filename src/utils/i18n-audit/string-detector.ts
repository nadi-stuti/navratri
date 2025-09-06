import * as fs from 'fs';
import * as path from 'path';
import { HardcodedString, StringDetectionResult, AuditConfig } from './types';

export class StringDetector {
  private config: AuditConfig;

  constructor(config: AuditConfig) {
    this.config = config;
  }

  /**
   * Scans all TSX files for hardcoded strings
   */
  async detectHardcodedStrings(): Promise<StringDetectionResult> {
    const hardcodedStrings: HardcodedString[] = [];
    const affectedFiles: string[] = [];
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

  /**
   * Recursively gets all TSX files from a directory
   */
  private async getAllTsxFiles(dir: string): Promise<string[]> {
    const files: string[] = [];
    
    try {
      const entries = await fs.promises.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          // Skip node_modules and other excluded directories
          if (!this.shouldExcludeDirectory(entry.name)) {
            const subFiles = await this.getAllTsxFiles(fullPath);
            files.push(...subFiles);
          }
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(`Could not read directory ${dir}:`, error);
    }
    
    return files;
  }

  /**
   * Scans a single file for hardcoded strings
   */
  private async scanFile(filePath: string): Promise<HardcodedString[]> {
    try {
      const content = await fs.promises.readFile(filePath, 'utf-8');
      const lines = content.split('\n');
      const hardcodedStrings: HardcodedString[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineNumber = i + 1;

        // Detect JSX content strings
        const jsxStrings = this.detectJsxStrings(line, lineNumber, filePath);
        hardcodedStrings.push(...jsxStrings);

        // Detect attribute strings (alt, aria-label, placeholder, etc.)
        const attributeStrings = this.detectAttributeStrings(line, lineNumber, filePath);
        hardcodedStrings.push(...attributeStrings);

        // Detect template literals and string concatenations
        const templateStrings = this.detectTemplateStrings(line, lineNumber, filePath);
        hardcodedStrings.push(...templateStrings);

        // Detect toast/alert messages
        const toastStrings = this.detectToastStrings(line, lineNumber, filePath);
        hardcodedStrings.push(...toastStrings);

        // Detect console messages
        const consoleStrings = this.detectConsoleStrings(line, lineNumber, filePath);
        hardcodedStrings.push(...consoleStrings);
      }

      return hardcodedStrings;
    } catch (error) {
      console.warn(`Could not read file ${filePath}:`, error);
      return [];
    }
  }

  /**
   * Detects hardcoded strings in JSX content
   */
  private detectJsxStrings(line: string, lineNumber: number, filePath: string): HardcodedString[] {
    const strings: HardcodedString[] = [];
    
    // Pattern to match JSX text content (not in attributes)
    // Matches text between > and < that isn't a component or variable
    const jsxTextPattern = />([^<>{]*[a-zA-Z][^<>{}]*)</g;
    
    let match;
    while ((match = jsxTextPattern.exec(line)) !== null) {
      const content = match[1].trim();
      
      // Skip if it's empty, just whitespace, numbers, or contains translation calls
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
          priority: this.determinePriority(content, 'jsx-content'),
          suggestedKey: this.generateSuggestedKey(content, filePath)
        });
      }
    }

    return strings;
  }

  /**
   * Detects hardcoded strings in HTML/JSX attributes
   */
  private detectAttributeStrings(line: string, lineNumber: number, filePath: string): HardcodedString[] {
    const strings: HardcodedString[] = [];
    
    // Patterns for various attributes that should be translated
    const attributePatterns = [
      /alt=["']([^"']+)["']/g,
      /aria-label=["']([^"']+)["']/g,
      /placeholder=["']([^"']+)["']/g,
      /title=["']([^"']+)["']/g,
      /aria-describedby=["']([^"']+)["']/g,
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
            priority: 'high', // Accessibility attributes are high priority
            suggestedKey: this.generateSuggestedKey(content, filePath)
          });
        }
      }
    }

    return strings;
  }

  /**
   * Detects hardcoded strings in template literals and string operations
   */
  private detectTemplateStrings(line: string, lineNumber: number, filePath: string): HardcodedString[] {
    const strings: HardcodedString[] = [];
    
    // Pattern for template literals with hardcoded text
    const templatePattern = /`([^`]*[a-zA-Z][^`]*)`/g;
    
    let match;
    while ((match = templatePattern.exec(line)) !== null) {
      const content = match[1].trim();
      
      if (content && 
          !this.isTranslationCall(content) && 
          !this.isJustVariables(content) &&
          content.length > 1) {
        
        strings.push({
          file: filePath,
          line: lineNumber,
          column: match.index + 1,
          content,
          context: 'template-literal',
          priority: this.determinePriority(content, 'template-literal'),
          suggestedKey: this.generateSuggestedKey(content, filePath)
        });
      }
    }

    return strings;
  }

  /**
   * Detects hardcoded strings in toast/alert calls
   */
  private detectToastStrings(line: string, lineNumber: number, filePath: string): HardcodedString[] {
    const strings: HardcodedString[] = [];
    
    // Patterns for toast/alert calls
    const toastPatterns = [
      /toast\.show\(\s*["']([^"']+)["']/g,
      /alert\(\s*["']([^"']+)["']/g,
      /Toast\.show\(\s*{[^}]*text:\s*["']([^"']+)["']/g,
    ];

    for (const pattern of toastPatterns) {
      let match;
      while ((match = pattern.exec(line)) !== null) {
        const content = match[1].trim();
        
        if (content && !this.isTranslationCall(content)) {
          strings.push({
            file: filePath,
            line: lineNumber,
            column: match.index + 1,
            content,
            context: 'toast',
            priority: 'high', // User-facing messages are high priority
            suggestedKey: this.generateSuggestedKey(content, filePath)
          });
        }
      }
    }

    return strings;
  }

  /**
   * Detects hardcoded strings in console calls (lower priority)
   */
  private detectConsoleStrings(line: string, lineNumber: number, filePath: string): HardcodedString[] {
    const strings: HardcodedString[] = [];
    
    // Pattern for console calls with hardcoded strings
    const consolePattern = /console\.(log|warn|error|info)\(\s*["']([^"']+)["']/g;
    
    let match;
    while ((match = consolePattern.exec(line)) !== null) {
      const content = match[2].trim();
      
      if (content && content.length > 3) { // Only longer console messages
        strings.push({
          file: filePath,
          line: lineNumber,
          column: match.index + 1,
          content,
          context: 'console',
          priority: 'low', // Console messages are low priority for i18n
          suggestedKey: this.generateSuggestedKey(content, filePath)
        });
      }
    }

    return strings;
  }

  /**
   * Checks if a string contains translation function calls
   */
  private isTranslationCall(content: string): boolean {
    const translationPatterns = [
      /\bt\(/,           // t() function
      /useTranslation/,  // useTranslation hook
      /i18n\./,          // i18n object calls
      /\$t\(/,           // $t() function (Vue style)
    ];

    return translationPatterns.some(pattern => pattern.test(content));
  }

  /**
   * Checks if content is just numbers
   */
  private isJustNumbers(content: string): boolean {
    return /^\d+(\.\d+)?$/.test(content.trim());
  }

  /**
   * Checks if content is just symbols/punctuation
   */
  private isJustSymbols(content: string): boolean {
    return /^[^\w\s]+$/.test(content.trim());
  }

  /**
   * Checks if content is just template variables
   */
  private isJustVariables(content: string): boolean {
    return /^\$\{[^}]+\}$/.test(content.trim());
  }

  /**
   * Determines priority based on content and context
   */
  private determinePriority(content: string, context: string): 'high' | 'medium' | 'low' {
    if (context === 'attribute' || context === 'toast') {
      return 'high';
    }
    
    if (content.length > 50 || context === 'jsx-content') {
      return 'medium';
    }
    
    return 'low';
  }

  /**
   * Generates a suggested translation key based on content and file
   */
  private generateSuggestedKey(content: string, filePath: string): string {
    const fileName = path.basename(filePath, path.extname(filePath));
    const cleanContent = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 30);
    
    return `${fileName}.${cleanContent}`;
  }

  /**
   * Checks if directory should be excluded from scanning
   */
  private shouldExcludeDirectory(dirName: string): boolean {
    const excludedDirs = ['node_modules', '.git', 'dist', 'build', '.next', 'coverage'];
    return excludedDirs.includes(dirName);
  }

  /**
   * Generates summary statistics
   */
  private generateSummary(hardcodedStrings: HardcodedString[]) {
    const byContext: Record<string, number> = {};
    const byPriority: Record<string, number> = {};

    for (const str of hardcodedStrings) {
      byContext[str.context] = (byContext[str.context] || 0) + 1;
      byPriority[str.priority] = (byPriority[str.priority] || 0) + 1;
    }

    return { byContext, byPriority };
  }
}