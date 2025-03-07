import { Recipe } from "./types";
import { Course, Cusine, Diet, Difficulty } from "./enums";

const TamarindChutney: Recipe = {
  categoryId: 2,
  name: "Tamarind Chutney (Imli Chutney For Chaat Snacks)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/saunth-chutney-recipe-1-500x500.jpg",
  description:
    "Tamarind Chutney or Imli chutney is a sweet and tangy chutney made with tamarind, jaggery and ginger powder. It is also known as saunth chutney.",
  meta: {
    prepTime: 240,
    cookTime: 12,
    cuisine: Cusine.NorthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegan],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=uV_CH-SrNQs&pp=ygUQVGFtYXJpbmQgQ2h1dG5leQ%3D%3D",
};

const DateTamarindChutney: Recipe = {
  categoryId: 2,
  name: "Date-Tamarind Chutney",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2010/08/tamarind-date-chutney-recipe11-500x500.jpg",
  description:
    "Date-Tamarind Chutney recipe for chaat snacks. Thus sweet tangy gooey chutney made with tamarind, dates and jaggery goes well with Indian chaat snacks.",
  meta: {
    prepTime: 5,
    cookTime: 16,
    cuisine: Cusine.NorthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=uDAQZJSqkBM&pp=ygUVVGFtYXJpbmQgZGF0ZSBDaHV0bmV5",
};

const CucumberRaita: Recipe = {
  categoryId: 2,
  name: "Cucumber Raita (Indian Raita)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2011/09/cucumber-raita-recipe-1-500x500.jpg",
  description:
    "Cucumber raita is a popular savory Indian raita dip made with cucumber, spices, herbs and curd (yogurt). This simple, refreshing, cooling cucumber raita recipe comes together in 5 minutes.",
  meta: {
    prepTime: 5,
    cookTime: 0,
    cuisine: Cusine.NorthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=-auw9dTznQ8&pp=ygUTQ3VjdW1iZXIgUmFpdGEgdnJhdA%3D%3D",
};

const BeetrootRaita: Recipe = {
  categoryId: 2,
  name: "Beetroot Raita",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2010/06/beetroot-carrot-raita-recipe-12a-500x500.jpg",
  description:
    "Beetroot Raita is a colorful, vibrant raita or yogurt dip made with healthy beets, onions, bell pepper, carrots, spices and curd (yogurt). It pairs nicely with most Indian meals.",
  meta: {
    prepTime: 20,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=DE7s3V4mvfM&pp=ygUTQmVldHJvb3QgUmFpdGEgdnJhdA%3D%3D",
};

export const chutneyRecipe = [
  TamarindChutney,
  DateTamarindChutney,
  CucumberRaita,
  BeetrootRaita,
];
