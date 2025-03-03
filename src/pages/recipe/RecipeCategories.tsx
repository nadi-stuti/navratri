import { Link } from "react-router";
import "./RecipeCategories.css";
import { recipeCategories } from "../../model/recipeData";
import React from "react";

const RecipeCategories = () => {
  return (
    <div className="categories">
      <h1>Navratri Fasting Recipes</h1>
      <p>
        Listed below are best Navratri Fast Recipes, ranging from meals that can
        be served for lunch or dinner to snacks and sweets. Some of these snacks
        can also be made for breakfast. Do eat light if possible and drink lots
        of water to stay hydrated. If possible, also include fruits or fruit
        juices in your fasting diet.
      </p>
      <ul>
        {recipeCategories.map((c) => (
          <li key={c.title}>
            <Link to={c.route}>{c.title}</Link>
            {c.description.split("\n").map((i) => (
              <React.Fragment key={i}>
                <i>{i}</i>
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
