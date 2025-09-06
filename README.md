# Navratri — Web + Capacitor app

A React + Vite project with i18n support for multiple Indian languages, curated Navratri festival content and fasting recipes, prepared to be wrapped with Capacitor for Android/iOS.

This README is written for new contributors and maintainers and contains: project overview, features, file structure, translation workflow, scripts, how to run & build, and steps to create Android/iOS apps with Capacitor.

## Quick status

- Languages: en, hi, ta, mr, te, ml, bn, kn
- i18n: audit script added (scripts/i18n-audit.cjs)
- Missing translation placeholders were added for `pages` namespace for several locales via `scripts/i18n-fill-missing.cjs` (they are prefixed with " ").

## Table of contents

- Project overview
- Features
- Tech stack
- Getting started (dev & build)
- Scripts (what they do)
- File / folder overview
- Components & contexts (high level)
- i18n (how translations work, audit, fill, best practices)
- Replacing hardcoded strings
- Capacitor: Android & iOS (how to create native apps)
- TODOs and recommended next steps
- Contributing and style notes

## Project overview

This repository hosts a content-first SPA about Navratri (festival, fasting rules and recipes). It is built with React + TypeScript + Vite and uses `react-i18next` / `i18next` for translations. The project is bundled and packaged for native mobile via Capacitor.

Primary goals:

- Provide festival information and recipe content in multiple Indian languages
- Offer an accessible, SEO-friendly, and mobile-capable UI
- Make translations easy to audit and maintain

## Features

- Multi-language UI (English + 7 Indian languages)
- Accessible components (aria attributes, skip-links, etc.)
- Content sections: Home, Recipes, About Festival, Dates, Fasting, More
- Small progressive web/app-ready codebase (Capacitor ready)

## Tech stack

- Framework: React 19 + TypeScript
- Bundler: Vite
- i18n: i18next + react-i18next
- Mobile bridge: Capacitor (v7)
- Linting: ESLint

## Getting started (dev & build)

Prerequisites:

- Node.js (current LTS recommended) and npm
- Java JDK and Android SDK if you plan to build Android
- Xcode + macOS if you plan to build and sign iOS apps

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview production bundle locally:

```bash
npm run preview
```

Lint code:

```bash
npm run lint
```

## Project scripts (important ones)

- `npm run dev` — start Vite dev server
- `npm run build` — TypeScript build + vite build
- `npm run lint` — run ESLint
- `npm run preview` — preview production build
- `npm run i18n:audit` — run the audit that reports hardcoded strings and missing translation keys (scripts/i18n-audit.cjs)

Additional helper scripts (added to repo):

- `scripts/i18n-missing-keys.cjs` — list missing keys per language/namespace (safe, non-destructive)
- `scripts/i18n-fill-missing.cjs` — copy English `pages` namespace keys into target locales with `  ` placeholders (non-destructive but writes files). Use with care.

Usage examples:

- Run the audit to see current issues:

```bash
npm run i18n:audit
```

- List missing keys explicitly (script):

```bash
node scripts/i18n-missing-keys.cjs
```

- Fill pages locale missing keys with TODO placeholders (will modify files):

```bash
node scripts/i18n-fill-missing.cjs
```

## File / folder overview (high level)

Important files & directories (root):

- `vite.config.ts`, `tsconfig.json`, `package.json` — build and tooling
- `capacitor.config.ts` — Capacitor configuration
- `src/` — application source code (see below)
- `android/` — generated Android project (Capacitor)
- `public/` — static assets

src/ layout (key folders):

- `src/components/` — React components (cards, search, date popup, theme toggle, etc.)
- `src/contexts/` — React context providers (LanguageContext, ThemeContext, UserPreferences)
- `src/hooks/` — custom hooks (accessibility announcements, scroll to top)
- `src/i18n/` — i18n config, detection wiring
- `src/locales/` — translation JSON files (organized by language and namespace)
  - `src/locales/en/*.json` is the reference English content
- `src/model/` — content and data (recipes, dates, types)
- `src/pages/` — page components for routes
- `src/main.tsx` — app bootstrap
- `src/Router.tsx` — route definitions

If you need to find a component quickly, search `src/components` or use your editor's global search.

## Major components & their purpose

- `BackToTopButton.tsx` — floating button to scroll to top
- `NavratriDatePopup.tsx` — popup showing goddess/day details (contains some text that must be translated)
- `RecipeCard.tsx`, `EnhancedRecipeList.tsx` — recipe UI
- `ThemeToggle.tsx`, `LanguageSelector.tsx` — user preferences UI
- `ScrollToTop.tsx` — small helper component

See `src/components/` for many more small, focused components.

## i18n — translations and workflow

Structure:

- Translations live in `src/locales/{lang}/{namespace}.json`
- Supported languages are configured in `scripts/i18n-audit.cjs` and i18n config: `['en','hi','ta','mr','te','ml','bn','kn']`
- Namespaces used: `common`, `pages`, `recipes`, `festival`

Reference language:

- English (`src/locales/en`) is the canonical reference. When adding new strings, add them to English first and then add translations in other languages.

Audit tool:

- Run `npm run i18n:audit` to:
  - scan source files for hardcoded strings (very simple heuristics)
  - validate translation files vs English reference and report missing keys

Auto-fill helper (when used):

- `scripts/i18n-fill-missing.cjs` will copy missing keys from English `pages.json` into target language `pages.json` with `  ` prefix. This is intended to accelerate translators. After running it, translators should replace `  ...` with actual localized text.

Best practices:

- Avoid leaving hardcoded visible strings in `*.tsx`/`*.ts` files. Use `t('namespace.key')` or `t('pages.home.title')` via `useTranslation()`.
- For attributes, use translations for `alt`, `aria-label`, `placeholder`, `title`.
- Keep the English reference updated before starting translations.

How to add a translation key:

1. Add the English text at `src/locales/en/{namespace}.json` using a descriptive key.
2. Add the key to other locale files under `src/locales/{lang}/{namespace}.json`. If you prefer to generate placeholders, run `node scripts/i18n-fill-missing.cjs` (it will write TODO placeholders).
3. Replace occurrences in code with `t('namespace.someKey')`.

How to remove the TODO placeholders (translator flow):

- Search for files containing `"  ` and replace the value with the translated string, preserving JSON structure.

## Replacing hardcoded strings

The audit prints hardcoded occurrences (example output showed `Scroll to top`, `Close`, `Promise`, emoji headings). Steps to fix one:

1. Pick a descriptive key (e.g., `common.buttons.backToTop` or `pages.home.makeItAMeal`).
2. Add the key/value to `src/locales/en/{namespace}.json`.
3. Add translations in other languages (or run the fill script for placeholders).
4. Replace the literal in the component with `const { t } = useTranslation();` and `t('path.to.key')`.
5. Re-run `npm run i18n:audit` to verify no missing translations remain.

Example replacement in a component:

Before:

```tsx
<button aria-label="Back to top">Back to top</button>
```

After:

```tsx
const { t } = useTranslation();
<button aria-label={t("common.buttons.backToTop")}>
  {t("common.buttons.backToTop")}
</button>;
```

## Capacitor (Android and iOS)

This project is Capacitor-ready. The repo already contains an `android/` folder. Use the Capacitor CLI to add/update native projects.

General notes:

- Capacitor requires a built web app to copy into the native project. The steps below follow that workflow.
- Building and signing iOS apps requires macOS + Xcode. You cannot produce an installable iOS binary from Windows.

Android (Windows-friendly)

1. Build the web assets:

```bash
npm run build
```

2. Copy web assets to the native project and sync plugins:

```bash
npx cap copy android
npx cap sync android
```

3. Open Android Studio if you want to run or debug, or use Gradle to build an APK/AAB.

Open in Android Studio (recommended):

```bash
npx cap open android
```

Build APK from Android Studio or CLI (example using Gradle wrapper on Windows cmd):

```cmd
cd android
gradlew assembleDebug
```

Note: Ensure ANDROID_HOME/ANDROID_SDK_ROOT, Java JDK, and platform tools are installed and environment variables configured.

iOS (macOS only)

1. Build web assets:

```bash
npm run build
```

2. Sync and open Xcode project (on macOS):

```bash
npx cap copy ios
npx cap sync ios
npx cap open ios
```

3. From Xcode, configure signing & capabilities, then build/run on a device or simulator.

Capacitor common notes

- If you add a plugin, run `npx cap sync` to install native dependencies.
- If you change `capacitor.config.ts` or native config, run `npx cap copy` + open the native workspace.

## TODOs & roadmap

High-priority:

- Replace the remaining hardcoded strings shown by the audit with translation keys and add actual translations instead of ` ` placeholders.
- Improve the audit detection to span multi-line JSX and template literals.

Medium-priority:

- Add unit tests for critical components (pages, recipe filtering, date popup)
- Add CI to run `npm run lint` and `npm run i18n:audit` on PRs

Low-priority / nice-to-have:

- Add a small admin UI for translators to edit translations in-place
- Implement automated extraction for new keys from source (e.g., i18next-parser)

## Contribution guidelines

- Follow existing code style for indentation and file layout.
- Run `npm run lint` before opening PRs.
- When adding copy/content, add it to `src/locales/en` and create translations or placeholders.

## Where to look for things

- Translations: `src/locales/*/*.json`
- Components: `src/components`
- Pages: `src/pages`
- App bootstrap: `src/main.tsx` and `src/Router.tsx`
- i18n config: `src/i18n`
- Audit and helper scripts: `scripts/i18n-audit.cjs`, `scripts/i18n-missing-keys.cjs`, `scripts/i18n-fill-missing.cjs`

## Closing / contact

If you're stepping in as a new developer, run the dev server and the i18n audit first. Open an issue for any unclear copy or missing translations. Happy hacking!
