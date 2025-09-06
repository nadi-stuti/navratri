// Enhanced data models and types index
// Requirements: 1.1, 4.1, 5.1, 6.1, 8.1

// Export all enhanced types and interfaces
export * from "./enhanced-models";

// Export data models
export * from "../model/navratri-2025-data";
export * from "../model/fasting-information";
export * from "../model/recipe-data/enhanced-recipe-data";

// Re-export existing enums for compatibility
export * from "../model/enums";
export * from "../model/types";

// Language configuration
import { Language, SupportedLanguage } from "./enhanced-models";

export const supportedLanguages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
  },
  {
    code: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
    flag: "🇮🇳",
  },
  {
    code: "mr",
    name: "Marathi",
    nativeName: "मराठी",
    flag: "🇮🇳",
  },
  {
    code: "te",
    name: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳",
  },
  {
    code: "ml",
    name: "Malayalam",
    nativeName: "മലയാളം",
    flag: "🇮🇳",
  },
  {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    flag: "🇮🇳",
  },
  {
    code: "kn",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    flag: "🇮🇳",
  },
];

export const defaultLanguage: SupportedLanguage = "en";

// Utility functions for language handling
export const getLanguageName = (code: SupportedLanguage): string => {
  const language = supportedLanguages.find((lang) => lang.code === code);
  return language?.name || "English";
};

export const getLanguageNativeName = (code: SupportedLanguage): string => {
  const language = supportedLanguages.find((lang) => lang.code === code);
  return language?.nativeName || "English";
};

export const getLanguageFlag = (code: SupportedLanguage): string => {
  const language = supportedLanguages.find((lang) => lang.code === code);
  return language?.flag || "🇺🇸";
};

// Type guards and validation functions
export const isValidLanguageCode = (
  code: string
): code is SupportedLanguage => {
  return supportedLanguages.some((lang) => lang.code === code);
};

// Content translation helpers
export const getTranslatedContent = (
  content: { [key: string]: string } | undefined,
  language: SupportedLanguage,
  fallback: string = ""
): string => {
  if (!content) return fallback;
  return content[language] || content[defaultLanguage] || fallback;
};

export const hasTranslation = (
  content: { [key: string]: string } | undefined,
  language: SupportedLanguage
): boolean => {
  return !!(content && content[language]);
};

// Data validation helpers
export const validateTranslatedContent = (content: any): boolean => {
  if (!content || typeof content !== "object") return false;

  // Check if at least English translation exists
  return typeof content.en === "string" && content.en.length > 0;
};

export const validateEnhancedRecipe = (recipe: any): boolean => {
  return !!(
    recipe &&
    typeof recipe.id === "string" &&
    typeof recipe.categoryId === "number" &&
    validateTranslatedContent(recipe.name) &&
    validateTranslatedContent(recipe.description) &&
    Array.isArray(recipe.tags) &&
    typeof recipe.servings === "number" &&
    recipe.meta &&
    typeof recipe.meta.prepTime === "number" &&
    typeof recipe.meta.cookTime === "number"
  );
};

// Constants for app configuration
export const APP_CONSTANTS = {
  MAX_RECIPE_PREP_TIME: 180, // minutes
  MAX_RECIPE_COOK_TIME: 240, // minutes
  MIN_RECIPE_SERVINGS: 1,
  MAX_RECIPE_SERVINGS: 20,
  SUPPORTED_IMAGE_FORMATS: ["jpg", "jpeg", "png", "webp"],
  SUPPORTED_VIDEO_PLATFORMS: ["youtube", "vimeo"],
  DEFAULT_RECIPE_IMAGE: "/images/default-recipe.jpg",
  NAVRATRI_YEAR: 2025,
  NAVRATRI_DAYS: 9,
} as const;

// Error messages in multiple languages
export const ERROR_MESSAGES = {
  RECIPE_NOT_FOUND: {
    en: "Recipe not found",
    hi: "रेसिपी नहीं मिली",
    ta: "சமையல் குறிப்பு கிடைக்கவில்லை",
    mr: "पाककृती सापडली नाही",
  },
  INVALID_LANGUAGE: {
    en: "Invalid language selected",
    hi: "अमान्य भाषा चुनी गई",
    ta: "தவறான மொழி தேர்ந்தெடுக்கப்பட்டது",
    mr: "अवैध भाषा निवडली",
  },
  LOADING_ERROR: {
    en: "Error loading content",
    hi: "सामग्री लोड करने में त्रुटि",
    ta: "உள்ளடக்கம் ஏற்றுவதில் பிழை",
    mr: "सामग्री लोड करताना त्रुटी",
  },
} as const;
