import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FilterSelector } from "../../components/FilterSelector";
import { recipeCategories } from "../../model/recipe-data/recipeData";
import "./layout.css";
import { useLanguage } from "../../contexts/LanguageContext";

const RecipeLayout = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();

  const toggleFilter = () => {
    setShowFilters((old) => !old);
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
    <div className="recipe-layout">
      <header>
        <h2>{t("common.navigation.recipes")}</h2>
        <Link to="/">
          <button>{t("common.navigation.home")}</button>
        </Link>
      </header>
      <ul className="horizontal-scroll-wrapper squares">
        {recipeCategories.map((c) => (
          <NavLink to={c.route} key={c.title}>
            <li>{getCategoryTitle(c.id)}</li>
          </NavLink>
        ))}
      </ul>

      {showFilters ? (
        <div className="hide-filter">
          <button className="filters-btn" onClick={toggleFilter}>
            {t("common.actions.filter")} ▲
          </button>
          <FilterSelector />
        </div>
      ) : (
        <div className="show-filter">
          <hr />
          <button className="filters-btn" onClick={toggleFilter}>
            {t("common.actions.filter")} ▼
          </button>
          <hr />
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default RecipeLayout;
