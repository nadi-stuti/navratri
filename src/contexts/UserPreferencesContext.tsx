import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Diet, Difficulty, Cusine } from '../model/enums';

interface UserPreferences {
  favoriteIngredients: string[];
  preferredDifficulty: Difficulty[];
  preferredCuisines: Cusine[];
  dietaryRestrictions: Diet[];
  searchHistory: string[];
  favoriteRecipes: string[];
  recentlyViewed: string[];
}

interface UserPreferencesContextType {
  preferences: UserPreferences;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  addFavoriteIngredient: (ingredient: string) => void;
  removeFavoriteIngredient: (ingredient: string) => void;
  addToSearchHistory: (query: string) => void;
  addFavoriteRecipe: (recipeId: string) => void;
  removeFavoriteRecipe: (recipeId: string) => void;
  addToRecentlyViewed: (recipeId: string) => void;
  clearSearchHistory: () => void;
  resetPreferences: () => void;
}

const defaultPreferences: UserPreferences = {
  favoriteIngredients: [],
  preferredDifficulty: [],
  preferredCuisines: [],
  dietaryRestrictions: [],
  searchHistory: [],
  favoriteRecipes: [],
  recentlyViewed: []
};

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

const STORAGE_KEY = 'navratri-user-preferences';
const MAX_SEARCH_HISTORY = 10;
const MAX_RECENTLY_VIEWED = 20;

interface UserPreferencesProviderProps {
  children: ReactNode;
}

export const UserPreferencesProvider: React.FC<UserPreferencesProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedPreferences = JSON.parse(stored);
        setPreferences({ ...defaultPreferences, ...parsedPreferences });
      }
    } catch (error) {
      console.error('Failed to load user preferences:', error);
    }
  }, []);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (error) {
      console.error('Failed to save user preferences:', error);
    }
  }, [preferences]);

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...updates }));
  };

  const addFavoriteIngredient = (ingredient: string) => {
    const cleanIngredient = ingredient.trim().toLowerCase();
    if (!cleanIngredient) return;

    setPreferences(prev => ({
      ...prev,
      favoriteIngredients: prev.favoriteIngredients.includes(cleanIngredient)
        ? prev.favoriteIngredients
        : [...prev.favoriteIngredients, cleanIngredient]
    }));
  };

  const removeFavoriteIngredient = (ingredient: string) => {
    const cleanIngredient = ingredient.trim().toLowerCase();
    setPreferences(prev => ({
      ...prev,
      favoriteIngredients: prev.favoriteIngredients.filter(item => item !== cleanIngredient)
    }));
  };

  const addToSearchHistory = (query: string) => {
    const cleanQuery = query.trim();
    if (!cleanQuery) return;

    setPreferences(prev => {
      const newHistory = [cleanQuery, ...prev.searchHistory.filter(item => item !== cleanQuery)]
        .slice(0, MAX_SEARCH_HISTORY);
      
      return {
        ...prev,
        searchHistory: newHistory
      };
    });
  };

  const addFavoriteRecipe = (recipeId: string) => {
    if (!recipeId) return;

    setPreferences(prev => ({
      ...prev,
      favoriteRecipes: prev.favoriteRecipes.includes(recipeId)
        ? prev.favoriteRecipes
        : [...prev.favoriteRecipes, recipeId]
    }));
  };

  const removeFavoriteRecipe = (recipeId: string) => {
    setPreferences(prev => ({
      ...prev,
      favoriteRecipes: prev.favoriteRecipes.filter(id => id !== recipeId)
    }));
  };

  const addToRecentlyViewed = (recipeId: string) => {
    if (!recipeId) return;

    setPreferences(prev => {
      const newRecentlyViewed = [recipeId, ...prev.recentlyViewed.filter(id => id !== recipeId)]
        .slice(0, MAX_RECENTLY_VIEWED);
      
      return {
        ...prev,
        recentlyViewed: newRecentlyViewed
      };
    });
  };

  const clearSearchHistory = () => {
    setPreferences(prev => ({
      ...prev,
      searchHistory: []
    }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    localStorage.removeItem(STORAGE_KEY);
  };

  const contextValue: UserPreferencesContextType = {
    preferences,
    updatePreferences,
    addFavoriteIngredient,
    removeFavoriteIngredient,
    addToSearchHistory,
    addFavoriteRecipe,
    removeFavoriteRecipe,
    addToRecentlyViewed,
    clearSearchHistory,
    resetPreferences
  };

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = (): UserPreferencesContextType => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};