import { StringDetector } from './string-detector';
import { TranslationValidator } from './translation-validator';
import { 
  TranslationAuditReport, 
  AuditConfig, 
  Recommendation, 
  CriticalIssue,
  MissingTranslation 
} from './types';

export class CoverageAnalyzer {
  private stringDetector: StringDetector;
  private translationValidator: TranslationValidator;
  private config: AuditConfig;

  constructor(config: AuditConfig) {
    this.config = config;
    this.stringDetector = new StringDetector(config);
    this.translationValidator = new TranslationValidator(config);
  }

  /**
   * Generates a comprehensive i18n audit report
   */
  async generateAuditReport(): Promise<TranslationAuditReport> {
    console.log('🔍 Starting comprehensive i18n audit...');

    // Detect hardcoded strings
    console.log('📝 Scanning for hardcoded strings...');
    const stringDetectionResult = await this.stringDetector.detectHardcodedStrings();

    // Validate translation files
    console.log('🔧 Validating translation files...');
    const validationResult = await this.translationValidator.validateTranslations();

    // Calculate coverage metrics
    console.log('📊 Calculating coverage metrics...');
    const languageCoverage = await this.calculateLanguageCoverage();
    const overallCoverage = this.calculateOverallCoverage(languageCoverage);

    // Generate missing translations list
    const missingTranslations = this.generateMissingTranslationsList(validationResult);

    // Generate recommendations
    const recommendations = this.generateRecommendations(
      stringDetectionResult,
      validationResult,
      languageCoverage
    );

    // Identify critical issues
    const criticalIssues = this.identifyCriticalIssues(
      stringDetectionResult,
      validationResult,
      languageCoverage
    );

    const report: TranslationAuditReport = {
      timestamp: new Date().toISOString(),
      overallCoverage,
      languageCoverage,
      hardcodedStrings: stringDetectionResult.hardcodedStrings,
      missingTranslations,
      recommendations,
      criticalIssues
    };

    console.log('✅ Audit complete!');
    return report;
  }

  /**
   * Calculates coverage percentage for each language
   */
  private async calculateLanguageCoverage(): Promise<Record<string, number>> {
    const coverage: Record<string, number> = {};

    for (const language of this.config.supportedLanguages) {
      coverage[language] = await this.translationValidator.getLanguageCoverage(language);
    }

    return coverage;
  }

  /**
   * Calculates overall coverage across all languages
   */
  private calculateOverallCoverage(languageCoverage: Record<string, number>): number {
    const coverageValues = Object.values(languageCoverage);
    return coverageValues.length > 0 
      ? coverageValues.reduce((sum, coverage) => sum + coverage, 0) / coverageValues.length
      : 0;
  }

  /**
   * Generates a list of missing translations from validation results
   */
  private generateMissingTranslationsList(validationResult: any): MissingTranslation[] {
    const missingTranslations: MissingTranslation[] = [];

    // Group missing keys by key and namespace
    const keyGroups: Record<string, {
      namespace: string;
      missingInLanguages: string[];
    }> = {};

    for (const missing of validationResult.missingKeys) {
      for (const key of missing.keys) {
        const fullKey = `${missing.namespace}.${key}`;
        if (!keyGroups[fullKey]) {
          keyGroups[fullKey] = {
            namespace: missing.namespace,
            missingInLanguages: []
          };
        }
        keyGroups[fullKey].missingInLanguages.push(missing.language);
      }
    }

    // Convert to MissingTranslation objects
    for (const [key, group] of Object.entries(keyGroups)) {
      missingTranslations.push({
        key: key.replace(`${group.namespace}.`, ''),
        namespace: group.namespace,
        missingInLanguages: group.missingInLanguages,
        context: 'translation-file',
        priority: this.determineMissingTranslationPriority(group.missingInLanguages.length)
      });
    }

    return missingTranslations;
  }

  /**
   * Generates actionable recommendations based on audit results
   */
  private generateRecommendations(
    stringDetectionResult: any,
    validationResult: any,
    languageCoverage: Record<string, number>
  ): Recommendation[] {
    const recommendations: Recommendation[] = [];

    // Recommendations for hardcoded strings
    if (stringDetectionResult.hardcodedStrings.length > 0) {
      const highPriorityStrings = stringDetectionResult.hardcodedStrings
        .filter((s: any) => s.priority === 'high');
      
      if (highPriorityStrings.length > 0) {
        recommendations.push({
          type: 'fix-hardcoded',
          description: `Fix ${highPriorityStrings.length} high-priority hardcoded strings`,
          files: [...new Set(highPriorityStrings.map((s: any) => s.file))] as string[],
          estimatedEffort: highPriorityStrings.length > 10 ? 'high' : 'medium',
          autoFixable: false
        });
      }

      const accessibilityStrings = stringDetectionResult.hardcodedStrings
        .filter((s: any) => s.context === 'attribute');
      
      if (accessibilityStrings.length > 0) {
        recommendations.push({
          type: 'accessibility',
          description: `Translate ${accessibilityStrings.length} accessibility attributes`,
          files: [...new Set(accessibilityStrings.map((s: any) => s.file))] as string[],
          estimatedEffort: 'medium',
          autoFixable: false
        });
      }
    }

    // Recommendations for missing translations
    if (validationResult.missingKeys.length > 0) {
      const totalMissingKeys = validationResult.missingKeys
        .reduce((sum: number, mk: any) => sum + mk.keys.length, 0);
      
      recommendations.push({
        type: 'add-translation',
        description: `Add ${totalMissingKeys} missing translation keys`,
        files: [],
        estimatedEffort: totalMissingKeys > 50 ? 'high' : 'medium',
        autoFixable: true
      });
    }

    // Recommendations for low coverage languages
    for (const [language, coverage] of Object.entries(languageCoverage)) {
      if (coverage < 80) {
        recommendations.push({
          type: 'improve-structure',
          description: `Improve ${language} translation coverage (currently ${coverage.toFixed(1)}%)`,
          files: [],
          estimatedEffort: coverage < 50 ? 'high' : 'medium',
          autoFixable: false
        });
      }
    }

    // Recommendations for quality issues
    if (validationResult.qualityIssues.length > 0) {
      const emptyTranslations = validationResult.qualityIssues
        .filter((qi: any) => qi.issue === 'empty');
      
      if (emptyTranslations.length > 0) {
        recommendations.push({
          type: 'improve-structure',
          description: `Fix ${emptyTranslations.length} empty translation values`,
          files: [],
          estimatedEffort: 'low',
          autoFixable: true
        });
      }
    }

    return recommendations;
  }

  /**
   * Identifies critical issues that need immediate attention
   */
  private identifyCriticalIssues(
    stringDetectionResult: any,
    validationResult: any,
    languageCoverage: Record<string, number>
  ): CriticalIssue[] {
    const criticalIssues: CriticalIssue[] = [];

    // Critical: High-priority hardcoded strings
    const criticalHardcodedStrings = stringDetectionResult.hardcodedStrings
      .filter((s: any) => s.priority === 'high' && s.context === 'attribute');
    
    for (const str of criticalHardcodedStrings) {
      criticalIssues.push({
        type: 'hardcoded-string',
        severity: 'high',
        description: `Accessibility attribute not translated: "${str.content}"`,
        file: str.file,
        line: str.line,
        suggestedFix: `Replace with translation key: ${str.suggestedKey}`
      });
    }

    // Critical: Languages with very low coverage
    for (const [language, coverage] of Object.entries(languageCoverage)) {
      if (coverage < 50) {
        criticalIssues.push({
          type: 'missing-key',
          severity: 'critical',
          description: `${language} has very low translation coverage (${coverage.toFixed(1)}%)`,
          suggestedFix: `Add missing translations for ${language}`
        });
      }
    }

    // Critical: Broken translation files
    for (const qualityIssue of validationResult.qualityIssues) {
      if (qualityIssue.issue === 'malformed') {
        criticalIssues.push({
          type: 'broken-translation',
          severity: 'high',
          description: `Malformed translation: ${qualityIssue.key} in ${qualityIssue.language}`,
          suggestedFix: 'Fix JSON syntax or translation format'
        });
      }
    }

    return criticalIssues;
  }

  /**
   * Determines priority for missing translations based on how many languages are missing it
   */
  private determineMissingTranslationPriority(missingCount: number): 'critical' | 'high' | 'medium' | 'low' {
    const totalLanguages = this.config.supportedLanguages.length;
    const missingPercentage = (missingCount / totalLanguages) * 100;

    if (missingPercentage >= 75) return 'critical';
    if (missingPercentage >= 50) return 'high';
    if (missingPercentage >= 25) return 'medium';
    return 'low';
  }

  /**
   * Generates a summary report in text format
   */
  generateTextSummary(report: TranslationAuditReport): string {
    const lines: string[] = [];
    
    lines.push('🌍 I18N AUDIT REPORT');
    lines.push('===================');
    lines.push('');
    lines.push(`📅 Generated: ${new Date(report.timestamp).toLocaleString()}`);
    lines.push(`📊 Overall Coverage: ${report.overallCoverage.toFixed(1)}%`);
    lines.push('');

    // Language coverage
    lines.push('🗣️  LANGUAGE COVERAGE');
    lines.push('--------------------');
    for (const [language, coverage] of Object.entries(report.languageCoverage)) {
      const status = coverage >= 90 ? '✅' : coverage >= 70 ? '⚠️' : '❌';
      lines.push(`${status} ${language.toUpperCase()}: ${coverage.toFixed(1)}%`);
    }
    lines.push('');

    // Hardcoded strings summary
    lines.push('🔤 HARDCODED STRINGS');
    lines.push('-------------------');
    lines.push(`Total found: ${report.hardcodedStrings.length}`);
    
    const byPriority = report.hardcodedStrings.reduce((acc, str) => {
      acc[str.priority] = (acc[str.priority] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    for (const [priority, count] of Object.entries(byPriority)) {
      const icon = priority === 'high' ? '🔴' : priority === 'medium' ? '🟡' : '🟢';
      lines.push(`${icon} ${priority}: ${count}`);
    }
    lines.push('');

    // Missing translations
    lines.push('❌ MISSING TRANSLATIONS');
    lines.push('----------------------');
    lines.push(`Total missing keys: ${report.missingTranslations.length}`);
    lines.push('');

    // Critical issues
    if (report.criticalIssues.length > 0) {
      lines.push('🚨 CRITICAL ISSUES');
      lines.push('-----------------');
      for (const issue of report.criticalIssues.slice(0, 5)) {
        lines.push(`• ${issue.description}`);
      }
      if (report.criticalIssues.length > 5) {
        lines.push(`... and ${report.criticalIssues.length - 5} more`);
      }
      lines.push('');
    }

    // Recommendations
    lines.push('💡 RECOMMENDATIONS');
    lines.push('-----------------');
    for (const rec of report.recommendations.slice(0, 3)) {
      const effort = rec.estimatedEffort === 'high' ? '🔴' : 
                    rec.estimatedEffort === 'medium' ? '🟡' : '🟢';
      lines.push(`${effort} ${rec.description}`);
    }

    return lines.join('\n');
  }
}