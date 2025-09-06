import * as fs from 'fs';
import * as path from 'path';
import { TranslationValidationResult, AuditConfig } from './types';

export class TranslationValidator {
  private config: AuditConfig;

  constructor(config: AuditConfig) {
    this.config = config;
  }

  /**
   * Validates translation files for consistency and completeness
   */
  async validateTranslations(): Promise<TranslationValidationResult> {
    const translationData = await this.loadAllTranslations();
    
    const missingKeys = this.findMissingKeys(translationData);
    const structuralInconsistencies = this.findStructuralInconsistencies(translationData);
    const qualityIssues = this.findQualityIssues(translationData);

    return {
      missingKeys,
      structuralInconsistencies,
      qualityIssues
    };
  }

  /**
   * Loads all translation files for all languages and namespaces
   */
  private async loadAllTranslations(): Promise<Record<string, Record<string, any>>> {
    const translations: Record<string, Record<string, any>> = {};

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
          console.warn(`Could not load ${language}/${namespace}.json:`, error);
          translations[language][namespace] = {};
        }
      }
    }

    return translations;
  }

  /**
   * Finds keys that are missing in some languages
   */
  private findMissingKeys(translations: Record<string, Record<string, any>>) {
    const missingKeys: {
      language: string;
      namespace: string;
      keys: string[];
    }[] = [];

    // Use English as the reference language
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

  /**
   * Finds structural inconsistencies between translation files
   */
  private findStructuralInconsistencies(translations: Record<string, Record<string, any>>) {
    const referenceLanguage = 'en';
    const expectedStructure = translations[referenceLanguage] || {};
    const actualStructure: Record<string, Record<string, any>> = {};

    for (const language of this.config.supportedLanguages) {
      if (language === referenceLanguage) continue;
      actualStructure[language] = translations[language] || {};
    }

    return {
      expectedStructure,
      actualStructure
    };
  }

  /**
   * Finds quality issues in translations
   */
  private findQualityIssues(translations: Record<string, Record<string, any>>) {
    const qualityIssues: {
      language: string;
      key: string;
      issue: 'empty' | 'placeholder' | 'untranslated' | 'malformed';
    }[] = [];

    for (const language of this.config.supportedLanguages) {
      for (const namespace of this.config.namespaces) {
        const namespaceData = translations[language]?.[namespace] || {};
        const issues = this.checkNamespaceQuality(namespaceData, language, namespace);
        qualityIssues.push(...issues);
      }
    }

    return qualityIssues;
  }

  /**
   * Checks quality issues in a specific namespace
   */
  private checkNamespaceQuality(
    namespaceData: any, 
    language: string, 
    namespace: string,
    keyPrefix = ''
  ): Array<{
    language: string;
    key: string;
    issue: 'empty' | 'placeholder' | 'untranslated' | 'malformed';
  }> {
    const issues: Array<{
      language: string;
      key: string;
      issue: 'empty' | 'placeholder' | 'untranslated' | 'malformed';
    }> = [];

    for (const [key, value] of Object.entries(namespaceData)) {
      const fullKey = keyPrefix ? `${keyPrefix}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        // Recursively check nested objects
        const nestedIssues = this.checkNamespaceQuality(value, language, namespace, fullKey);
        issues.push(...nestedIssues);
      } else if (typeof value === 'string') {
        // Check string values for quality issues
        if (value.trim() === '') {
          issues.push({
            language,
            key: `${namespace}.${fullKey}`,
            issue: 'empty'
          });
        } else if (this.isPlaceholderValue(value)) {
          issues.push({
            language,
            key: `${namespace}.${fullKey}`,
            issue: 'placeholder'
          });
        } else if (this.isUntranslated(value, language)) {
          issues.push({
            language,
            key: `${namespace}.${fullKey}`,
            issue: 'untranslated'
          });
        } else if (this.isMalformed(value)) {
          issues.push({
            language,
            key: `${namespace}.${fullKey}`,
            issue: 'malformed'
          });
        }
      }
    }

    return issues;
  }

  /**
   * Gets all keys from a nested object (flattened)
   */
  private getAllKeys(obj: any, prefix = ''): string[] {
    const keys: string[] = [];

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

  /**
   * Checks if a value is a placeholder (TODO, FIXME, etc.)
   */
  private isPlaceholderValue(value: string): boolean {
    const placeholderPatterns = [
      /^TODO/i,
      /^FIXME/i,
      /^PLACEHOLDER/i,
      /^TBD/i,
      /^\[.*\]$/,
      /^{{.*}}$/,
    ];

    return placeholderPatterns.some(pattern => pattern.test(value.trim()));
  }

  /**
   * Checks if a value appears to be untranslated (still in English for non-English languages)
   */
  private isUntranslated(value: string, language: string): boolean {
    if (language === 'en') return false;

    // Simple heuristic: if it contains only ASCII letters and common English words
    const englishWords = [
      'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'home', 'about', 'contact', 'help', 'search', 'login', 'logout', 'register',
      'submit', 'cancel', 'save', 'delete', 'edit', 'add', 'remove', 'update',
      'loading', 'error', 'success', 'warning', 'info', 'close', 'open', 'show', 'hide'
    ];

    const words = value.toLowerCase().split(/\s+/);
    const englishWordCount = words.filter(word => 
      englishWords.includes(word) || /^[a-z]+$/.test(word)
    ).length;

    // If more than 70% of words appear to be English, flag as untranslated
    return englishWordCount / words.length > 0.7;
  }

  /**
   * Checks if a value appears malformed
   */
  private isMalformed(value: string): boolean {
    // Check for common malformation patterns
    const malformedPatterns = [
      /\{\{[^}]*$/,        // Unclosed template
      /\[[^\]]*$/,         // Unclosed bracket
      /\([^)]*$/,          // Unclosed parenthesis
      /^[^a-zA-Z0-9\s]/,   // Starts with special character
      /\n\s*\n/,           // Multiple line breaks
    ];

    return malformedPatterns.some(pattern => pattern.test(value));
  }

  /**
   * Validates translation file structure against schema
   */
  async validateTranslationStructure(language: string, namespace: string): Promise<boolean> {
    try {
      const filePath = path.join(
        this.config.translationDirectories[0],
        language,
        `${namespace}.json`
      );

      const content = await fs.promises.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);

      // Basic validation - ensure it's an object
      return typeof data === 'object' && data !== null;
    } catch (error) {
      return false;
    }
  }

  /**
   * Gets translation coverage percentage for a language
   */
  async getLanguageCoverage(language: string): Promise<number> {
    const referenceLanguage = 'en';
    
    try {
      let totalKeys = 0;
      let translatedKeys = 0;

      for (const namespace of this.config.namespaces) {
        // Get reference keys
        const refPath = path.join(
          this.config.translationDirectories[0],
          referenceLanguage,
          `${namespace}.json`
        );
        const refContent = await fs.promises.readFile(refPath, 'utf-8');
        const refData = JSON.parse(refContent);
        const refKeys = this.getAllKeys(refData);
        totalKeys += refKeys.length;

        // Get target language keys
        const langPath = path.join(
          this.config.translationDirectories[0],
          language,
          `${namespace}.json`
        );
        
        try {
          const langContent = await fs.promises.readFile(langPath, 'utf-8');
          const langData = JSON.parse(langContent);
          // const langKeys = this.getAllKeys(langData); // Not used currently
          
          // Count non-empty translations
          for (const key of refKeys) {
            const value = this.getNestedValue(langData, key);
            if (value && typeof value === 'string' && value.trim() !== '') {
              translatedKeys++;
            }
          }
        } catch (error) {
          // Language file doesn't exist or is malformed
          console.warn(`Could not load ${language}/${namespace}.json`);
        }
      }

      return totalKeys > 0 ? (translatedKeys / totalKeys) * 100 : 0;
    } catch (error) {
      console.warn(`Error calculating coverage for ${language}:`, error);
      return 0;
    }
  }

  /**
   * Gets a nested value from an object using dot notation
   */
  private getNestedValue(obj: any, key: string): any {
    return key.split('.').reduce((current, prop) => current?.[prop], obj);
  }
}