# Fasting Recipe and Navratri Guide 🕉️

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue.svg)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7.0.1-blue.svg)](https://capacitorjs.com/)
[![i18n](https://img.shields.io/badge/i18n-8_languages-green.svg)](./src/i18n)

A comprehensive mobile and web application providing traditional fasting recipes and detailed guidance for Navratri celebrations, built with modern web technologies and native platform capabilities.

## 📱 Quick Overview

**Current Status:**

- **Languages:** 4 active (en, hi, mr, bn), 4 disabled (ta, te, ml, kn)
- **Core Features:** Fasting recipes, Navratri guide, Multi-language support
- **Platforms:** Web (PWA), Android & iOS (via Capacitor)
- **Development:** Some AI-generated code needs review & optimization

**Technical Notes:**

- South Indian language support temporarily disabled (UI optimization needed)
- Enhanced recipe features under evaluation
- i18n audit system in place (scripts/i18n-audit.cjs)

## 🚀 Getting Started

### Prerequisites

```bash
# Required
node >= 16.0.0
npm >= 7.0.0

# For Mobile Development
Android Studio (for Android)
Xcode (for iOS, Mac only)
```

### Installation & Development

```bash
# Clone repository
git clone https://github.com/nadi-stuti/navratri.git

# Install dependencies
cd navratri
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Mobile Development

```bash
# Build web assets
npm run build

# Initialize mobile platforms
npx cap add android
npx cap add ios  # macOS only

# Sync web code with native projects
npx cap sync

# Open native IDEs
npx cap open android
npx cap open ios  # macOS only
```

## ✨ Key Features

### Core Features

- **Fasting Recipes**

  - Traditional fasting-friendly recipes
  - Ingredient information
  - Preparation instructions
  - Dietary compliance guidelines

- **Navratri Guide**
  - Nine forms of Durga
  - Festival significance
  - Regional celebrations
  - Important dates and timings

### Technical Features

- **Multi-language Support**
  - Active: English (en), Hindi (hi), Marathi (mr), Bengali (bn)
  - Disabled: Tamil (ta), Telugu (te), Malayalam (ml), Kannada (kn)
- **Cross-platform Support**
  - Progressive Web App
  - Native Android app
  - Native iOS app
- **Accessibility**
  - ARIA attributes
  - Screen reader support
  - Keyboard navigation
  - Skip links

## 🛠️ Technology Stack

- **Frontend**

  - React 19.0.0
  - TypeScript
  - Vite (Build tool)
  - i18next (Internationalization)

- **Mobile**
  - Capacitor 7.0.1
  - Native Android support
  - Native iOS support

## 📂 Project Structure

```
navratri/
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom React hooks
│   ├── i18n/          # Internationalization
│   ├── locales/       # Translation files
│   ├── utils/         # Utility functions
│   └── assets/        # Static assets
├── android/           # Android platform code
├── ios/              # iOS platform code
├── public/           # Public assets
└── scripts/          # Build & utility scripts
```

## 🔧 Available Scripts

### Core Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

### i18n Scripts

```bash
# Run translation audit
npm run i18n:audit

# List missing translation keys
node scripts/i18n-missing-keys.cjs

# Fill missing translations with placeholders
node scripts/i18n-fill-missing.cjs
```

### Script Details

- **i18n:audit**: Checks for hardcoded strings and missing translations
- **i18n-missing-keys**: Safe, non-destructive analysis of missing translations
- **i18n-fill-missing**: Adds placeholder translations (use with caution)

## 🌍 Internationalization

### Language Support

- **Active Languages**

  - English (en) - Default
  - Hindi (hi)
  - Marathi (mr)
  - Bengali (bn)

- **Temporarily Disabled**
  - Tamil (ta)
  - Telugu (te)
  - Malayalam (ml)
  - Kannada (kn)

### Implementation

- **Framework**: i18next with React bindings
- **Detection**: Automatic browser language detection
- **Storage**: Local storage for preferences
- **Organization**: Namespaced translation files
  - `common.json`: UI elements
  - `pages.json`: Page content
  - `recipes.json`: Recipe data
  - `festival.json`: Festival information

### Translation Management

- English as reference language
- Automated audit system
- Missing key detection
- Translation placeholder support

## 🔄 Development Status

### Active Development

- Core recipe functionality
- Festival information
- Multi-language support
- Mobile platform optimization

### AI-Generated Features (Vibe Code)

Several features were initially created using Vibe code assistance:

1. **Content & Information Pages**

   - About Navratri section
   - Fasting guidelines
   - Festival information pages
   - Additional recipe content

2. **Language Support**

   - Multi-language implementation
   - Translation structure
   - Language switching functionality

3. **Enhanced Features (Under Review)**
   - Enhanced recipe listing system (`src/components/EnhancedRecipeList.tsx`)
   - Advanced search and filters (`src/pages/recipe/RecipeList.tsx`, lines 15-45)
   - These features are currently commented out pending evaluation

### Enhanced Recipe Feature Status

The enhanced recipe functionality is implemented across two main locations:

1. **EnhancedRecipeList Component** (`src/components/EnhancedRecipeList.tsx`)

   - Contains advanced recipe filtering
   - Grid/List view toggle
   - Category-based organization
   - Enhanced sorting capabilities

2. **Recipe List Page** (`src/pages/recipe/RecipeList.tsx`)
   - Enhanced view toggle implementation
   - Integration with enhanced recipe data
   - Advanced filtering system (currently commented)

**Required Actions:**

1. Code Review:

   - Evaluate the necessity of enhanced features
   - Assess performance impact
   - Review code complexity

2. Decision Points:

   - Whether to remove enhanced features entirely
   - Simplify the implementation
   - Integrate selected features into main components

3. Cleanup Steps:
   - Remove unnecessary imports from RecipeList.tsx
   - Clean up enhanced recipe data models
   - Remove or simplify EnhancedRecipeList component
   - Update related tests and documentation

### Technical Debt

- **AI-Generated Code Review**

  - Unnecessary code cleanup needed
  - Formatting standardization required
  - Code structure optimization pending

- **Feature Evaluation**

  - `EnhancedRecipeList.tsx` needs assessment
  - Search & filter system requires review
  - Consider simpler alternatives
  - Performance impact analysis needed

- **UI/UX Issues**
  - South Indian language UI optimization
  - Mobile responsive design improvements
  - Component structure refinement

### Components Under Review

- `EnhancedRecipeList.tsx` (AI-generated)
- Recipe search and filters system
- Mobile UI for complex scripts
- Code formatting standards

## 🔮 Future Roadmap

### Phase 1: Foundation

- [ ] Code quality improvements
- [ ] Mobile UI optimization
- [ ] Re-enable South Indian languages
- [ ] Performance optimization

### Phase 2: Community Features

- [ ] User accounts and profiles
- [ ] Recipe sharing capability
- [ ] Community chat implementation
- [ ] Social interactions
- [ ] Recipe ratings and reviews

### Phase 3: Enhanced Features

- [ ] Advanced recipe management
- [ ] Personalization features
- [ ] Event planning tools
- [ ] Community engagement features

## 📱 Mobile Platform Support

### Android

- Native implementation via Capacitor
- Material Design guidelines
- Play Store deployment ready
- Android-specific optimizations

### iOS

- Native implementation via Capacitor
- Human Interface Guidelines
- App Store deployment ready
- iOS-specific optimizations

## 💻 Development Guidelines

### Code Standards

- TypeScript best practices
- React hooks patterns
- Mobile-first design
- Accessibility compliance

### i18n Best Practices

- Use translation keys for all text
- Maintain English as reference
- Regular translation audits
- Proper attribute translations

### Example Translation Usage

```tsx
// Before
<button aria-label="Back to top">Back to top</button>;

// After
const { t } = useTranslation();
<button aria-label={t("common.buttons.backToTop")}>
  {t("common.buttons.backToTop")}
</button>;
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit changes
   ```bash
   git commit -m 'Add: AmazingFeature'
   ```
4. Push to branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### Contribution Guidelines

1. **Code Style**

   - Follow existing patterns
   - Use TypeScript features
   - Maintain accessibility
   - Run linter before PR

2. **Translations**

   - Add to English first
   - Use descriptive keys
   - Run i18n audit
   - Test all languages

3. **Documentation**
   - Update README if needed
   - Document new features
   - Add JSDoc comments
   - Include usage examples

## 📚 Additional Resources

### Key Directories

- `src/locales/*/*.json`: Translations
- `src/components/`: UI Components
- `src/pages/`: Page Components
- `src/i18n/`: i18n Configuration
- `scripts/`: Utility Scripts

### Important Files

- `src/main.tsx`: App Bootstrap
- `src/Router.tsx`: Route Definitions
- `capacitor.config.ts`: Native Config
- `vite.config.ts`: Build Config

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React community
- Capacitor team
- i18next contributors
- Open source community

---

For detailed documentation on specific components and features, please refer to the README files in their respective directories.
