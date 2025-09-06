/**
 * Simple test script to verify the audit system functionality
 * Run with: npx tsx src/utils/i18n-audit/test-audit.ts
 */

import { I18nAuditRunner } from './audit-runner';

async function testAuditSystem() {
  console.log('🧪 Testing I18n Audit System');
  console.log('============================');

  try {
    // Create audit runner with test configuration
    const runner = new I18nAuditRunner({
      sourceDirectories: ['src/pages', 'src/components'],
      translationDirectories: ['src/locales'],
      supportedLanguages: ['en', 'hi', 'ta'],
      namespaces: ['common', 'pages']
    });

    console.log('📋 Configuration:');
    console.log(JSON.stringify(runner.getConfig(), null, 2));
    console.log('');

    // Test string detection
    console.log('🔍 Testing string detection...');
    const stringResults = await runner.runStringDetection();
    console.log(`Found ${stringResults.hardcodedStrings.length} hardcoded strings`);
    console.log(`Scanned ${stringResults.totalFiles} files`);
    console.log('');

    // Test translation validation
    console.log('🔧 Testing translation validation...');
    const validationResults = await runner.runTranslationValidation();
    console.log(`Found ${validationResults.missingKeys.length} missing key groups`);
    console.log('');

    // Test full audit
    console.log('📊 Running full audit...');
    const report = await runner.runAudit();
    
    console.log('✅ All tests passed!');
    console.log(`Overall coverage: ${report.overallCoverage.toFixed(1)}%`);
    console.log(`Critical issues: ${report.criticalIssues.length}`);
    console.log(`Recommendations: ${report.recommendations.length}`);

  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testAuditSystem();
}