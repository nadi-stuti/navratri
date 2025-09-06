import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { EnhancedRecipe, EnhancedRecipeCategory } from '../types/enhanced-models';
import { searchRecipes, SearchOptions } from '../utils/recipeSearchUtils';
import RecipeSearch from './RecipeSearch';
import RecipeCard from './RecipeCard';
import RecipeRecommendations from './RecipeRecommendations';
import './EnhancedRecipeList.css';

interface EnhancedRecipeListProps {
  categories: EnhancedRecipeCategory[];
  allRecipes: EnhancedRecipe[];
}

const EnhancedRecipeList: React.FC<EnhancedRecipeListProps> = ({
  categories,
  allRecipes
}) => {
  const { category } = useParams<{ category: string }>();
  const { t, currentLanguage } = useLanguage();
  
  const [filteredRecipes, setFilteredRecipes] = useState<EnhancedRecipe[]>([]);
  const [sortBy, setSortBy] = useState<'relevance' | 'time' | 'difficulty' | 'name' | 'popularity'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Find category by the route segment
  const categoryData = useMemo(() => {
    return categories.find((cat) => {
      const routeSegment = cat.route.split('/').pop();
      return routeSegment === category;
    });
  }, [categories, category]);

  // Get recipes for the current category
  const categoryRecipes = useMemo(() => {
    if (!categoryData) return [];
    return allRecipes.filter(recipe => recipe.categoryId === categoryData.id);
  }, [allRecipes, categoryData]);

  // If category not found, redirect to recipes page
  if (!categoryData) {
    return <Navigate to="/recipes" replace />;
  }

  // Get category title and description with translations
  const getCategoryTitle = (): string => {
    return categoryData.title[currentLanguage as keyof typeof categoryData.title] || 
           categoryData.title.en || 
           categoryData.title[Object.keys(categoryData.title)[0] as keyof typeof categoryData.title] || 
           'Recipes';
  };

  const getCategoryDescription = (): string => {
    return categoryData.description[currentLanguage as keyof typeof categoryData.description] || 
           categoryData.description.en || 
           categoryData.description[Object.keys(categoryData.description)[0] as keyof typeof categoryData.description] || 
           '';
  };

  // Handle filtered recipes from search component
  const handleFilteredRecipes = (recipes: EnhancedRecipe[]) => {
    setFilteredRecipes(recipes);
  };

  // Handle sorting
  const handleSortChange = (newSortBy: typeof sortBy) => {
    setSortBy(newSortBy);
    
    // Apply sorting to current filtered recipes
    const searchOptions: SearchOptions = {
      sortBy: newSortBy,
      sortOrder: 'desc',
      language: currentLanguage
    };

    const result = searchRecipes(filteredRecipes, searchOptions);
    setFilteredRecipes(result.recipes);
  };

  // Initialize with category recipes
  useEffect(() => {
    if (categoryRecipes.length > 0 && filteredRecipes.length === 0) {
      setFilteredRecipes(categoryRecipes);
    }
  }, [categoryRecipes, filteredRecipes.length]);

  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : categoryRecipes;

  return (
    <div className="enhanced-recipe-list">
      <div className="category-header">
        <h2 className="category-title">{getCategoryTitle()}</h2>
        <p className="category-description">{getCategoryDescription()}</p>
        
        <div className="category-stats">
          <span className="recipe-count">
            {t('common.labels.recipesAvailable', `${displayRecipes.length} recipes available`)}
          </span>
          {categoryData.minRecipeCount && displayRecipes.length >= categoryData.minRecipeCount && (
            <span className="goal-met">
              ✓ {t('common.labels.goalMet', 'Goal met!')}
            </span>
          )}
        </div>
      </div>

      {/* Search and Filter Component */}
      <RecipeSearch
        recipes={categoryRecipes}
        onFilteredRecipes={handleFilteredRecipes}
      />

      {/* Controls */}
      <div className="list-controls">
        <div className="sort-controls">
          <label htmlFor="sort-select">{t('common.labels.sortBy', 'Sort by:')}</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
            className="sort-select"
          >
            <option value="relevance">{t('common.sort.relevance', 'Relevance')}</option>
            <option value="name">{t('common.sort.name', 'Name')}</option>
            <option value="time">{t('common.sort.time', 'Cooking Time')}</option>
            <option value="difficulty">{t('common.sort.difficulty', 'Difficulty')}</option>
            <option value="popularity">{t('common.sort.popularity', 'Popularity')}</option>
          </select>
        </div>

        <div className="view-controls">
          <button
            className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label={t('accessibility:ariaLabels.viewControls.gridView', 'Switch to grid view')}
          >
            ⊞
          </button>
          <button
            className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label={t('accessibility:ariaLabels.viewControls.listView', 'Switch to list view')}
          >
            ☰
          </button>
        </div>
      </div>



      {/* Recipe Results */}
      {displayRecipes.length === 0 ? (
        <div className="no-results">
          <h3>{t('common.labels.noRecipesFound', 'No recipes found')}</h3>
          <p>{t('common.labels.tryDifferentFilters', 'Try adjusting your search criteria or filters.')}</p>
        </div>
      ) : (
        <div className={`recipes-container ${viewMode}`}>
          {displayRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <RecipeCard recipe={{
                categoryId: recipe.categoryId,
                imageUrl: recipe.imageUrl,
                name: recipe.name[currentLanguage as keyof typeof recipe.name] || recipe.name.en || '',
                description: recipe.description[currentLanguage as keyof typeof recipe.description] || recipe.description.en || '',
                meta: recipe.meta,
                videoUrl: recipe.videoUrl || ''
              }} />
              
              {/* Additional recipe info for list view */}
              {viewMode === 'list' && (
                <div className="recipe-extra-info">
                  <div className="recipe-tags">
                    {recipe.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="recipe-tag">
                        {t(`common.tags.${tag}`, tag)}
                      </span>
                    ))}
                  </div>
                  
                  {recipe.nutritionalInfo && (
                    <div className="nutrition-preview">
                      <span>{recipe.nutritionalInfo.calories} {t('common.labels.calories', 'cal')}</span>
                      {recipe.nutritionalInfo.protein && (
                        <span>{recipe.nutritionalInfo.protein}g {t('common.labels.protein', 'protein')}</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Recipe Recommendations */}
      {displayRecipes.length > 0 && (
        <RecipeRecommendations
          allRecipes={allRecipes}
          maxRecommendations={6}
        />
      )}
    </div>
  );
};

export default EnhancedRecipeList;