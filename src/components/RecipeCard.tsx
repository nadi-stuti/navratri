import { useNavigate } from "react-router";
import { Cusine, Difficulty } from "../model/enums";
import { Recipe } from "../model/types";
import "./RecipeCard.css";
import { useLanguage } from "../contexts/LanguageContext";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleRecipeClick = () => {
    // Encode the recipe name for URL safety
    const encodedName = encodeURIComponent(recipe.name);
    navigate(`/recipe/${encodedName}`);
  };

  const getCuisineTranslation = (cuisine: Cusine): string => {
    const cuisineKey = Cusine[cuisine].toLowerCase();
    return t(`common.cuisine.${cuisineKey}`, Cusine[cuisine]);
  };

  const getDifficultyTranslation = (difficulty: Difficulty): string => {
    const difficultyKey = Difficulty[difficulty].toLowerCase();
    return t(`common.filters.${difficultyKey}`, Difficulty[difficulty]);
  };

  return (
    <div
      className="recipe-card"
      onClick={handleRecipeClick}
    >
      <img src={recipe.imageUrl} alt={t('accessibility:imageAlt.recipeImage', '{{recipeName}} - Traditional Navratri recipe', { recipeName: recipe.name })} />
      <div className="details">
        <p>
          <b>{recipe.name}</b>
        </p>
        <hr />
        <p>{getCuisineTranslation(recipe.meta.cuisine)}</p> <hr />
        <p>{t("common.labels.time")}: {recipe.meta.cookTime + recipe.meta.prepTime} {t("common.labels.mins")}</p> <hr />
        <p>{t("common.labels.skill")}: {getDifficultyTranslation(recipe.meta.diffculty)}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
