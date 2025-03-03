import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import AboutFestival from "./pages/AboutFestival.tsx";
import Location from "./pages/Location.tsx";
import AboutFast from "./pages/AboutFast.tsx";
import More from "./pages/More.tsx";
import RecipeCategories from "./pages/recipe/RecipeCategories.tsx";
import HomeLayout from "./pages/layout/HomeLayout.tsx";
import RecipeLayout from "./pages/layout/RecipeLayout.tsx";
import RecipeList from "./pages/recipe/RecipeList.tsx";
import Recipe from "./pages/recipe/Recipe.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<HomeLayout />}>
          <Route path="/recipes" element={<RecipeCategories />} />
          <Route path="/about-navratri" element={<AboutFestival />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/about-fast" element={<AboutFast />} />
          <Route path="/more-fast" element={<More />} />
        </Route>

        <Route path="/recipe-list" element={<RecipeLayout />}>
          <Route path="*" element={<RecipeList />} />
        </Route>

        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
