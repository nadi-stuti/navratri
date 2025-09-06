import { useParams, useSearchParams, Navigate } from "react-router";
import RecipeCard from "../../components/RecipeCard";
import {
  filterRecipeFromSearch,
  recipe,
  recipeCategories,
} from "../../model/recipe-data/recipeData";
import {
  sampleEnhancedRecipes,
  enhancedRecipeCategories,
} from "../../model/recipe-data/enhanced-recipe-data";
import EnhancedRecipeList from "../../components/EnhancedRecipeList";
import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useUserPreferences } from "../../contexts/UserPreferencesContext";

const RecipeList = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParam] = useSearchParams();
  const { t } = useLanguage();
  useUserPreferences();
  const [useEnhancedView, setUseEnhancedView] = useState(false);

  // Find category by the route segment
  const categoryData = recipeCategories.find((cat) => {
    const routeSegment = cat.route.split("/").pop(); // Get last segment of route
    return routeSegment === category;
  });

  // If category not found, redirect to recipes page
  if (!categoryData) {
    return <Navigate to="/recipes" replace />;
  }

  // Check if we have enhanced recipes for this category
  const hasEnhancedRecipes = sampleEnhancedRecipes.some(
    (recipe) => recipe.categoryId === categoryData.id
  );

  // Use enhanced view if available and enabled
  if (useEnhancedView && hasEnhancedRecipes) {
    return (
      <div>
        <div style={{ marginBottom: "1rem", textAlign: "center" }}>
          <button
            onClick={() => setUseEnhancedView(false)}
            style={{
              padding: "0.5rem 1rem",
              background: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {t("common.labels.switchToClassicView", "Switch to Classic View")}
          </button>
        </div>
        <EnhancedRecipeList
          categories={enhancedRecipeCategories}
          allRecipes={sampleEnhancedRecipes}
        />
      </div>
    );
  }

  // Category title/description helpers removed - they were unused in this route.

  const filterData = recipe.filter(
    (e) =>
      e.categoryId === categoryData.id && filterRecipeFromSearch(searchParam, e)
  );

  return (
    <div>
      {filterData.map((recipe) => (
        <React.Fragment key={recipe.name}>
          <RecipeCard recipe={recipe} />
          <br />
        </React.Fragment>
      ))}
      {/* <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        {hasEnhancedRecipes && (
          <button 
            onClick={() => setUseEnhancedView(true)}
            style={{ 
              padding: '0.5rem 1rem', 
              background: '#ff6b35', 
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
          >
            {t('common.labels.switchToEnhancedView', 'Try Enhanced Search & Filters')}
          </button>
        )}
      </div> */}

      {/* <h2>{getCategoryTitle(categoryData.id)}</h2>
      <p>{getCategoryDescription(categoryData.id)}</p>
      {filterData.length === 0 ? (
        <p>{t("common.labels.noRecipesFound", "No recipes found matching your criteria.")}</p>
      ) : (
        filterData.map((recipe) => (
          <React.Fragment key={recipe.name}>
            <RecipeCard recipe={recipe} />
            <br />
          </React.Fragment>
        ))
      )} */}
    </div>
  );
};

export default RecipeList;
