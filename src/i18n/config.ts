import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from '../locales/en/common.json';
import enPages from '../locales/en/pages.json';
import enRecipes from '../locales/en/recipes.json';
import enFestival from '../locales/en/festival.json';
import enAccessibility from '../locales/en/accessibility.json';

import hiCommon from '../locales/hi/common.json';
import hiPages from '../locales/hi/pages.json';
import hiRecipes from '../locales/hi/recipes.json';
import hiFestival from '../locales/hi/festival.json';
import hiAccessibility from '../locales/hi/accessibility.json';

import taCommon from '../locales/ta/common.json';
import taPages from '../locales/ta/pages.json';
import taRecipes from '../locales/ta/recipes.json';
import taFestival from '../locales/ta/festival.json';
import taAccessibility from '../locales/ta/accessibility.json';

import mrCommon from '../locales/mr/common.json';
import mrPages from '../locales/mr/pages.json';
import mrRecipes from '../locales/mr/recipes.json';
import mrFestival from '../locales/mr/festival.json';
import mrAccessibility from '../locales/mr/accessibility.json';

import teCommon from '../locales/te/common.json';
import tePages from '../locales/te/pages.json';
import teRecipes from '../locales/te/recipes.json';
import teFestival from '../locales/te/festival.json';
import teAccessibility from '../locales/te/accessibility.json';

import mlCommon from '../locales/ml/common.json';
import mlPages from '../locales/ml/pages.json';
import mlRecipes from '../locales/ml/recipes.json';
import mlFestival from '../locales/ml/festival.json';
import mlAccessibility from '../locales/ml/accessibility.json';

import bnCommon from '../locales/bn/common.json';
import bnPages from '../locales/bn/pages.json';
import bnRecipes from '../locales/bn/recipes.json';
import bnFestival from '../locales/bn/festival.json';
import bnAccessibility from '../locales/bn/accessibility.json';

import knCommon from '../locales/kn/common.json';
import knPages from '../locales/kn/pages.json';
import knRecipes from '../locales/kn/recipes.json';
import knFestival from '../locales/kn/festival.json';
import knAccessibility from '../locales/kn/accessibility.json';

const resources = {
  en: {
    common: enCommon,
    pages: enPages,
    recipes: enRecipes,
    festival: enFestival,
    accessibility: enAccessibility,
  },
  hi: {
    common: hiCommon,
    pages: hiPages,
    recipes: hiRecipes,
    festival: hiFestival,
    accessibility: hiAccessibility,
  },
  ta: {
    common: taCommon,
    pages: taPages,
    recipes: taRecipes,
    festival: taFestival,
    accessibility: taAccessibility,
  },
  mr: {
    common: mrCommon,
    pages: mrPages,
    recipes: mrRecipes,
    festival: mrFestival,
    accessibility: mrAccessibility,
  },
  te: {
    common: teCommon,
    pages: tePages,
    recipes: teRecipes,
    festival: teFestival,
    accessibility: teAccessibility,
  },
  ml: {
    common: mlCommon,
    pages: mlPages,
    recipes: mlRecipes,
    festival: mlFestival,
    accessibility: mlAccessibility,
  },
  bn: {
    common: bnCommon,
    pages: bnPages,
    recipes: bnRecipes,
    festival: bnFestival,
    accessibility: bnAccessibility,
  },
  kn: {
    common: knCommon,
    pages: knPages,
    recipes: knRecipes,
    festival: knFestival,
    accessibility: knAccessibility,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'pages', 'recipes', 'festival', 'accessibility'],
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },

    // Enhanced fallback handling
    saveMissing: true,
    missingKeyHandler: (lng, ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing translation: ${lng}:${ns}:${key}`);
      }
    },

    // Return key if translation is missing in development
    returnEmptyString: false,
    returnNull: false,
    returnObjects: false,
  });

export default i18n;