/**
 * Translation validation utility
 * Helps identify missing translations and ensures consistency across languages
 */

import { supportedLanguages } from '../locales/languages';

interface ValidationResult {
  language: string;
  namespace: string;
  missingKeys: string[];
  totalKeys: number;
  coverage: number;
}

interface TranslationObject {
  [key: string]: any;
}

/**
 * Recursively get all keys from a translation object
 */
function getAllKeys(obj: TranslationObject, prefix = ''): string[] {
  const keys: string[] = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

/**
 * Check if a key exists in a translation object
 */
function hasKey(obj: TranslationObject, keyPath: string): boolean {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (typeof current !== 'object' || current === null || !(key in current)) {
      return false;
    }
    current = current[key];
  }
  
  return current !== undefined && current !== null && (typeof current !== 'string' || current !== '');
}

/**
 * Validate translation completeness for a specific namespace
 */
export function validateNamespace(
  referenceTranslation: TranslationObject,
  targetTranslation: TranslationObject,
  language: string,
  namespace: string
): ValidationResult {
  const referenceKeys = getAllKeys(referenceTranslation);
  const missingKeys: string[] = [];
  
  for (const key of referenceKeys) {
    if (!hasKey(targetTranslation, key)) {
      missingKeys.push(key);
    }
  }
  
  const coverage = ((referenceKeys.length - missingKeys.length) / referenceKeys.length) * 100;
  
  return {
    language,
    namespace,
    missingKeys,
    totalKeys: referenceKeys.length,
    coverage: Math.round(coverage * 100) / 100
  };
}

/**
 * Generate a translation coverage report
 */
export function generateCoverageReport(translations: Record<string, Record<string, TranslationObject>>): ValidationResult[] {
  const results: ValidationResult[] = [];
  const referenceLanguage = 'en';
  const namespaces = ['common', 'pages', 'recipes', 'festival', 'accessibility'];
  
  for (const language of supportedLanguages.map(lang => lang.code)) {
    if (language === referenceLanguage) continue;
    
    for (const namespace of namespaces) {
      const reference = translations[referenceLanguage]?.[namespace];
      const target = translations[language]?.[namespace];
      
      if (reference && target) {
        const result = validateNamespace(reference, target, language, namespace);
        results.push(result);
      }
    }
  }
  
  return results;
}

/**
 * Log missing translations to console (development only)
 */
export function logMissingTranslations(results: ValidationResult[]): void {
  if (process.env.NODE_ENV !== 'development') return;
  
  console.group('🌐 Translation Coverage Report');
  
  const summary = results.reduce((acc, result) => {
    const key = result.language;
    if (!acc[key]) {
      acc[key] = { total: 0, missing: 0, coverage: 0 };
    }
    acc[key].total += result.totalKeys;
    acc[key].missing += result.missingKeys.length;
    acc[key].coverage = ((acc[key].total - acc[key].missing) / acc[key].total) * 100;
    return acc;
  }, {} as Record<string, { total: number; missing: number; coverage: number }>);
  
  console.table(summary);
  
  // Log detailed missing keys for languages with low coverage
  results.forEach(result => {
    if (result.coverage < 95 && result.missingKeys.length > 0) {
      console.group(`❌ ${result.language}:${result.namespace} (${result.coverage}% coverage)`);
      console.log('Missing keys:', result.missingKeys);
      console.groupEnd();
    }
  });
  
  console.groupEnd();
}

/**
 * Simple fallback value generator for missing translations
 */
export function generateFallbackValue(key: string, language: string): string {
  // Return the key itself as fallback, indicating missing translation
  return `[${language}:${key}]`;
}