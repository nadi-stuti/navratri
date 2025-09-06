import { Link, useNavigate } from "react-router";
import "./RecipeNotFound.css";
import { useLanguage } from "../../contexts/LanguageContext";

const RecipeNotFound = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="recipe-not-found">
      <div className="error-content">
        <h1>{t("pages.errors.recipeNotFound.title")}</h1>
        <p>{t("pages.errors.recipeNotFound.message")}</p>
        
        <div className="error-actions">
          <button onClick={() => navigate(-1)} className="back-button">
            {t("pages.errors.recipeNotFound.goBack")}
          </button>
          <Link to="/recipes" className="recipes-link">
            {t("pages.errors.recipeNotFound.browseAll")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeNotFound;