import { useNavigate, useSearchParams } from "react-router";
import "./Recipe.css";
import { mealCategories, recipe } from "../../model/recipeData";
import RandomRecipe from "../../components/RandomRecipe";

const Recipe = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const r =
    recipe.find((e) => e.name === searchParams.get("name")) || recipe[0];

  return (
    <div className="recipe">
      <img src={r.imageUrl} alt={r.name} />
      <h2>{r.name}</h2>
      <p>{r.description}</p>
      <a target="_blank" href={r.videoUrl}>
        Watch video
      </a>
      <br />
      <RandomRecipe mealCategories={mealCategories[r.categoryId]} />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Recipe;
