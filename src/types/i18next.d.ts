import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof import('../locales/en/common.json');
      pages: typeof import('../locales/en/pages.json');
      recipes: typeof import('../locales/en/recipes.json');
      festival: typeof import('../locales/en/festival.json');
    };
  }
}