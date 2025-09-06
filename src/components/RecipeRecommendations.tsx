import React, { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { EnhancedRecipe } from '../types/enhanced-models';
import RecipeCard from './RecipeCard';
import './RecipeRecommendations.css';

interface RecipeRecommendationsProps {
  currentRecipe?: EnhancedRecipe;
  allRecipes: EnhancedRecipe[];
  userPreferences?: {
    favoriteIngredients?: string[];
    preferredDifficulty?: string[];
    preferredCuisines?: string[];
    dietaryRestrictions?: string[];
  };
  maxRecommendations?: number;
}

interface RecommendationScore {
  recipe: EnhancedRecipe;
  score: number;
  reasons: string[];
}

const RecipeRecommendations: React.FC<RecipeRecommendationsProps> = ({
  currentRecipe,
  allRecipes,
  userPreferences = {},
  maxRecommendations = 6
}) => {
  const { t, currentLanguage } = useLanguage();

  const recommendations = useMemo(() => {
    if (!allRecipes.length) return [];

    const scoredRecipes: RecommendationScore[] = allRecipes
      .filter(recipe => recipe.id !== currentRecipe?.id) // Exclude current recipe
      .map(recipe => {
        let score = 0;
        const reasons: string[] = [];

        // Base score for all recipes
        score += 1;

        // Similar cuisine preference
        if (currentRecipe && recipe.meta.cuisine === currentRecipe.meta.cuisine) {
          score += 3;
          reasons.push(t('recommendations.similarCuisine', 'Similar cuisine'));
        }

        // Similar difficulty level
        if (currentRecipe && recipe.meta.diffculty === currentRecipe.meta.diffculty) {
          score += 2;
          reasons.push(t('recommendations.similarDifficulty', 'Similar difficulty'));
        }

        // Similar cooking time
        if (currentRecipe) {
          const currentTime = currentRecipe.meta.prepTime + currentRecipe.meta.cookTime;
          const recipeTime = recipe.meta.prepTime + recipe.meta.cookTime;
          const timeDiff = Math.abs(currentTime - recipeTime);
          
          if (timeDiff <= 15) {
            score += 2;
            reasons.push(t('recommendations.similarTime', 'Similar cooking time'));
          }
        }

        // Dietary compatibility
        if (currentRecipe) {
          const commonDiets = recipe.meta.diet.filter(diet => 
            currentRecipe.meta.diet.includes(diet)
          );
          if (commonDiets.length > 0) {
            score += commonDiets.length * 2;
            reasons.push(t('recommendations.dietaryMatch', 'Matches dietary preferences'));
          }
        }

        // User preference matching
        if (userPreferences.preferredCuisines?.includes(recipe.meta.cuisine.toString())) {
          score += 3;
          reasons.push(t('recommendations.preferredCuisine', 'Preferred cuisine'));
        }

        if (userPreferences.preferredDifficulty?.includes(recipe.meta.diffculty.toString())) {
          score += 2;
          reasons.push(t('recommendations.preferredDifficulty', 'Preferred difficulty'));
        }

        // Ingredient matching with user preferences
        if (userPreferences.favoriteIngredients?.length) {
          const recipeIngredients = recipe.ingredients[currentLanguage as keyof typeof recipe.ingredients] || 
                                   recipe.ingredients.en || [];
          
          const matchingIngredients = userPreferences.favoriteIngredients.filter(favIngredient =>
            recipeIngredients.some(ingredient => 
              ingredient.toLowerCase().includes(favIngredient.toLowerCase())
            )
          );

          if (matchingIngredients.length > 0) {
            score += matchingIngredients.length * 2;
            reasons.push(t('recommendations.favoriteIngredients', 'Contains favorite ingredients'));
          }
        }

        // Shared tags with current recipe
        if (currentRecipe) {
          const sharedTags = recipe.tags.filter(tag => currentRecipe.tags.includes(tag));
          if (sharedTags.length > 0) {
            score += sharedTags.length;
            reasons.push(t('recommendations.similarTags', 'Similar recipe type'));
          }
        }

        // Popular recipes (based on tags like "popular", "traditional")
        if (recipe.tags.includes('popular') || recipe.tags.includes('traditional')) {
          score += 1;
          reasons.push(t('recommendations.popular', 'Popular recipe'));
        }

        // Quick recipes bonus
        const totalTime = recipe.meta.prepTime + recipe.meta.cookTime;
        if (totalTime <= 30) {
          score += 1;
          reasons.push(t('recommendations.quick', 'Quick to make'));
        }

        // Seasonal/festival appropriate
        if (recipe.tags.includes('navratri') || recipe.tags.includes('fasting')) {
          score += 2;
          reasons.push(t('recommendations.festivalAppropriate', 'Perfect for Navratri'));
        }

        // Nutritional balance
        if (recipe.nutritionalInfo) {
          if (recipe.nutritionalInfo.protein && recipe.nutritionalInfo.protein > 10) {
            score += 1;
            reasons.push(t('recommendations.highProtein', 'High protein'));
          }
          if (recipe.nutritionalInfo.fiber && recipe.nutritionalInfo.fiber > 5) {
            score += 1;
            reasons.push(t('recommendations.highFiber', 'High fiber'));
          }
        }

        // Gluten-free bonus for those with dietary restrictions
        if (userPreferences.dietaryRestrictions?.includes('gluten-free') && 
            recipe.meta.diet.includes(0)) { // Assuming 0 is GlutenFree enum value
          score += 3;
          reasons.push(t('recommendations.glutenFree', 'Gluten-free'));
        }

        // Vegan bonus
        if (userPreferences.dietaryRestrictions?.includes('vegan') && 
            recipe.meta.diet.includes(2)) { // Assuming 2 is Vegan enum value
          score += 3;
          reasons.push(t('recommendations.vegan', 'Vegan'));
        }

        return { recipe, score, reasons };
      });

    // Sort by score and return top recommendations
    return scoredRecipes
      .sort((a, b) => b.score - a.score)
      .slice(0, maxRecommendations);
  }, [allRecipes, currentRecipe, userPreferences, maxRecommendations, t, currentLanguage]);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="recipe-recommendations">
      <h3 className="recommendations-title">
        {currentRecipe 
          ? t('recommendations.similarRecipes', 'You might also like')
          : t('recommendations.recommendedForYou', 'Recommended for you')
        }
      </h3>
      
      <div className="recommendations-grid">
        {recommendations.map(({ recipe, reasons }) => (
          <div key={recipe.id} className="recommendation-item">
            <RecipeCard recipe={{
              categoryId: recipe.categoryId,
              imageUrl: recipe.imageUrl,
              name: recipe.name[currentLanguage as keyof typeof recipe.name] || recipe.name.en || '',
              description: recipe.description[currentLanguage as keyof typeof recipe.description] || recipe.description.en || '',
              meta: recipe.meta,
              videoUrl: recipe.videoUrl || ''
            }} />
            
            {reasons.length > 0 && (
              <div className="recommendation-reasons">
                <small>{reasons.slice(0, 2).join(', ')}</small>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeRecommendations;