// Main exports for the i18n audit system

export { I18nAuditRunner, runQuickAudit, detectHardcodedStrings, validateTranslations } from './audit-runner';
export { StringDetector } from './string-detector';
export { TranslationValidator } from './translation-validator';
export { CoverageAnalyzer } from './coverage-analyzer';

export type {
  HardcodedString,
  StringDetectionResult,
  MissingTranslation,
  TranslationValidationResult,
  TranslationAuditReport,
  Recommendation,
  CriticalIssue,
  AuditConfig
} from './types';

// Convenience functions for common audit tasks
export * from './audit-runner';