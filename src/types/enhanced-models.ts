// Enhanced data models for Navratri app with multi-language support
// Requirements: 1.1, 4.1, 5.1, 6.1, 8.1

import { Course, Cusine, Diet, Difficulty } from "../model/enums";

// Language support types
export type SupportedLanguage =
  | "en"
  | "hi"
  | "ta"
  | "mr"
  | "te"
  | "ml"
  | "bn"
  | "kn";

export interface Language {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
}

// Translation interface for multi-language content
export interface Translations {
  [key: string]: {
    [languageCode in SupportedLanguage]?: string;
  };
}

export type TranslatedContent = {
  [K in SupportedLanguage]?: string;
};

// Enhanced Recipe Types with Translation Support
export interface NutritionalInfo {
  calories?: number;
  protein?: number;
  carbohydrates?: number;
  fat?: number;
  fiber?: number;
  sodium?: number;
}

export interface EnhancedRecipe {
  id: string;
  categoryId: number;
  imageUrl: string;
  name: TranslatedContent;
  description: TranslatedContent;
  ingredients: {
    [languageCode in SupportedLanguage]?: string[];
  };
  instructions: {
    [languageCode in SupportedLanguage]?: string[];
  };
  meta: RecipeMeta;
  videoUrl?: string;
  tags: string[];
  nutritionalInfo?: NutritionalInfo;
  servings: number;
  tips?: TranslatedContent;
  variations?: TranslatedContent;
}

export interface RecipeMeta {
  prepTime: number;
  cookTime: number;
  cuisine: Cusine;
  course: Course;
  diet: Diet[];
  diffculty: Difficulty; // Keep original typo for compatibility
  spiceLevel?: "mild" | "medium" | "hot";
  region?: string;
}

export interface EnhancedRecipeCategory {
  id: number;
  title: TranslatedContent;
  route: string;
  description: TranslatedContent;
  recipes: EnhancedRecipe[];
  minRecipeCount: number;
  imageUrl?: string;
  tags?: string[];
}

// Durga Forms Data Models (Requirement 4.1)
export interface DurgaForm {
  day: number;
  name: TranslatedContent;
  sanskritName: string;
  transliteration: TranslatedContent;
  significance: TranslatedContent;
  colors: string[];
  offerings: {
    [languageCode in SupportedLanguage]?: string[];
  };
  mantras: {
    sanskrit: string;
    transliteration: TranslatedContent;
    meaning: TranslatedContent;
  }[];
  celebrations: {
    [languageCode in SupportedLanguage]?: string[];
  };
  symbolism: TranslatedContent;
  blessings: TranslatedContent;
  imageUrl?: string;
  iconography: TranslatedContent;
}

// Navratri Dates Structure for 2025 (Requirement 5.1)
export interface NavratriDate {
  date: string; // ISO date format
  day: number; // 1-9
  dayOfWeek: string;
  durgaForm: DurgaForm;
  preparations?: {
    [languageCode in SupportedLanguage]?: string[];
  };
  observances?: {
    [languageCode in SupportedLanguage]?: string[];
  };
  specialRituals?: {
    [languageCode in SupportedLanguage]?: string[];
  };
  fastingRules?: {
    [languageCode in SupportedLanguage]?: string[];
  };
  recommendedColors: string[];
  auspiciousTimes: {
    sunrise: string;
    sunset: string;
    pujaTime: string;
  };
  regionalVariations?: {
    [region: string]: {
      name: TranslatedContent;
      practices: TranslatedContent;
    };
  };
}

export interface NavratriCalendar {
  // Optional classification fields for calendars generated in code
  type?: "Sharad" | "Chaitra" | "Magha" | "Ashad";
  season?: "Autumn" | "Spring" | "Winter" | "Monsoon";
  year: number;
  startDate: string;
  endDate: string;
  dates: NavratriDate[];
  generalInfo: {
    significance: TranslatedContent;
    overview?: TranslatedContent;
    preparation?: TranslatedContent;
  };
}

// Fasting Information Data Structure (Requirement 6.1)
export interface ScriptureReference {
  text: string; // Sanskrit text
  transliteration: TranslatedContent;
  translation: TranslatedContent;
  source: TranslatedContent; // Name of scripture (Bhagavad Gita, Puranas, etc.)
  chapter?: string;
  verse?: string;
}

export interface FastingRule {
  id: string;
  title: TranslatedContent;
  description: TranslatedContent;
  category: "dietary" | "behavioral" | "spiritual" | "timing";
  importance: "mandatory" | "recommended" | "optional";
  exceptions?: TranslatedContent;
}

export interface FastingInformation {
  reasonsForFasting: {
    spiritual: TranslatedContent;
    physical: TranslatedContent;
    mental: TranslatedContent;
    cultural: TranslatedContent;
  };
  navratriFastingSignificance: {
    purpose: TranslatedContent;
    benefits: TranslatedContent;
    spiritualAspects: TranslatedContent;
  };
  scriptureReferences: ScriptureReference[];
  fastingRules: FastingRule[];
  allowedFoods: {
    [languageCode in SupportedLanguage]?: string[];
  };
  forbiddenFoods: {
    [languageCode in SupportedLanguage]?: string[];
  };
  dailySchedule: {
    [languageCode in SupportedLanguage]?: {
      time: string;
      activity: string;
      description?: string;
    }[];
  };
  healthConsiderations: {
    benefits: TranslatedContent;
    precautions: TranslatedContent;
    whoShouldAvoid: TranslatedContent;
  };
  modernAdaptations: {
    workingProfessionals: TranslatedContent;
    students: TranslatedContent;
    elderly: TranslatedContent;
    children: TranslatedContent;
  };
}

// Additional Content Models for More Section (Requirement 7.1)
export interface CulturalContent {
  id: string;
  title: TranslatedContent;
  content: TranslatedContent;
  category:
    | "history"
    | "culture"
    | "traditions"
    | "modern-practices"
    | "regional-variations";
  imageUrl?: string;
  references?: string[];
}

export interface HistoricalContext {
  period: TranslatedContent;
  significance: TranslatedContent;
  evolution: TranslatedContent;
  keyFigures?: {
    name: string;
    contribution: TranslatedContent;
  }[];
}

// Search and Filter Types
export interface RecipeFilter {
  category?: number[];
  difficulty?: Difficulty[];
  diet?: Diet[];
  cuisine?: Cusine[];
  maxTime?: number;
  ingredients?: string[];
  tags?: string[];
}

export interface SearchResult {
  recipes: EnhancedRecipe[];
  totalCount: number;
  filters: RecipeFilter;
}

// Error and Loading State Types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}

export interface TranslationLoadingState extends LoadingState {
  language?: SupportedLanguage;
  missingKeys?: string[];
}

// Theme and UI Types
export type ThemeMode = "light" | "dark" | "system";

export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor?: string;
  accentColor?: string;
  fontSize?: "small" | "medium" | "large";
}

// App Configuration Types
export interface AppConfig {
  defaultLanguage: SupportedLanguage;
  supportedLanguages: Language[];
  theme: ThemeConfig;
  features: {
    offlineMode: boolean;
    notifications: boolean;
    analytics: boolean;
  };
}

// Validation and Type Guards
export const isSupportedLanguage = (
  lang: string
): lang is SupportedLanguage => {
  return ["en", "hi", "ta", "mr", "te", "ml", "bn", "kn"].includes(lang);
};

export const isValidRecipe = (recipe: unknown): recipe is EnhancedRecipe => {
  if (typeof recipe !== "object" || recipe === null) return false;
  const r = recipe as Record<string, unknown>;
  return (
    typeof r.id === "string" &&
    typeof r.categoryId === "number" &&
    typeof r.name === "object" &&
    typeof r.servings === "number"
  );
};

export const isValidDurgaForm = (form: unknown): form is DurgaForm => {
  if (typeof form !== "object" || form === null) return false;
  const f = form as Record<string, unknown>;
  return (
    typeof f.day === "number" &&
    f.day >= 1 &&
    f.day <= 9 &&
    typeof f.sanskritName === "string" &&
    typeof f.name === "object"
  );
};
