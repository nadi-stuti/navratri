import { useNavigate } from "react-router";
import { Cusine, Difficulty } from "../model/enums";
import { Recipe } from "../model/types";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/recipe?name=${recipe.name}`)}
    >
      <img src={recipe.imageUrl} alt={recipe.name} />
      <div className="details">
        <p>
          <b>{recipe.name}</b>
        </p>
        <hr />
        <p>{Cusine[recipe.meta.cuisine]}</p> <hr />
        <p>Time: {recipe.meta.cookTime + recipe.meta.prepTime} mins</p> <hr />
        <p>Skill: {Difficulty[recipe.meta.diffculty]}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
