import { EnhancedRecipe, RecipeFilter, SearchResult } from '../types/enhanced-models';
import { Diet, Difficulty, Cusine } from '../model/enums';

/**
 * Advanced recipe search utility functions
 * Requirements: 1.2, 1.3 - Enhanced search and filtering functionality
 */

export interface SearchOptions {
  query?: string;
  filters?: RecipeFilter;
  language?: string;
  sortBy?: 'relevance' | 'time' | 'difficulty' | 'name' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface IngredientMatch {
  ingredient: string;
  confidence: number;
  type: 'exact' | 'partial' | 'similar';
}

/**
 * Performs advanced recipe search with multiple criteria
 */
export const searchRecipes = (
  recipes: EnhancedRecipe[],
  options: SearchOptions = {}
): SearchResult => {
  const {
    query = '',
    filters = {},
    language = 'en',
    sortBy = 'relevance',
    sortOrder = 'desc'
  } = options;

  let filteredRecipes = [...recipes];

  // Apply text search
  if (query.trim()) {
    filteredRecipes = performTextSearch(filteredRecipes, query, language);
  }

  // Apply filters
  filteredRecipes = applyFilters(filteredRecipes, filters);

  // Sort results
  filteredRecipes = sortRecipes(filteredRecipes, sortBy, sortOrder, language);

  return {
    recipes: filteredRecipes,
    totalCount: filteredRecipes.length,
    filters
  };
};

/**
 * Performs text search across recipe content
 */
const performTextSearch = (
  recipes: EnhancedRecipe[],
  query: string,
  language: string
): EnhancedRecipe[] => {
  const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);
  
  return recipes.filter(recipe => {
    const searchableContent = getSearchableContent(recipe, language);
    
    return searchTerms.every(term =>
      searchableContent.some(content =>
        content.toLowerCase().includes(term)
      )
    );
  });
};

/**
 * Extracts searchable content from a recipe
 */
const getSearchableContent = (recipe: EnhancedRecipe, language: string): string[] => {
  const content: string[] = [];
  
  // Recipe name
  const name = recipe.name[language as keyof typeof recipe.name] || recipe.name.en;
  if (name) content.push(name);
  
  // Recipe description
  const description = recipe.description[language as keyof typeof recipe.description] || recipe.description.en;
  if (description) content.push(description);
  
  // Ingredients
  const ingredients = recipe.ingredients[language as keyof typeof recipe.ingredients] || recipe.ingredients.en || [];
  content.push(...ingredients);
  
  // Instructions
  const instructions = recipe.instructions[language as keyof typeof recipe.instructions] || recipe.instructions.en || [];
  content.push(...instructions);
  
  // Tags
  content.push(...recipe.tags);
  
  // Tips and variations
  const tips = recipe.tips?.[language as keyof typeof recipe.tips] || recipe.tips?.en;
  if (tips) content.push(tips);
  
  const variations = recipe.variations?.[language as keyof typeof recipe.variations] || recipe.variations?.en;
  if (variations) content.push(variations);
  
  return content;
};

/**
 * Applies filters to recipe list
 */
const applyFilters = (recipes: EnhancedRecipe[], filters: RecipeFilter): EnhancedRecipe[] => {
  let filtered = recipes;

  // Category filter
  if (filters.category && filters.category.length > 0) {
    filtered = filtered.filter(recipe => filters.category!.includes(recipe.categoryId));
  }

  // Difficulty filter
  if (filters.difficulty && filters.difficulty.length > 0) {
    filtered = filtered.filter(recipe => filters.difficulty!.includes(recipe.meta.diffculty));
  }

  // Diet filter
  if (filters.diet && filters.diet.length > 0) {
    filtered = filtered.filter(recipe =>
      filters.diet!.some(diet => recipe.meta.diet.includes(diet))
    );
  }

  // Cuisine filter
  if (filters.cuisine && filters.cuisine.length > 0) {
    filtered = filtered.filter(recipe => filters.cuisine!.includes(recipe.meta.cuisine));
  }

  // Max time filter
  if (filters.maxTime !== undefined) {
    filtered = filtered.filter(recipe =>
      (recipe.meta.prepTime + recipe.meta.cookTime) <= filters.maxTime!
    );
  }

  // Ingredient filter
  if (filters.ingredients && filters.ingredients.length > 0) {
    filtered = filtered.filter(recipe =>
      hasRequiredIngredients(recipe, filters.ingredients!)
    );
  }

  // Tags filter
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(recipe =>
      filters.tags!.some(tag => recipe.tags.includes(tag))
    );
  }

  return filtered;
};

/**
 * Checks if recipe contains required ingredients
 */
const hasRequiredIngredients = (recipe: EnhancedRecipe, requiredIngredients: string[]): boolean => {
  const recipeIngredients = [
    ...(recipe.ingredients.en || []),
    ...(recipe.ingredients.hi || []),
    ...(recipe.ingredients.ta || []),
    ...(recipe.ingredients.mr || []),
    ...(recipe.ingredients.te || []),
    ...(recipe.ingredients.ml || []),
    ...(recipe.ingredients.bn || []),
    ...(recipe.ingredients.kn || [])
  ].map(ingredient => ingredient.toLowerCase());

  return requiredIngredients.every(required =>
    recipeIngredients.some(ingredient =>
      ingredient.includes(required.toLowerCase())
    )
  );
};

/**
 * Sorts recipes based on specified criteria
 */
const sortRecipes = (
  recipes: EnhancedRecipe[],
  sortBy: string,
  sortOrder: string,
  language: string
): EnhancedRecipe[] => {
  const sorted = [...recipes].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case 'name':
        const nameA = a.name[language as keyof typeof a.name] || a.name.en || '';
        const nameB = b.name[language as keyof typeof b.name] || b.name.en || '';
        comparison = nameA.localeCompare(nameB);
        break;

      case 'time':
        const timeA = a.meta.prepTime + a.meta.cookTime;
        const timeB = b.meta.prepTime + b.meta.cookTime;
        comparison = timeA - timeB;
        break;

      case 'difficulty':
        comparison = a.meta.diffculty - b.meta.diffculty;
        break;

      case 'popularity':
        // Simple popularity based on tags and nutritional completeness
        const popularityA = calculatePopularityScore(a);
        const popularityB = calculatePopularityScore(b);
        comparison = popularityA - popularityB;
        break;

      case 'relevance':
      default:
        // For relevance, maintain original order (already filtered by relevance)
        return 0;
    }

    return sortOrder === 'desc' ? -comparison : comparison;
  });

  return sorted;
};

/**
 * Calculates a simple popularity score for sorting
 */
const calculatePopularityScore = (recipe: EnhancedRecipe): number => {
  let score = 0;

  // Popular tags
  if (recipe.tags.includes('popular')) score += 3;
  if (recipe.tags.includes('traditional')) score += 2;
  if (recipe.tags.includes('quick')) score += 1;
  if (recipe.tags.includes('easy')) score += 1;

  // Nutritional info completeness
  if (recipe.nutritionalInfo) score += 1;

  // Recipe completeness
  if (recipe.tips) score += 1;
  if (recipe.variations) score += 1;
  if (recipe.videoUrl) score += 1;

  return score;
};

/**
 * Finds ingredient matches with fuzzy matching
 */
export const findIngredientMatches = (
  query: string,
  availableIngredients: string[]
): IngredientMatch[] => {
  const queryLower = query.toLowerCase();
  const matches: IngredientMatch[] = [];

  availableIngredients.forEach(ingredient => {
    const ingredientLower = ingredient.toLowerCase();
    
    if (ingredientLower === queryLower) {
      matches.push({
        ingredient,
        confidence: 1.0,
        type: 'exact'
      });
    } else if (ingredientLower.includes(queryLower)) {
      matches.push({
        ingredient,
        confidence: 0.8,
        type: 'partial'
      });
    } else if (calculateSimilarity(queryLower, ingredientLower) > 0.6) {
      matches.push({
        ingredient,
        confidence: 0.6,
        type: 'similar'
      });
    }
  });

  return matches.sort((a, b) => b.confidence - a.confidence);
};

/**
 * Calculates string similarity using Levenshtein distance
 */
const calculateSimilarity = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= str2.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }

  const maxLength = Math.max(str1.length, str2.length);
  return maxLength === 0 ? 1 : (maxLength - matrix[str2.length][str1.length]) / maxLength;
};

/**
 * Extracts unique ingredients from all recipes
 */
export const extractUniqueIngredients = (recipes: EnhancedRecipe[]): string[] => {
  const ingredientSet = new Set<string>();

  recipes.forEach(recipe => {
    // Extract from all language versions
    Object.values(recipe.ingredients).forEach(ingredients => {
      if (Array.isArray(ingredients)) {
        ingredients.forEach(ingredient => {
          // Clean ingredient name (remove quantities, descriptions)
          const cleaned = cleanIngredientName(ingredient);
          if (cleaned) {
            ingredientSet.add(cleaned);
          }
        });
      }
    });
  });

  return Array.from(ingredientSet).sort();
};

/**
 * Cleans ingredient name by removing quantities and descriptions
 */
const cleanIngredientName = (ingredient: string): string => {
  return ingredient
    .toLowerCase()
    .replace(/^\d+[\s\w]*\s/, '') // Remove quantities like "1 cup", "2 tbsp"
    .replace(/\([^)]*\)/g, '') // Remove parenthetical descriptions
    .replace(/,.*$/, '') // Remove everything after comma
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
};

/**
 * Gets recipe suggestions based on user preferences
 */
export const getRecipeSuggestions = (
  recipes: EnhancedRecipe[],
  userPreferences: {
    favoriteIngredients?: string[];
    preferredDifficulty?: Difficulty[];
    preferredCuisines?: Cusine[];
    dietaryRestrictions?: Diet[];
  },
  limit: number = 10
): EnhancedRecipe[] => {
  const scoredRecipes = recipes.map(recipe => {
    let score = 0;

    // Favorite ingredients
    if (userPreferences.favoriteIngredients) {
      const matchingIngredients = userPreferences.favoriteIngredients.filter(favIngredient =>
        hasRequiredIngredients(recipe, [favIngredient])
      );
      score += matchingIngredients.length * 3;
    }

    // Preferred difficulty
    if (userPreferences.preferredDifficulty?.includes(recipe.meta.diffculty)) {
      score += 2;
    }

    // Preferred cuisines
    if (userPreferences.preferredCuisines?.includes(recipe.meta.cuisine)) {
      score += 2;
    }

    // Dietary restrictions compliance
    if (userPreferences.dietaryRestrictions) {
      const meetsRestrictions = userPreferences.dietaryRestrictions.every(restriction =>
        recipe.meta.diet.includes(restriction)
      );
      if (meetsRestrictions) {
        score += 3;
      }
    }

    return { recipe, score };
  });

  return scoredRecipes
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.recipe);
};