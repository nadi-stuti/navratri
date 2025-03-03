import { Difficulty } from "./enums";
import { lunchRecipe } from "./lunchRecipeData";
import { snackRecipe } from "./snackRecipeData";
import { Recipe, type RecipeCategory } from "./types";

export const recipeCategories: RecipeCategory[] = [
  {
    id: 0,
    title: "Lunch & Dinner",
    route: "/recipe-list/lunch",
    description:
      "I have categorized the lunch and dinner meals into various breads or grain-based dishes as well as curries, gravies and sides. The breads’ list consists both of flatbreads and fried breads.",
  },
  {
    id: 1,
    title: "Breakfast or Snacks",
    route: "/recipe-list/snacks",
    description:
      "Here I have listed recipes that you can make for breakfast or snacks. Some of them are fried. For healthier versions, use an appe (paniyaram) pan to make these or air-fry or bake these.  ",
  },
  {
    id: 2,
    title: "Chutney & Raita",
    route: "/recipe-list/chutney",
    description:
      "These chutneys and raitas not only act as the perfect accompaniment with the main course or snacks, but also suffice as topping or dipping sauces. Listed below are such Navratri Fast Recipes.",
  },
  {
    id: 3,
    title: "Sweets & Desserts",
    route: "/recipe-list/sweets",
    description:
      "Can an Indian meal be ever complete without a sweet? Not really. So, in this section, you will find some easy-peasy sweets and desserts that can be made during Navratri festival, and can also be offered to Goddess Durga. This list is categorized into kheer, halwa, ladoo and fruit-based recipes.",
  },
  {
    id: 4,
    title: "Beverages",
    route: "/recipe-list/beverages",
    description:
      "All fruits can be consumed during fasting in Navratri festival. So, use any fruit or a combination of fruits to prepare juices, smoothies or shakes. Milk and milk products can also be considered as Navratri Recipes.",
  },
  {
    id: 5,
    title: "South Indian Recipes",
    route: "/recipe-list/south-indian",
    description:
      "When compared to North Indian Navratri Fast Recipes, fasting food that is made in South India is quite different. Usually all grains, vegetables and cereals are used to make it. But they still don’t have any onion or garlic in them. \n These are some no onion, no garlic recipes which are popular during Navratri festival in southern parts of India. However, a crucial point to remember here is, you should not consider these as true vrat or fasting recipes. Avoid making these if you want to observe a North Indian style of fast.",
  },
  {
    id: 6,
    title: "Sundal Recipes",
    route: "/recipe-list/sundal",
    description:
      "South Indian sundals are dry preparations made with a variety of legumes, lentils or pulses like moong beans, Bengal gram, black eyed beans, peanuts, sweet corn, etc. \nBoth common during Navratri as well as Ganesh Chaturthi. Each type of sundal is more or less prepared in the same way. They might just have some minor variations in the recipes.",
  },
];

export const mealCategories = [
  [1, 3],
  [2, 4],
  [0, 1],
  [0, 1],
  [0, 1],
  [1, 3],
  [2, 4],
];

enum Filter {
  Skill = "Skill",
  Time = "Time",
}

export const filterValues = {
  [Filter.Skill]: ["Easy", "Moderate", "Difficult"],
  [Filter.Time]: ["Short", "Medium", "Long"],
};

export function filterRecipeFromSearch(
  searchParam: URLSearchParams,
  recipe: Recipe
): boolean {
  let match = true;

  const skill = searchParam.get(Filter.Skill);
  if (skill) {
    match = Difficulty[recipe.meta.diffculty] === skill;

    if (!match) return false;
  }

  const time = searchParam.get(Filter.Time);
  const tt = recipe.meta.cookTime + recipe.meta.prepTime;
  if (time) {
    if (time === filterValues.Time[0]) match = tt <= 30;
    if (time === filterValues.Time[1]) match = tt > 30 && tt <= 60;
    if (time === filterValues.Time[2]) match = tt > 90;

    if (!match) return false;
  }

  return match;
}

export const recipe: Recipe[] = [...lunchRecipe, ...snackRecipe];
