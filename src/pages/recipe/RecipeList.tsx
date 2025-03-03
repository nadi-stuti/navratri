import { useLocation, useSearchParams } from "react-router";
import RecipeCard from "../../components/RecipeCard";
import {
  filterRecipeFromSearch,
  recipe,
  recipeCategories,
} from "../../model/recipeData";
import React from "react";

const RecipeList = () => {
  const location = useLocation();
  const [searchParam] = useSearchParams();

  const catId =
    recipeCategories.find((e) => e.route === location.pathname)?.id || 0;

  const filterData = recipe.filter(
    (e) => e.categoryId === catId && filterRecipeFromSearch(searchParam, e)
  );

  return (
    <div>
      {filterData.map((recipe) => (
        <React.Fragment key={recipe.name}>
          <RecipeCard recipe={recipe} />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecipeList;
