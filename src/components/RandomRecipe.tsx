import { recipe, recipeCategories } from "../model/recipeData";
import "./RandomRecipe.css";

const RandomRecipe = ({ mealCategories }: { mealCategories: number[] }) => {
  return (
    <div className="random-recipe">
      <h3>Make it a meal</h3>
      <div className="list">
        {mealCategories.map((categoryNumber) => {
          const mealRecipeList = recipe.filter(
            (r) => r.categoryId === categoryNumber
          );
          const meal =
            mealRecipeList[Math.floor(Math.random() * mealRecipeList.length)];

          const categoryName =
            recipeCategories.find((e) => e.id === categoryNumber)?.title || "";

          return (
            <div
              className="card"
              style={{ backgroundImage: `url(${meal.imageUrl})` }}
              key={meal.name}
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
