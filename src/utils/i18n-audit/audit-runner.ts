import * as path from 'path';
import { CoverageAnalyzer } from './coverage-analyzer';
import { AuditConfig } from './types';

/**
 * Main audit runner that orchestrates the i18n audit process
 */
export class I18nAuditRunner {
  private config: AuditConfig;
  private analyzer: CoverageAnalyzer;

  constructor(config?: Partial<AuditConfig>) {
    this.config = this.createDefaultConfig(config);
    this.analyzer = new CoverageAnalyzer(this.config);
  }

  /**
   * Runs the complete i18n audit
   */
  async runAudit() {
    try {
      console.log('🚀 Starting I18n Audit...');
      console.log('========================');
      
      const report = await this.analyzer.generateAuditReport();
      
      // Generate and display summary
      const summary = this.analyzer.generateTextSummary(report);
      console.log(summary);
      
      // Save detailed report
      await this.saveReport(report);
      
      return report;
    } catch (error) {
      console.error('❌ Audit failed:', error);
      throw error;
    }
  }

  /**
   * Runs only hardcoded string detection
   */
  async runStringDetection() {
    const { StringDetector } = await import('./string-detector');
    const detector = new StringDetector(this.config);
    return await detector.detectHardcodedStrings();
  }

  /**
   * Runs only translation validation
   */
  async runTranslationValidation() {
    const { TranslationValidator } = await import('./translation-validator');
    const validator = new TranslationValidator(this.config);
    return await validator.validateTranslations();
  }

  /**
   * Creates default configuration
   */
  private createDefaultConfig(overrides?: Partial<AuditConfig>): AuditConfig {
    const defaultConfig: AuditConfig = {
      sourceDirectories: ['src'],
      translationDirectories: ['src/locales'],
      supportedLanguages: ['en', 'hi', 'ta', 'mr', 'te', 'ml', 'bn', 'kn'],
      namespaces: ['common', 'pages', 'recipes', 'festival'],
      excludePatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx'
      ],
      includePatterns: [
        'src/**/*.tsx',
        'src/**/*.ts'
      ]
    };

    return { ...defaultConfig, ...overrides };
  }

  /**
   * Saves the audit report to a file
   */
  private async saveReport(report: any) {
    try {
      const fs = await import('fs');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `i18n-audit-report-${timestamp}.json`;
      const filepath = path.join(process.cwd(), 'audit-reports', filename);
      
      // Ensure directory exists
      await fs.promises.mkdir(path.dirname(filepath), { recursive: true });
      
      // Save report
      await fs.promises.writeFile(filepath, JSON.stringify(report, null, 2));
      
      console.log(`📄 Detailed report saved to: ${filepath}`);
    } catch (error) {
      console.warn('⚠️  Could not save report file:', error);
    }
  }

  /**
   * Gets the current configuration
   */
  getConfig(): AuditConfig {
    return { ...this.config };
  }

  /**
   * Updates the configuration
   */
  updateConfig(updates: Partial<AuditConfig>) {
    this.config = { ...this.config, ...updates };
    this.analyzer = new CoverageAnalyzer(this.config);
  }
}

/**
 * Convenience function to run a quick audit
 */
export async function runQuickAudit(config?: Partial<AuditConfig>) {
  const runner = new I18nAuditRunner(config);
  return await runner.runAudit();
}

/**
 * Convenience function to detect hardcoded strings only
 */
export async function detectHardcodedStrings(config?: Partial<AuditConfig>) {
  const runner = new I18nAuditRunner(config);
  return await runner.runStringDetection();
}

/**
 * Convenience function to validate translations only
 */
export async function validateTranslations(config?: Partial<AuditConfig>) {
  const runner = new I18nAuditRunner(config);
  return await runner.runTranslationValidation();
}