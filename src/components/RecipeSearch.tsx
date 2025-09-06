import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { EnhancedRecipe } from '../types/enhanced-models';
import { Diet, Difficulty, Cusine } from '../model/enums';
import './RecipeSearch.css';

interface RecipeSearchProps {
  recipes: EnhancedRecipe[];
  onFilteredRecipes: (recipes: EnhancedRecipe[]) => void;
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({ recipes, onFilteredRecipes }) => {
  const { t, currentLanguage } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  
  // Filter states
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<Diet[]>([]);
  const [selectedCuisines, setSelectedCuisines] = useState<Cusine[]>([]);
  const [maxTime, setMaxTime] = useState<number | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  // Initialize from URL params
  useEffect(() => {
    const query = searchParams.get('q') || '';
    const difficulties = searchParams.get('difficulty')?.split(',').map(d => parseInt(d)).filter(d => !isNaN(d)) || [];
    const diets = searchParams.get('diet')?.split(',').map(d => parseInt(d)).filter(d => !isNaN(d)) || [];
    const cuisines = searchParams.get('cuisine')?.split(',').map(c => parseInt(c)).filter(c => !isNaN(c)) || [];
    const time = searchParams.get('maxTime') ? parseInt(searchParams.get('maxTime')!) : null;
    const ingredients = searchParams.get('ingredients')?.split(',').filter(i => i.trim()) || [];

    setSearchQuery(query);
    setSelectedDifficulties(difficulties);
    setSelectedDiets(diets);
    setSelectedCuisines(cuisines);
    setMaxTime(time);
    setSelectedIngredients(ingredients);
  }, [searchParams]);

  // Get unique ingredients from all recipes
  const availableIngredients = useMemo(() => {
    const ingredientSet = new Set<string>();
    recipes.forEach(recipe => {
      const ingredients = recipe.ingredients[currentLanguage as keyof typeof recipe.ingredients] || 
                         recipe.ingredients.en || [];
      ingredients.forEach(ingredient => {
        // Extract ingredient name (remove quantities and descriptions)
        const cleanIngredient = ingredient.toLowerCase()
          .replace(/^\d+[\s\w]*\s/, '') // Remove quantities like "1 cup", "2 tbsp"
          .replace(/\([^)]*\)/g, '') // Remove parenthetical descriptions
          .replace(/,.*$/, '') // Remove everything after comma
          .trim();
        if (cleanIngredient) {
          ingredientSet.add(cleanIngredient);
        }
      });
    });
    return Array.from(ingredientSet).sort();
  }, [recipes, currentLanguage]);

  // Filter recipes based on current criteria
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    // Text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe => {
        const name = recipe.name[currentLanguage as keyof typeof recipe.name] || recipe.name.en || '';
        const description = recipe.description[currentLanguage as keyof typeof recipe.description] || recipe.description.en || '';
        const ingredients = recipe.ingredients[currentLanguage as keyof typeof recipe.ingredients] || recipe.ingredients.en || [];
        
        return name.toLowerCase().includes(query) ||
               description.toLowerCase().includes(query) ||
               ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(query));
      });
    }

    // Difficulty filter
    if (selectedDifficulties.length > 0) {
      filtered = filtered.filter(recipe => selectedDifficulties.includes(recipe.meta.diffculty));
    }

    // Diet filter
    if (selectedDiets.length > 0) {
      filtered = filtered.filter(recipe => 
        selectedDiets.some(diet => recipe.meta.diet.includes(diet))
      );
    }

    // Cuisine filter
    if (selectedCuisines.length > 0) {
      filtered = filtered.filter(recipe => selectedCuisines.includes(recipe.meta.cuisine));
    }

    // Time filter
    if (maxTime !== null) {
      filtered = filtered.filter(recipe => 
        (recipe.meta.prepTime + recipe.meta.cookTime) <= maxTime
      );
    }

    // Ingredient filter
    if (selectedIngredients.length > 0) {
      filtered = filtered.filter(recipe => {
        const ingredients = recipe.ingredients[currentLanguage as keyof typeof recipe.ingredients] || 
                           recipe.ingredients.en || [];
        return selectedIngredients.every(selectedIngredient =>
          ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(selectedIngredient.toLowerCase())
          )
        );
      });
    }

    return filtered;
  }, [recipes, searchQuery, selectedDifficulties, selectedDiets, selectedCuisines, maxTime, selectedIngredients, currentLanguage]);

  // Update URL params and notify parent
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (searchQuery.trim()) params.set('q', searchQuery);
    if (selectedDifficulties.length > 0) params.set('difficulty', selectedDifficulties.join(','));
    if (selectedDiets.length > 0) params.set('diet', selectedDiets.join(','));
    if (selectedCuisines.length > 0) params.set('cuisine', selectedCuisines.join(','));
    if (maxTime !== null) params.set('maxTime', maxTime.toString());
    if (selectedIngredients.length > 0) params.set('ingredients', selectedIngredients.join(','));

    setSearchParams(params);
    onFilteredRecipes(filteredRecipes);
  }, [searchQuery, selectedDifficulties, selectedDiets, selectedCuisines, maxTime, selectedIngredients, filteredRecipes, onFilteredRecipes, setSearchParams]);

  const handleDifficultyToggle = (difficulty: Difficulty) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficulty) 
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const handleDietToggle = (diet: Diet) => {
    setSelectedDiets(prev => 
      prev.includes(diet) 
        ? prev.filter(d => d !== diet)
        : [...prev, diet]
    );
  };

  const handleCuisineToggle = (cuisine: Cusine) => {
    setSelectedCuisines(prev => 
      prev.includes(cuisine) 
        ? prev.filter(c => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedDifficulties([]);
    setSelectedDiets([]);
    setSelectedCuisines([]);
    setMaxTime(null);
    setSelectedIngredients([]);
  };

  const hasActiveFilters = searchQuery.trim() || selectedDifficulties.length > 0 || 
                          selectedDiets.length > 0 || selectedCuisines.length > 0 || 
                          maxTime !== null || selectedIngredients.length > 0;

  return (
    <div className="recipe-search">
      <div className="search-header">
        <div className="search-input-container">
          <input
            type="text"
            placeholder={t('common.search.placeholder', 'Search recipes, ingredients, or tags...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label={t('accessibility:ariaLabels.search.searchInput', 'Search recipes, ingredients, or tags')}
          />
          <button 
            className="advanced-toggle"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            aria-label={t('accessibility:ariaLabels.search.filterToggle', 'Toggle advanced filters')}
            aria-expanded={showAdvancedFilters}
          >
            {t('common.search.advancedFilters', 'Advanced Filters')}
          </button>
        </div>
        
        <div className="search-results-info">
          {t('common.search.resultsCount', `${filteredRecipes.length} recipes found`)}
          {hasActiveFilters && (
            <button onClick={clearAllFilters} className="clear-filters">
              {t('common.search.clearFilters', 'Clear All')}
            </button>
          )}
        </div>
      </div>

      {showAdvancedFilters && (
        <div className="advanced-filters">
          {/* Difficulty Filter */}
          <div className="filter-group">
            <h4>{t('common.filters.difficulty', 'Difficulty')}</h4>
            <div className="filter-options">
              {Object.values(Difficulty).filter(d => typeof d === 'number').map(difficulty => (
                <label key={difficulty} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedDifficulties.includes(difficulty as Difficulty)}
                    onChange={() => handleDifficultyToggle(difficulty as Difficulty)}
                  />
                  {t(`common.difficulty.${Difficulty[difficulty as Difficulty].toLowerCase()}`, Difficulty[difficulty as Difficulty])}
                </label>
              ))}
            </div>
          </div>

          {/* Diet Filter */}
          <div className="filter-group">
            <h4>{t('common.filters.diet', 'Dietary Preferences')}</h4>
            <div className="filter-options">
              {Object.values(Diet).filter(d => typeof d === 'number').map(diet => (
                <label key={diet} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedDiets.includes(diet as Diet)}
                    onChange={() => handleDietToggle(diet as Diet)}
                  />
                  {t(`common.diet.${Diet[diet as Diet].toLowerCase()}`, Diet[diet as Diet])}
                </label>
              ))}
            </div>
          </div>

          {/* Cuisine Filter */}
          <div className="filter-group">
            <h4>{t('common.filters.cuisine', 'Cuisine')}</h4>
            <div className="filter-options">
              {Object.values(Cusine).filter(c => typeof c === 'number').map(cuisine => (
                <label key={cuisine} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedCuisines.includes(cuisine as Cusine)}
                    onChange={() => handleCuisineToggle(cuisine as Cusine)}
                  />
                  {t(`common.cuisine.${Cusine[cuisine as Cusine].toLowerCase()}`, Cusine[cuisine as Cusine])}
                </label>
              ))}
            </div>
          </div>

          {/* Time Filter */}
          <div className="filter-group">
            <h4>{t('common.filters.maxTime', 'Maximum Cooking Time')}</h4>
            <div className="time-filter">
              <input
                type="range"
                min="15"
                max="180"
                step="15"
                value={maxTime || 180}
                onChange={(e) => setMaxTime(parseInt(e.target.value))}
              />
              <span>{maxTime || 180} {t('common.labels.minutes', 'minutes')}</span>
              <button onClick={() => setMaxTime(null)} className="clear-time">
                {t('common.search.noLimit', 'No Limit')}
              </button>
            </div>
          </div>

          {/* Ingredient Filter */}
          <div className="filter-group">
            <h4>{t('common.filters.ingredients', 'Must Include Ingredients')}</h4>
            <div className="ingredient-search">
              <div className="ingredient-suggestions">
                {availableIngredients.slice(0, 20).map(ingredient => (
                  <button
                    key={ingredient}
                    className={`ingredient-tag ${selectedIngredients.includes(ingredient) ? 'selected' : ''}`}
                    onClick={() => handleIngredientToggle(ingredient)}
                  >
                    {ingredient}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;