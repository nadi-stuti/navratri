import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FilterSelector } from "../../components/FilterSelector";
import { recipeCategories } from "../../model/recipeData";
import "./layout.css";

const RecipeLayout = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = () => {
    setShowFilters((old) => !old);
  };

  return (
    <div className="recipe-layout">
      <header>
        <h2>Recipes</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </header>
      <ul className="horizontal-scroll-wrapper squares">
        {recipeCategories.map((c) => (
          <NavLink to={c.route} key={c.title}>
            <li>{c.title}</li>
          </NavLink>
        ))}
      </ul>

      {showFilters ? (
        <div className="hide-filter">
          <button className="filters-btn" onClick={toggleFilter}>
            Hide Filters
          </button>
          <FilterSelector />
        </div>
      ) : (
        <div className="show-filter">
          <hr />
          <button className="filters-btn" onClick={toggleFilter}>
            Show Filters
          </button>
          <hr />
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default RecipeLayout;
