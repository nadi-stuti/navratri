import { useNavigate, useParams, Navigate } from "react-router";
import "./Recipe.css";
import { mealCategories, recipe } from "../../model/recipe-data/recipeData";
import RandomRecipe from "../../components/RandomRecipe";
import { useLanguage } from "../../contexts/LanguageContext";

const Recipe = () => {
  const { recipeName } = useParams<{ recipeName: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Decode the recipe name from URL (handles spaces and special characters)
  const decodedRecipeName = recipeName ? decodeURIComponent(recipeName) : "";

  // Find the recipe by name
  const foundRecipe = recipe.find((r) => r.name === decodedRecipeName);

  // If recipe not found, redirect to not found page
  if (!foundRecipe) {
    return <Navigate to="/recipe-not-found" replace />;
  }

  return (
    <div className="recipe">
      <img
        src={foundRecipe.imageUrl}
        alt={t(
          "accessibility:imageAlt.recipeImage",
          "{{recipeName}} - Traditional Navratri recipe",
          { recipeName: foundRecipe.name }
        )}
      />
      <h2>{foundRecipe.name}</h2>
      <p>{foundRecipe.description}</p>
      <a target="_blank" href={foundRecipe.videoUrl} rel="noopener noreferrer">
        {t("common.actions.watchVideo", "Watch video")}
      </a>
      <br />
      <RandomRecipe
        mealCategories={mealCategories[foundRecipe.categoryId]}
        currentRecipe={foundRecipe}
      />
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => navigate(-1)}>{t("common.actions.back")}</button>
        <button onClick={() => navigate("/")}>
          {t("common.navigation.home")}
        </button>
        <button onClick={() => navigate("/recipes")}>
          {t("common.actions.browseAll")}
        </button>
      </div>
    </div>
  );
};

export default Recipe;
