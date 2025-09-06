// Types for the i18n audit system

export interface HardcodedString {
  file: string;
  line: number;
  column: number;
  content: string;
  context: 'jsx-content' | 'attribute' | 'template-literal' | 'toast' | 'console';
  suggestedKey?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface StringDetectionResult {
  hardcodedStrings: HardcodedString[];
  totalFiles: number;
  affectedFiles: string[];
  summary: {
    byContext: Record<string, number>;
    byPriority: Record<string, number>;
  };
}

export interface MissingTranslation {
  key: string;
  namespace: string;
  missingInLanguages: string[];
  suggestedTranslations?: Record<string, string>;
  context: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
}

export interface TranslationValidationResult {
  missingKeys: {
    language: string;
    namespace: string;
    keys: string[];
  }[];
  structuralInconsistencies: {
    expectedStructure: Record<string, any>;
    actualStructure: Record<string, Record<string, any>>;
  };
  qualityIssues: {
    language: string;
    key: string;
    issue: 'empty' | 'placeholder' | 'untranslated' | 'malformed';
  }[];
}

export interface TranslationAuditReport {
  timestamp: string;
  overallCoverage: number; // percentage
  languageCoverage: Record<string, number>;
  hardcodedStrings: HardcodedString[];
  missingTranslations: MissingTranslation[];
  recommendations: Recommendation[];
  criticalIssues: CriticalIssue[];
}

export interface Recommendation {
  type: 'add-translation' | 'fix-hardcoded' | 'improve-structure' | 'accessibility';
  description: string;
  files: string[];
  estimatedEffort: 'low' | 'medium' | 'high';
  autoFixable: boolean;
}

export interface CriticalIssue {
  type: 'missing-key' | 'hardcoded-string' | 'broken-translation' | 'accessibility';
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  file?: string;
  line?: number;
  suggestedFix?: string;
}

export interface AuditConfig {
  sourceDirectories: string[];
  translationDirectories: string[];
  supportedLanguages: string[];
  namespaces: string[];
  excludePatterns: string[];
  includePatterns: string[];
}