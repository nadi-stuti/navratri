# Internationalization (i18n)

This directory contains the configuration and setup for the application's internationalization system.

## Structure

- `config.ts`: Main i18n configuration and initialization
- `index.ts`: Exports for i18n functionality

## Language Support

Currently supports 8 languages:

### Active Languages
1. English (en) - Default
2. Hindi (hi)
3. Marathi (mr)
4. Bengali (bn)

### Temporarily Disabled (Mobile Design Issues)
5. Tamil (ta)
6. Telugu (te)
7. Malayalam (ml)
8. Kannada (kn)

## Namespaces

The translations are organized into the following namespaces:

1. `common`: Shared UI elements and common text
2. `pages`: Page-specific content
3. `recipes`: Recipe-related content
4. `festival`: Festival information and cultural content
5. `accessibility`: Screen reader and accessibility text

## Implementation Details

### Configuration
```typescript
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
```

### Key Features

1. **Language Detection**
   - Automatic browser language detection
   - Local storage persistence
   - HTML lang attribute fallback

2. **Fallback System**
   - Primary fallback to English
   - Namespace-specific fallbacks
   - Key-specific fallbacks

3. **Performance Optimization**
   - Lazy loading of translation files
   - Caching mechanisms
   - Bundle size optimization

## Usage Guidelines

1. **Adding New Translations**
   - Add keys to English first
   - Follow existing namespace structure
   - Include all supported languages

2. **Best Practices**
   - Use semantic keys
   - Include context in keys
   - Maintain consistent formatting

3. **Quality Assurance**
   - Regular audits
   - Validation of translation completeness
   - Cultural appropriateness checks

## Future Improvements

1. **Language Support**
   - Re-enable South Indian languages
   - Improve mobile design for complex scripts
   - Add more regional languages

2. **Performance**
   - Implement translation caching
   - Optimize bundle sizes
   - Improve loading strategies

3. **Tools**
   - Add translation management system
   - Implement automated validation
   - Create translation contribution workflow
