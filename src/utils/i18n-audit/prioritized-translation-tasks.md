# Prioritized Translation Tasks

## Task Priority Matrix

### 🔴 CRITICAL PRIORITY (Must fix immediately)
**Impact**: Breaks user experience in non-English languages
**Effort**: Low to Medium

| Component | String | Current | Suggested Key | Effort |
|-----------|--------|---------|---------------|---------|
| Location.tsx | "Navratri Festival in India" | Hardcoded | `pages.location.title` | Low |
| Dates.tsx | "Navratri 2025 Calendar" | Hardcoded | `pages.dates.title` | Low |
| AboutFestival.tsx | "About Navratri Festival" | Hardcoded | `pages.aboutFestival.title` | Low |
| More.tsx | "More on Navratri" | Hardcoded | `pages.more.title` | Low |
| DurgaFormsDisplay.tsx | "Nine Forms of Goddess Durga" | Hardcoded | `components.durgaForms.title` | Low |

**Total Critical Items**: 5
**Estimated Time**: 1-2 hours

### 🟡 HIGH PRIORITY (Should fix this sprint)
**Impact**: Significant content not translated
**Effort**: Medium to High

#### Location.tsx Regional Content (18 items)
| Region | Content Type | Suggested Key Structure |
|--------|--------------|------------------------|
| West Bengal | Title + Description | `pages.location.regions.westBengal.*` |
| Maharashtra | Title + Description | `pages.location.regions.maharashtra.*` |
| Gujarat | Title + Description | `pages.location.regions.gujarat.*` |
| Punjab/UP/Bihar | Title + Description | `pages.location.regions.northIndia.*` |
| Himachal Pradesh | Title + Description | `pages.location.regions.himachal.*` |
| Karnataka | Title + Description | `pages.location.regions.karnataka.*` |
| Tamil Nadu | Title + Description | `pages.location.regions.tamilNadu.*` |
| Andhra Pradesh | Title + Description | `pages.location.regions.andhra.*` |
| Kerala | Title + Description | `pages.location.regions.kerala.*` |

#### AboutFestival.tsx Content (3 items)
| Content | Suggested Key |
|---------|---------------|
| Personal introduction paragraph | `pages.aboutFestival.personalIntroduction` |
| Celebration description | `pages.aboutFestival.celebrationDescription` |
| Fasting description | `pages.aboutFestival.fastingDescription` |

#### More.tsx Fasting Content (8 items)
| Content | Suggested Key |
|---------|---------------|
| Header subtitle | `pages.more.headerSubtitle` |
| Traditional ingredients title | `pages.more.fastingTraditions.traditionalIngredients.title` |
| Ingredients introduction | `pages.more.fastingTraditions.traditionalIngredients.introduction` |
| Flour types description | `pages.more.fastingTraditions.traditionalIngredients.flours` |
| Other ingredients list | `pages.more.fastingTraditions.traditionalIngredients.others` |
| Spices description | `pages.more.fastingTraditions.traditionalIngredients.spices` |
| Recipe conclusion | `pages.more.fastingTraditions.recipeConclusion` |

#### DurgaFormsDisplay.tsx Sections (8 items)
| Section | Suggested Key |
|---------|---------------|
| Significance | `components.durgaForms.sections.significance` |
| Symbolism | `components.durgaForms.sections.symbolism` |
| Blessings | `components.durgaForms.sections.blessings` |
| Iconography | `components.durgaForms.sections.iconography` |
| Sacred Colors | `components.durgaForms.sections.sacredColors` |
| Offerings | `components.durgaForms.sections.offerings` |
| Celebrations | `components.durgaForms.sections.celebrations` |
| Sacred Mantras | `components.durgaForms.sections.sacredMantras` |

**Total High Priority Items**: 37
**Estimated Time**: 6-8 hours

### 🟢 MEDIUM PRIORITY (Next sprint)
**Impact**: UI/UX improvements
**Effort**: Low

| Component | String | Suggested Key | Usage |
|-----------|--------|---------------|-------|
| DurgaFormsDisplay.tsx | "Form not found" | `components.durgaForms.formNotFound` | Error message |
| DurgaFormsDisplay.tsx | "Day " | `common.labels.day` | UI label |
| DurgaFormsDisplay.tsx | "Transliteration:" | `components.durgaForms.labels.transliteration` | Label |
| DurgaFormsDisplay.tsx | "Meaning:" | `components.durgaForms.labels.meaning` | Label |
| More.tsx | "Tip:" | `common.ui.tip` | UI element |
| Dates.tsx | "September 22 - September 30, 2025" | `pages.dates.festivalPeriod` | Date range |

**Total Medium Priority Items**: 6
**Estimated Time**: 1-2 hours

### 🔵 LOW PRIORITY (Future improvements)
**Impact**: Minor UX improvements
**Effort**: Very Low

| Component | String | Suggested Key | Notes |
|-----------|--------|---------------|-------|
| More.tsx | "+" / "−" | `common.ui.expand` / `common.ui.collapse` | UI symbols |
| Various | Alt text | `common.accessibility.*` | Screen reader support |

**Total Low Priority Items**: 4
**Estimated Time**: 30 minutes

## Implementation Roadmap

### Phase 1: Critical Fixes (Week 1)
**Goal**: Fix all page titles and main component headers
**Deliverables**:
- [ ] Update 5 critical hardcoded strings
- [ ] Add translation keys to all language files
- [ ] Test language switching for titles

**Files to modify**:
- `src/pages/Location.tsx` (title only)
- `src/pages/Dates.tsx` (title only)
- `src/pages/AboutFestival.tsx` (title only)
- `src/pages/More.tsx` (title only)
- `src/components/DurgaFormsDisplay.tsx` (title only)
- All 8 language files in `src/locales/`

### Phase 2: Content Translation (Week 2-3)
**Goal**: Translate all major content blocks
**Deliverables**:
- [ ] Complete Location.tsx regional descriptions
- [ ] Complete AboutFestival.tsx content paragraphs
- [ ] Complete More.tsx fasting traditions content
- [ ] Complete DurgaFormsDisplay.tsx section headers

**Files to modify**:
- Same components as Phase 1 (full content)
- All 8 language files (extensive additions)

### Phase 3: UI Polish (Week 4)
**Goal**: Handle remaining UI elements and error states
**Deliverables**:
- [ ] All labels and UI text translated
- [ ] Error messages translated
- [ ] Accessibility improvements

### Phase 4: Validation & Testing (Week 4)
**Goal**: Ensure quality and completeness
**Deliverables**:
- [ ] Automated tests for translation completeness
- [ ] Manual testing in all 8 languages
- [ ] Performance validation
- [ ] Accessibility testing

## Translation Key Structure

### Recommended Namespace Organization

```
common/
├── labels/          # Generic labels (Day, Name, etc.)
├── ui/             # UI elements (buttons, icons, etc.)
├── errors/         # Error messages
└── accessibility/  # Screen reader text

pages/
├── location/       # Location page content
├── dates/          # Dates page content
├── aboutFestival/  # About Festival page content
└── more/           # More page content

components/
├── durgaForms/     # Durga Forms component
├── navigation/     # Navigation elements
└── forms/          # Form components
```

### Key Naming Conventions
- Use camelCase for key names
- Use descriptive, hierarchical names
- Group related keys under common parents
- Keep keys concise but clear
- Use consistent patterns across components

**Examples**:
```
✅ Good: pages.location.regions.westBengal.title
❌ Bad: location_west_bengal_title

✅ Good: components.durgaForms.sections.significance
❌ Bad: durga_significance_section

✅ Good: common.labels.day
❌ Bad: day_label
```

## Quality Assurance Checklist

### Before Implementation
- [ ] Review all identified strings for accuracy
- [ ] Confirm translation key naming conventions
- [ ] Validate namespace organization
- [ ] Check for duplicate or similar keys

### During Implementation
- [ ] Test each component after translation key addition
- [ ] Verify fallback behavior for missing keys
- [ ] Check language switching functionality
- [ ] Validate text layout in different languages

### After Implementation
- [ ] Run automated translation completeness tests
- [ ] Perform manual testing in all 8 languages
- [ ] Check for text overflow or layout issues
- [ ] Validate accessibility with screen readers
- [ ] Performance test translation loading

## Success Metrics

### Quantitative Goals
- [ ] 0 hardcoded strings in user-facing components
- [ ] 100% translation coverage across all 8 languages
- [ ] < 100ms additional load time for translations
- [ ] 0 layout breaking issues in any language

### Qualitative Goals
- [ ] Consistent user experience across all languages
- [ ] Culturally appropriate translations
- [ ] Accessible content for screen readers
- [ ] Maintainable translation structure for future updates

## Risk Mitigation

### Potential Risks
1. **Translation Quality**: Poor translations may confuse users
   - *Mitigation*: Use native speakers for review
2. **Performance Impact**: Loading many translations may slow app
   - *Mitigation*: Implement lazy loading and caching
3. **Layout Breaking**: Long translations may break UI
   - *Mitigation*: Test with longest expected translations
4. **Maintenance Overhead**: More keys to maintain
   - *Mitigation*: Implement automated validation tools

### Rollback Plan
- Keep original hardcoded strings as fallbacks
- Implement feature flags for translation system
- Maintain English-only version as backup
- Document all changes for easy reversal