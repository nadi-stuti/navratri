import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FilterSelector } from "../../components/FilterSelector";
import { recipeCategories } from "../../model/recipe-data/recipeData";
import "./layout.css";
import { useLanguage } from "../../contexts/LanguageContext";

const RecipeLayout = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();
  const listRef = useRef<HTMLUListElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const toggleFilter = () => {
    setShowFilters((old) => !old);
  };

  const updateScrollButtons = () => {
    const el = listRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollByAmount = (amount: number) => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollButtons();
    const el = listRef.current;
    if (!el) return;
    const onScroll = () => updateScrollButtons();
    el.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => updateScrollButtons();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
      <div className="category-bar" aria-label={t("pages.recipes.title")}>
        <button
          type="button"
          className="category-nav left"
          aria-label={t("common.actions.back")}
          onClick={() => scrollByAmount(-240)}
          disabled={!canScrollLeft}
        >
          ◀
        </button>
        <div
          className="category-scroll-viewport"
          role="tablist"
          aria-orientation="horizontal"
        >
          <ul
            ref={listRef}
            className="horizontal-scroll-wrapper squares category-list"
            onScroll={updateScrollButtons}
          >
            {recipeCategories.map((c) => (
              <li key={c.title} className="category-chip" role="presentation">
                <NavLink
                  to={c.route}
                  role="tab"
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                  {getCategoryTitle(c.id)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="category-nav right"
          aria-label={t("common.actions.next")}
          onClick={() => scrollByAmount(240)}
          disabled={!canScrollRight}
        >
          ▶
        </button>
      </div>

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
