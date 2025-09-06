import { useNavigate } from "react-router";
import { recipe } from "../model/recipe-data/recipeData";
import { Recipe } from "../model/types";
import "./RandomRecipe.css";
import { useLanguage } from "../contexts/LanguageContext";

interface RandomRecipeProps {
  mealCategories: number[];
  currentRecipe?: Recipe;
}

const RandomRecipe = ({ mealCategories, currentRecipe }: RandomRecipeProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleMealClick = (meal: Recipe) => {
    const encodedName = encodeURIComponent(meal.name);
    navigate(`/recipe/${encodedName}`);
  };

  // Map category IDs to translation keys
  const getCategoryTitle = (categoryId: number): string => {
    const titleKeys = [
      "pages.recipes.categories.lunchDinner",
      "pages.recipes.categories.breakfastSnacks",
      "pages.recipes.categories.chutneyRaita",
      "pages.recipes.categories.sweetsDeserts",
      "pages.recipes.categories.beverages",
      "pages.recipes.categories.southIndian",
      "pages.recipes.categories.sundal",
    ];
    return t(titleKeys[categoryId] || titleKeys[0]);
  };

  return (
    <div className="random-recipe">
      <h3>{t("pages.recipes.makeItAMeal", "Make it a meal")}</h3>
      <div className="list">
        {mealCategories.map((categoryNumber) => {
          const mealRecipeList = recipe.filter(
            (r) =>
              r.categoryId === categoryNumber &&
              (!currentRecipe || r.name !== currentRecipe.name) // Exclude current recipe
          );

          if (mealRecipeList.length === 0) {
            return null; // Skip if no recipes available
          }

          const meal =
            mealRecipeList[Math.floor(Math.random() * mealRecipeList.length)];

          const categoryName = getCategoryTitle(categoryNumber);

          return (
            <div
              className="card"
              style={{ backgroundImage: `url(${meal.imageUrl})` }}
              key={`${categoryNumber}-${meal.name}`}
              onClick={() => handleMealClick(meal)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleMealClick(meal);
                }
              }}
              aria-label={t(
                "accessibility:ariaLabels.recipe.viewRecipe",
                "View {{recipeName}} recipe details",
                { recipeName: meal.name }
              )}
            >
              <p>
                <b>{categoryName}</b>: {meal.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomRecipe;
