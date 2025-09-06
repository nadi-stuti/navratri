import { Recipe } from "../types";
import { Diet, Difficulty } from "../enums";
import { sundalRecipe } from "./sundalRecipeData";

// Recipe tags for better categorization
export enum RecipeTags {
  // Nutritional tags
  ProteinRich = "protein-rich",
  FiberRich = "fiber-rich",
  VitaminRich = "vitamin-rich",
  HealthyFats = "healthy-fats",
  LowCalorie = "low-calorie",

  // Preparation tags
  Quick = "quick",
  Easy = "easy",
  Traditional = "traditional",
  Festival = "festival",
  Navratri = "navratri",

  // Texture tags
  Crunchy = "crunchy",
  Creamy = "creamy",
  Smooth = "smooth",

  // Ingredient type tags
  Legumes = "legumes",
  Nuts = "nuts",
  Grains = "grains",
  Sprouted = "sprouted",

  // Occasion tags
  TeaTime = "tea-time",
  Evening = "evening-snack",
  KidFriendly = "kid-friendly",
  SpecialOccasion = "special-occasion",

  // Regional tags
  SouthIndian = "south-indian",
  TamilNadu = "tamil-nadu-special",
  Karnataka = "karnataka-special",
  Andhra = "andhra-special",
  Kerala = "kerala-special",

  // Dietary tags
  Vegan = "vegan",
  GlutenFree = "gluten-free",
  FastingFood = "fasting-food",

  // Flavor tags
  Spicy = "spicy",
  Mild = "mild",
  Sweet = "sweet",
  Tangy = "tangy",
}

// Nutritional information interface
export interface NutritionalInfo {
  calories: number;
  protein: number; // in grams
  carbohydrates: number; // in grams
  fat: number; // in grams
  fiber: number; // in grams
  sodium: number; // in mg
  servings: number;
}

// Enhanced recipe interface with additional metadata
export interface EnhancedRecipeMetadata {
  tags: RecipeTags[];
  nutritionalInfo: NutritionalInfo;
  spiceLevel: "mild" | "medium" | "hot";
  region: string;
  mainIngredient: string;
  cookingMethod: "boiled" | "steamed" | "roasted" | "fried" | "raw";
  bestServedWith: string[];
  healthBenefits: string[];
  tips: string[];
  variations: string[];
}

// Sundal recipe metadata mapping
export const sundalRecipeMetadata: Record<string, EnhancedRecipeMetadata> = {
  "Chana Sundal": {
    tags: [
      RecipeTags.ProteinRich,
      RecipeTags.Traditional,
      RecipeTags.Festival,
      RecipeTags.Legumes,
      RecipeTags.SouthIndian,
    ],
    nutritionalInfo: {
      calories: 180,
      protein: 8,
      carbohydrates: 22,
      fat: 7,
      fiber: 6,
      sodium: 300,
      servings: 4,
    },
    spiceLevel: "mild",
    region: "South India",
    mainIngredient: "White Chickpeas",
    cookingMethod: "boiled",
    bestServedWith: ["Tea", "Coffee", "Coconut Water"],
    healthBenefits: [
      "High in protein",
      "Good source of fiber",
      "Supports heart health",
    ],
    tips: [
      "Soak chickpeas overnight for better cooking",
      "Don't overcook to maintain texture",
    ],
    variations: [
      "Add roasted peanuts for extra crunch",
      "Use jaggery for sweet version",
    ],
  },
  "Moong Dal Sundal": {
    tags: [
      RecipeTags.ProteinRich,
      RecipeTags.Easy,
      RecipeTags.Quick,
      RecipeTags.Legumes,
      RecipeTags.HealthyFats,
    ],
    nutritionalInfo: {
      calories: 160,
      protein: 10,
      carbohydrates: 18,
      fat: 6,
      fiber: 8,
      sodium: 250,
      servings: 4,
    },
    spiceLevel: "mild",
    region: "South India",
    mainIngredient: "Green Moong Dal",
    cookingMethod: "steamed",
    bestServedWith: ["Buttermilk", "Green Tea", "Fresh Juice"],
    healthBenefits: [
      "Easy to digest",
      "Rich in folate",
      "Good for weight management",
    ],
    tips: [
      "Steam instead of boiling for better nutrition",
      "Add lemon juice for vitamin C",
    ],
    variations: [
      "Make with sprouted moong for extra nutrition",
      "Add grated carrot for color",
    ],
  },
  "Peanut Sundal": {
    tags: [
      RecipeTags.Crunchy,
      RecipeTags.HealthyFats,
      RecipeTags.TeaTime,
      RecipeTags.Nuts,
      RecipeTags.Quick,
    ],
    nutritionalInfo: {
      calories: 220,
      protein: 10,
      carbohydrates: 8,
      fat: 18,
      fiber: 4,
      sodium: 200,
      servings: 4,
    },
    spiceLevel: "mild",
    region: "South India",
    mainIngredient: "Raw Peanuts",
    cookingMethod: "roasted",
    bestServedWith: ["Evening Tea", "Coffee", "Masala Chai"],
    healthBenefits: [
      "Rich in healthy fats",
      "Good source of vitamin E",
      "Supports brain health",
    ],
    tips: [
      "Roast peanuts until golden for best flavor",
      "Remove skin for better texture",
    ],
    variations: [
      "Mix with roasted chana for variety",
      "Add curry leaves for aroma",
    ],
  },
  "Sweet Corn Sundal": {
    tags: [
      RecipeTags.Sweet,
      RecipeTags.KidFriendly,
      RecipeTags.VitaminRich,
      RecipeTags.Grains,
      RecipeTags.Easy,
    ],
    nutritionalInfo: {
      calories: 140,
      protein: 4,
      carbohydrates: 25,
      fat: 5,
      fiber: 3,
      sodium: 150,
      servings: 4,
    },
    spiceLevel: "mild",
    region: "South India",
    mainIngredient: "Sweet Corn",
    cookingMethod: "boiled",
    bestServedWith: ["Milk", "Fresh Juice", "Coconut Water"],
    healthBenefits: [
      "Rich in antioxidants",
      "Good source of vitamin C",
      "Supports eye health",
    ],
    tips: ["Use fresh corn for best taste", "Don't overcook to retain crunch"],
    variations: ["Add bell peppers for color", "Mix with other vegetables"],
  },
  "Cashew Sundal": {
    tags: [
      RecipeTags.SpecialOccasion,
      RecipeTags.HealthyFats,
      RecipeTags.Nuts,
      RecipeTags.Creamy,
      RecipeTags.Festival,
    ],
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbohydrates: 12,
      fat: 24,
      fiber: 2,
      sodium: 180,
      servings: 4,
    },
    spiceLevel: "mild",
    region: "South India",
    mainIngredient: "Raw Cashews",
    cookingMethod: "roasted",
    bestServedWith: ["Special Occasions", "Festival Meals", "Premium Tea"],
    healthBenefits: [
      "Rich in healthy fats",
      "Good source of magnesium",
      "Supports heart health",
    ],
    tips: [
      "Soak cashews for easier digestion",
      "Roast lightly to retain nutrients",
    ],
    variations: [
      "Mix with other premium nuts",
      "Add saffron for luxury version",
    ],
  },
};

// Utility functions for recipe management
export class RecipeManager {
  // Get recipes by tag
  static getRecipesByTag(recipes: Recipe[], tag: RecipeTags): Recipe[] {
    return recipes.filter((recipe) => {
      const metadata = sundalRecipeMetadata[recipe.name];
      return metadata?.tags.includes(tag) || false;
    });
  }

  // Get recipes by difficulty
  static getRecipesByDifficulty(
    recipes: Recipe[],
    difficulty: Difficulty
  ): Recipe[] {
    return recipes.filter((recipe) => recipe.meta.diffculty === difficulty);
  }

  // Get recipes by diet type
  static getRecipesByDiet(recipes: Recipe[], diet: Diet): Recipe[] {
    return recipes.filter((recipe) => recipe.meta.diet.includes(diet));
  }

  // Get recipes by cooking time
  static getRecipesByTime(recipes: Recipe[], maxTime: number): Recipe[] {
    return recipes.filter(
      (recipe) => recipe.meta.prepTime + recipe.meta.cookTime <= maxTime
    );
  }

  // Get recipes by spice level
  static getRecipesBySpiceLevel(
    recipes: Recipe[],
    spiceLevel: "mild" | "medium" | "hot"
  ): Recipe[] {
    return recipes.filter((recipe) => {
      const metadata = sundalRecipeMetadata[recipe.name];
      return metadata?.spiceLevel === spiceLevel;
    });
  }

  // Search recipes by name or description
  static searchRecipes(recipes: Recipe[], query: string): Recipe[] {
    const lowerQuery = query.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(lowerQuery) ||
        recipe.description.toLowerCase().includes(lowerQuery)
    );
  }

  // Get nutritional summary for a set of recipes
  static getNutritionalSummary(recipes: Recipe[]): {
    totalRecipes: number;
    averageCalories: number;
    averageProtein: number;
    averageFiber: number;
    dietDistribution: Record<string, number>;
  } {
    const totalRecipes = recipes.length;
    let totalCalories = 0;
    let totalProtein = 0;
    let totalFiber = 0;
    const dietCounts: Record<string, number> = {};

    recipes.forEach((recipe) => {
      const metadata = sundalRecipeMetadata[recipe.name];
      if (metadata) {
        totalCalories += metadata.nutritionalInfo.calories;
        totalProtein += metadata.nutritionalInfo.protein;
        totalFiber += metadata.nutritionalInfo.fiber;
      }

      recipe.meta.diet.forEach((diet) => {
        const dietName = Diet[diet];
        dietCounts[dietName] = (dietCounts[dietName] || 0) + 1;
      });
    });

    return {
      totalRecipes,
      averageCalories: Math.round(totalCalories / totalRecipes),
      averageProtein: Math.round(totalProtein / totalRecipes),
      averageFiber: Math.round(totalFiber / totalRecipes),
      dietDistribution: dietCounts,
    };
  }

  // Get recipe recommendations based on dietary preferences
  static getRecommendations(
    recipes: Recipe[],
    preferences: {
      diet?: Diet[];
      maxTime?: number;
      spiceLevel?: "mild" | "medium" | "hot";
      tags?: RecipeTags[];
    }
  ): Recipe[] {
    let filtered = recipes;

    if (preferences.diet) {
      filtered = filtered.filter((recipe) =>
        preferences.diet!.some((diet) => recipe.meta.diet.includes(diet))
      );
    }

    if (preferences.maxTime) {
      filtered = this.getRecipesByTime(filtered, preferences.maxTime);
    }

    if (preferences.spiceLevel) {
      filtered = this.getRecipesBySpiceLevel(filtered, preferences.spiceLevel);
    }

    if (preferences.tags) {
      filtered = filtered.filter((recipe) => {
        const metadata = sundalRecipeMetadata[recipe.name];
        return (
          metadata &&
          preferences.tags!.some((tag) => metadata.tags.includes(tag))
        );
      });
    }

    return filtered;
  }

  // Get recipe categories for sundal recipes
  static getSundalCategories(): {
    legumes: Recipe[];
    nuts: Recipe[];
    grains: Recipe[];
    special: Recipe[];
  } {
    return {
      legumes: this.getRecipesByTag(sundalRecipe, RecipeTags.Legumes),
      nuts: this.getRecipesByTag(sundalRecipe, RecipeTags.Nuts),
      grains: this.getRecipesByTag(sundalRecipe, RecipeTags.Grains),
      special: sundalRecipe.filter((recipe) => {
        const metadata = sundalRecipeMetadata[recipe.name];
        return (
          metadata?.tags.includes(RecipeTags.Sweet) ||
          metadata?.tags.includes(RecipeTags.Sprouted) ||
          metadata?.tags.includes(RecipeTags.SpecialOccasion)
        );
      }),
    };
  }
}

// Export sundal recipe count for verification
export const SUNDAL_RECIPE_COUNT = sundalRecipe.length;

// Validate that we have 25+ sundal recipes
export const validateSundalCount = (): boolean => {
  return SUNDAL_RECIPE_COUNT >= 25;
};

// Get sundal recipes with enhanced metadata
export const getSundalRecipesWithMetadata = (): Array<
  Recipe & { metadata?: EnhancedRecipeMetadata }
> => {
  return sundalRecipe.map((recipe) => ({
    ...recipe,
    metadata: sundalRecipeMetadata[recipe.name],
  }));
};

// Export all sundal recipes for easy access
export { sundalRecipe } from "./sundalRecipeData";
