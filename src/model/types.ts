import { Course, Cusine, Diet, Difficulty } from "./enums";

export type RecipeCategory = {
  id: number;
  title: string;
  route: string;
  description: string;
};

export type Recipe = {
  categoryId: number;
  imageUrl: string;
  name: string;
  description: string;
  meta: RecipeMeta;
  videoUrl: string;
};

type RecipeMeta = {
  prepTime: number;
  cookTime: number;
  cuisine: Cusine;
  course: Course;
  diet: Diet[];
  diffculty: Difficulty;
};
