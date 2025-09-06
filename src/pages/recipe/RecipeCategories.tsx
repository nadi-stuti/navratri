import { Link } from "react-router";
import "./RecipeCategories.css";
import { recipeCategories } from "../../model/recipe-data/recipeData";
import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const RecipeCategories = () => {
  const { t } = useLanguage();

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

  const getCategoryDescription = (categoryId: number): string => {
    const descriptionKeys = [
      "pages.recipes.descriptions.lunchDinner",
      "pages.recipes.descriptions.breakfastSnacks",
      "pages.recipes.descriptions.chutneyRaita",
      "pages.recipes.descriptions.sweetsDeserts",
      "pages.recipes.descriptions.beverages",
      "pages.recipes.descriptions.southIndian",
      "pages.recipes.descriptions.sundal",
    ];
    return t(descriptionKeys[categoryId] || descriptionKeys[0]);
  };

  return (
    <div className="categories">
      <h1>{t("pages.recipes.title")}</h1>
      <p>{t("pages.recipes.description")}</p>
      <ul>
        {recipeCategories.map((c) => (
          <li key={c.title}>
            <Link to={c.route}>{getCategoryTitle(c.id)}</Link>
            {getCategoryDescription(c.id)
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  <i>{line}</i>
                  <br />
                </React.Fragment>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCategories;
