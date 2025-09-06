# I18n Audit System

A comprehensive internationalization audit system for detecting hardcoded strings, validating translation files, and generating coverage reports.

## Overview

This audit system helps ensure complete i18n coverage across the Navratri app for all 8 supported languages (English, Hindi, Tamil, Marathi, Telugu, Malayalam, Bengali, Kannada).

## Features

### 🔍 String Detection
- Scans all TSX/TS files for hardcoded strings
- Detects JSX content, HTML attributes, template literals, and toast messages
- Prioritizes findings by importance (high/medium/low)
- Suggests translation keys for each finding

### 🔧 Translation Validation
- Validates consistency across all 8 language files
- Identifies missing translation keys
- Checks for quality issues (empty, placeholder, untranslated content)
- Validates JSON structure and format

### 📊 Coverage Analysis
- Generates comprehensive audit reports
- Calculates coverage percentages per language
- Provides actionable recommendations
- Identifies critical issues requiring immediate attention

## Quick Start

### Run Complete Audit
```bash
npm run i18n:audit
```

This will scan all source files and generate a comprehensive report showing:
- Total hardcoded strings found
- Missing translation keys per language
- Coverage statistics
- Actionable recommendations

### Using the TypeScript API

```typescript
import { runQuickAudit, detectHardcodedStrings, validateTranslations } from './src/utils/i18n-audit';

// Run complete audit
const report = await runQuickAudit();

// Run only string detection
const stringResults = await detectHardcodedStrings();

// Run only translation validation
const validationResults = await validateTranslations();
```

## Configuration

The audit system uses the following default configuration:

```typescript
{
  sourceDirectories: ['src'],
  translationDirectories: ['src/locales'],
  supportedLanguages: ['en', 'hi', 'ta', 'mr', 'te', 'ml', 'bn', 'kn'],
  namespaces: ['common', 'pages', 'recipes', 'festival'],
  excludePatterns: [
    'node_modules/**',
    'dist/**',
    'build/**',
    '**/*.test.ts',
    '**/*.test.tsx'
  ]
}
```

You can customize the configuration when using the API:

```typescript
import { I18nAuditRunner } from './src/utils/i18n-audit';

const runner = new I18nAuditRunner({
  sourceDirectories: ['src', 'components'],
  excludePatterns: ['**/*.stories.tsx']
});

const report = await runner.runAudit();
```

## Detection Patterns

### JSX Content Strings
Detects hardcoded text in JSX elements:
```jsx
<div>Hardcoded text</div>  // ❌ Detected
<div>{t('key')}</div>      // ✅ Ignored (uses translation)
```

### HTML Attributes
Detects untranslated accessibility and form attributes:
```jsx
<img alt="Hardcoded alt text" />           // ❌ Detected
<input placeholder="Enter your name" />    // ❌ Detected
<button aria-label="Close dialog" />       // ❌ Detected
```

### Template Literals
Detects hardcoded strings in template literals:
```javascript
const message = `Welcome to our app`;      // ❌ Detected
const message = `Welcome ${t('user')}`;    // ❌ Detected (partial)
const message = t('welcome', { user });    // ✅ Ignored
```

### Toast Messages
Detects hardcoded notification messages:
```javascript
toast.show('Operation successful');        // ❌ Detected
Toast.show({ text: 'Error occurred' });   // ❌ Detected
```

## Report Structure

The audit generates detailed reports with the following structure:

```typescript
interface TranslationAuditReport {
  timestamp: string;
  overallCoverage: number;
  languageCoverage: Record<string, number>;
  hardcodedStrings: HardcodedString[];
  missingTranslations: MissingTranslation[];
  recommendations: Recommendation[];
  criticalIssues: CriticalIssue[];
}
```

### Sample Output

```
🌍 I18N AUDIT REPORT
===================

📅 Generated: 1/15/2025, 10:30:00 AM
📊 Overall Coverage: 78.5%

🗣️  LANGUAGE COVERAGE
--------------------
✅ EN: 100.0%
⚠️  HI: 85.2%
⚠️  TA: 82.1%
❌ MR: 65.3%

🔤 HARDCODED STRINGS
-------------------
Total found: 52
🔴 high: 8
🟡 medium: 35
🟢 low: 9

❌ MISSING TRANSLATIONS
----------------------
Total missing keys: 455

🚨 CRITICAL ISSUES
-----------------
• Accessibility attribute not translated: "Close dialog"
• MR has very low translation coverage (65.3%)

💡 RECOMMENDATIONS
-----------------
🔴 Fix 8 high-priority hardcoded strings
🟡 Add 455 missing translation keys
🟡 Improve MR translation coverage
```

## Integration with Development Workflow

### Pre-commit Hook
Add to your pre-commit hooks to catch i18n issues early:

```bash
#!/bin/sh
npm run i18n:audit
if [ $? -ne 0 ]; then
  echo "❌ I18n audit failed. Please fix issues before committing."
  exit 1
fi
```

### CI/CD Pipeline
Include in your CI pipeline to ensure i18n quality:

```yaml
- name: Run I18n Audit
  run: npm run i18n:audit
```

### IDE Integration
The TypeScript API can be integrated into IDE extensions or development tools for real-time feedback.

## Best Practices

### 1. Regular Audits
- Run audits regularly during development
- Set up automated checks in CI/CD
- Monitor coverage trends over time

### 2. Prioritize Fixes
- Fix high-priority issues first (accessibility attributes)
- Address critical coverage gaps
- Use suggested translation keys as starting points

### 3. Translation Quality
- Ensure cultural appropriateness for regional content
- Use consistent terminology across languages
- Validate translations with native speakers

### 4. Maintenance
- Update audit configuration as project evolves
- Add new detection patterns for custom components
- Keep translation files synchronized

## Troubleshooting

### Common Issues

**"No matches found" for hardcoded strings**
- Check that source directories are correct
- Verify file extensions are included (.tsx, .ts)
- Ensure files are not excluded by patterns

**Translation validation errors**
- Check JSON syntax in translation files
- Verify all language directories exist
- Ensure consistent namespace structure

**Performance issues with large codebases**
- Use more specific include/exclude patterns
- Run audits on specific directories
- Consider running in CI rather than locally

### Debug Mode

Enable verbose logging by setting environment variable:
```bash
DEBUG=i18n-audit npm run i18n:audit
```

## Contributing

To extend the audit system:

1. Add new detection patterns in `string-detector.ts`
2. Enhance validation rules in `translation-validator.ts`
3. Update report generation in `coverage-analyzer.ts`
4. Add tests for new functionality

## API Reference

See the TypeScript interfaces in `types.ts` for complete API documentation.