# Hardcoded Strings Audit Catalog

## Executive Summary
- **Total hardcoded strings found**: 52
- **Files affected**: 10 out of 63 scanned files
- **Priority levels**: High (0), Medium (52), Low (0)
- **Missing translations**: 455 keys across 7 languages

## Detailed Analysis by Component

### 1. Location.tsx - HIGH PRIORITY
**File**: `src/pages/Location.tsx`
**Hardcoded strings found**: 15+

#### Page Title and Introduction
- `"Navratri Festival in India"` (line 4) - **CRITICAL**
- `"From North to South and East to West, here's how Navratri festival is celebrated pan India:"` (line 6-8) - **HIGH**

#### Regional Descriptions (All need translation)
- `"West Bengal, Orissa, Assam: "` (line 11) - **HIGH**
- `"The most popular festival, Durga Puja..."` (line 12-17) - **HIGH**
- `"Maharashtra: "` (line 20) - **HIGH**
- `"Navratri signifies 'new beginnings' for Maharashtrians..."` (line 21-25) - **HIGH**
- `"Gujarat: "` (line 28) - **HIGH**
- `"Devotees worship Maa Ambe and fast for these 9 days..."` (line 29-32) - **HIGH**
- `"Punjab, Uttar Pradesh, Bihar: "` (line 35) - **HIGH**
- `"Fasting for first 7 days with jagrans..."` (line 36-41) - **HIGH**
- `"Himachal Pradesh: "` (line 44) - **HIGH**
- `"Here, the 10th day as 'Kullu Dussehra'..."` (line 45-49) - **HIGH**
- `"Karnataka: "` (line 52) - **HIGH**
- `"Known as 'nadahabba,' Navratri in Karnataka..."` (line 53-57) - **HIGH**
- `"Tamil Nadu: "` (line 60) - **HIGH**
- `"Goddesses Durga, Saraswati and Laxmi..."` (line 61-67) - **HIGH**
- `"Andhra Pradesh: "` (line 70) - **HIGH**
- `"Here, the 9 days are celebrated as 'Bathukamma Panduga'..."` (line 71-75) - **HIGH**
- `"Kerala: "` (line 78) - **HIGH**
- `"Navratri in Kerala is dedicated to education..."` (line 79-81) - **HIGH**

**Suggested translation keys**:
```
pages.location.title
pages.location.introduction
pages.location.regions.westBengal.title
pages.location.regions.westBengal.description
pages.location.regions.maharashtra.title
pages.location.regions.maharashtra.description
// ... etc for all regions
```

### 2. Dates.tsx - HIGH PRIORITY
**File**: `src/pages/Dates.tsx`
**Hardcoded strings found**: 4

#### Page Content
- `"Navratri 2025 Calendar"` (line 32) - **CRITICAL**
- `"September 22 - September 30, 2025"` (line 34) - **HIGH**
- `"Day "` (line 21) - **MEDIUM** (used in template)

**Suggested translation keys**:
```
pages.dates.title
pages.dates.festivalPeriod
common.labels.day
```

### 3. AboutFestival.tsx - HIGH PRIORITY
**File**: `src/pages/AboutFestival.tsx`
**Hardcoded strings found**: 4

#### Page Content
- `"About Navratri Festival"` (line 6) - **CRITICAL**
- `"Navratri is one of the most celebrated festivals at my home as well..."` (line 7-11) - **HIGH**
- `"Navratri festival is celebrated with the same joy..."` (line 12-16) - **HIGH**
- `"Another important feature of Navratri festival are the fasts..."` (line 17-21) - **HIGH**

**Suggested translation keys**:
```
pages.aboutFestival.title
pages.aboutFestival.personalIntroduction
pages.aboutFestival.celebrationDescription
pages.aboutFestival.fastingDescription
```

### 4. More.tsx - HIGH PRIORITY
**File**: `src/pages/More.tsx`
**Hardcoded strings found**: 8+

#### Page Header
- `"More on Navratri"` (line 67) - **CRITICAL**
- `"Discover the rich traditions, cultural significance, and practical wisdom of one of Hinduism's most celebrated festivals."` (line 69-71) - **HIGH**

#### Fasting Section Content
- `"Traditional North Indian Fasting Ingredients"` (line 82) - **HIGH**
- `"Navratri Recipes, especially the Navratri Fast Recipes..."` (line 83-86) - **HIGH**
- `"A thing particular to North India is that people..."` (line 87-90) - **HIGH**
- `"Flours and grains: Kuttu ka atta..."` (line 93-97) - **HIGH**
- `"Sabudana (sago)"` (line 100) - **MEDIUM**
- `"Peanuts"` (line 101) - **MEDIUM**
- `"Nuts and dry fruits"` (line 102) - **MEDIUM**
- `"Rock salt (sendha namak)"` (line 103) - **MEDIUM**
- `"Spice and herbs may vary..."` (line 105-107) - **MEDIUM**
- `"My list of Navratri Recipes..."` (line 109-113) - **HIGH**

#### UI Elements
- `"Tip:"` (line 35) - **MEDIUM**
- `"+"` and `"−"` (line 52-53) - **LOW** (UI symbols)

**Suggested translation keys**:
```
pages.more.title
pages.more.headerSubtitle
pages.more.fastingTraditions.traditionalIngredients.title
pages.more.fastingTraditions.traditionalIngredients.introduction
// ... etc
```

### 5. DurgaFormsDisplay.tsx - HIGH PRIORITY
**File**: `src/components/DurgaFormsDisplay.tsx`
**Hardcoded strings found**: 12

#### Component Headers and Labels
- `"Form not found"` (line 12) - **MEDIUM**
- `"Nine Forms of Goddess Durga"` (line 25) - **CRITICAL**
- `"Day "` (line 35) - **MEDIUM**
- `"Significance"` (line 56) - **HIGH**
- `"Symbolism"` (line 61) - **HIGH**
- `"Blessings"` (line 66) - **HIGH**
- `"Iconography"` (line 71) - **HIGH**
- `"Sacred Colors"` (line 77) - **HIGH**
- `"Offerings"` (line 88) - **HIGH**
- `"Celebrations"` (line 97) - **HIGH**
- `"Sacred Mantras"` (line 108) - **HIGH**
- `"Transliteration:"` (line 116) - **MEDIUM**
- `"Meaning:"` (line 119) - **MEDIUM**

**Suggested translation keys**:
```
components.durgaForms.title
components.durgaForms.formNotFound
components.durgaForms.sections.significance
components.durgaForms.sections.symbolism
components.durgaForms.sections.blessings
components.durgaForms.sections.iconography
components.durgaForms.sections.sacredColors
components.durgaForms.sections.offerings
components.durgaForms.sections.celebrations
components.durgaForms.sections.sacredMantras
components.durgaForms.labels.transliteration
components.durgaForms.labels.meaning
common.labels.day
```

### 6. Welcome.tsx - ALREADY TRANSLATED ✅
**File**: `src/pages/Welcome.tsx`
**Status**: Uses translation system correctly
- Uses `t("pages.welcome.title")`
- Uses `t("pages.welcome.description")`
- Uses `t("pages.welcome.enterApp")`

### 7. Home.tsx - ALREADY TRANSLATED ✅
**File**: `src/pages/Home.tsx`
**Status**: Uses translation system correctly
- Uses `t("pages.home.title")`
- Uses translation keys for all tiles

### 8. AboutFast.tsx - MIXED STATUS ⚠️
**File**: `src/pages/AboutFast.tsx`
**Status**: Partially translated but has hardcoded fallbacks

#### Hardcoded Fallback Text (Medium Priority)
- Multiple hardcoded strings used as fallbacks when translations are missing
- Section headers have hardcoded text for different languages
- Example: `"🕉️ हिंदू धर्म में उपवास के कारण"` (line 89-93)

**Issues**:
- Uses inline conditional text instead of translation keys
- Hardcoded language-specific text should be moved to translation files

## Priority Classification

### CRITICAL (Immediate Action Required)
1. **Location.tsx** - Page title "Navratri Festival in India"
2. **Dates.tsx** - Page title "Navratri 2025 Calendar"
3. **AboutFestival.tsx** - Page title "About Navratri Festival"
4. **More.tsx** - Page title "More on Navratri"
5. **DurgaFormsDisplay.tsx** - Component title "Nine Forms of Goddess Durga"

### HIGH (Should be addressed soon)
1. All regional descriptions in Location.tsx
2. All content paragraphs in AboutFestival.tsx
3. All fasting tradition content in More.tsx
4. All section headers in DurgaFormsDisplay.tsx

### MEDIUM (Can be addressed later)
1. UI labels and form elements
2. Error messages
3. Accessibility text

### LOW (Nice to have)
1. UI symbols and icons
2. Development/debug text

## Translation File Structure Needed

### New Keys Required in common.json
```json
{
  "labels": {
    "day": "Day",
    "transliteration": "Transliteration:",
    "meaning": "Meaning:"
  },
  "ui": {
    "expand": "+",
    "collapse": "−",
    "tip": "Tip:"
  },
  "errors": {
    "formNotFound": "Form not found"
  }
}
```

### New Keys Required in pages.json
```json
{
  "location": {
    "title": "Navratri Festival in India",
    "introduction": "From North to South and East to West...",
    "regions": {
      "westBengal": {
        "title": "West Bengal, Orissa, Assam:",
        "description": "The most popular festival..."
      }
      // ... etc
    }
  },
  "dates": {
    "title": "Navratri 2025 Calendar",
    "festivalPeriod": "September 22 - September 30, 2025"
  },
  "aboutFestival": {
    "title": "About Navratri Festival",
    "personalIntroduction": "Navratri is one of the most celebrated...",
    "celebrationDescription": "Navratri festival is celebrated...",
    "fastingDescription": "Another important feature..."
  },
  "more": {
    "title": "More on Navratri",
    "headerSubtitle": "Discover the rich traditions..."
  }
}
```

### New Keys Required in components namespace
```json
{
  "durgaForms": {
    "title": "Nine Forms of Goddess Durga",
    "formNotFound": "Form not found",
    "sections": {
      "significance": "Significance",
      "symbolism": "Symbolism",
      "blessings": "Blessings",
      "iconography": "Iconography",
      "sacredColors": "Sacred Colors",
      "offerings": "Offerings",
      "celebrations": "Celebrations",
      "sacredMantras": "Sacred Mantras"
    },
    "labels": {
      "transliteration": "Transliteration:",
      "meaning": "Meaning:"
    }
  }
}
```

## Recommendations

### Immediate Actions (Next Sprint)
1. **Create missing translation keys** for all CRITICAL items
2. **Update Location.tsx** to use translation system
3. **Update Dates.tsx** to use translation system
4. **Update AboutFestival.tsx** to use translation system
5. **Update More.tsx** to use translation system
6. **Update DurgaFormsDisplay.tsx** to use translation system

### Medium-term Actions
1. **Add all missing translations** to the 7 non-English language files
2. **Refactor AboutFast.tsx** to use proper translation keys instead of inline conditionals
3. **Add accessibility translations** for screen readers
4. **Create validation tests** to prevent regression

### Long-term Actions
1. **Implement automated detection** in CI/CD pipeline
2. **Create developer guidelines** for i18n best practices
3. **Set up translation management** workflow
4. **Add performance monitoring** for translation loading

## Estimated Effort
- **Translation key creation**: 2-3 hours
- **Component updates**: 4-6 hours
- **Translation content**: 8-12 hours (depending on translation quality needed)
- **Testing and validation**: 2-3 hours
- **Total**: 16-24 hours

## Success Criteria
- [ ] Zero hardcoded strings in user-facing components
- [ ] All 8 languages have complete translation coverage
- [ ] All pages display correctly in all supported languages
- [ ] Automated tests pass for translation completeness
- [ ] Performance impact is minimal (< 100ms additional load time)