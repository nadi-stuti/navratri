import { Recipe } from "./types";
import { Course, Cusine, Diet, Difficulty } from "./enums";

const LassiRecipe: Recipe = {
  categoryId: 4,
  name: "Lassi Recipe",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/lassi-recipe-3-500x500.jpg",
  description:
    "Lassi is a cooling, refreshing, probiotic drink perfect for the warm summer months made essentially with curd or yogurt, fragrant spices and sugar or salt. Popular in Punjab and North India, there are many variations of this sweet lassi recipe. Find three easy, energizing and flavorful lassi recipe variations.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Punjabi,
    course: Course.Beverages,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=g4As2DDoUVI&pp=ygUMTGFzc2kgUmVjaXBl",
};

const DryFruitMilkshake: Recipe = {
  categoryId: 4,
  name: "Dry Fruit Milkshake Recipe (Energizing)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/dry-fruits-milkshake-recipe-1-500x500.jpg",
  description:
    "Healthy, refreshing, and energy-boosting, this dry fruit milkshake recipe is the perfect beverage to give you a quick boost throughout the day! It includes dried fruits, nuts, and plant-based milk making it a great gluten-free and vegan option.",
  meta: {
    prepTime: 35,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.Beverages,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=6bR2gY-a9VY&pp=ygUTRHJ5IEZydWl0IE1pbGtzaGFrZQ%3D%3D",
};

const BananaMilkshakeRecipe: Recipe = {
  categoryId: 4,
  name: "Banana Milkshake Recipe | Wholesome Banana Shake",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/banana-milkshake-5-500x500.jpg",
  description:
    "This banana milkshake recipe includes sweet bananas and coconut milk for a rich and creamy consistency that everyone (especially kids) will love. Plus we add a bit of vanilla and cinnamon for an extra delicious drink.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.World,
    course: Course.Beverages,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/shorts/FQ-v2-JWP6Q",
};

const StrawberryMilkshake: Recipe = {
  categoryId: 4,
  name: "Strawberry Milkshake Recipe (Classic & Plant Based)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/strawberry-milkshake-4-500x500.jpg",
  description:
    "A sweet and refreshing strawberry shake is the perfect drink for summer. Here I share with you two different but equally delicious ways to make my favorite strawberry milkshake recipe – a classic shake prepared with milk, and a plant-based vegan version made with almond milk.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.World,
    course: Course.Beverages,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=JU-LFi7tD88&pp=ygUbU3RyYXdiZXJyeSBNaWxrc2hha2UgUmVjaXBl",
};

const AppleMilkshake: Recipe = {
  categoryId: 4,
  name: "Apple Milkshake",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/apple-milkshake-recipe-1-500x500.jpg",
  description:
    "Apple Milkshake is a quick and easy beverage that can be made for breakfast or as quick snack. This Apple Shake recipe is made with almond milk and can easily be made with any other plant based milk.",
  meta: {
    prepTime: 15,
    cookTime: 0,
    cuisine: Cusine.World,
    course: Course.Beverages,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=9q8T8kDmnvo&pp=ygUWYXBwbGUgbWlsa3NoYWtlIHJlY2lwZQ%3D%3D",
};

const MintJuice: Recipe = {
  categoryId: 4,
  name: "Mint Juice",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2012/06/pudina-juice-recipe-1-500x500.jpg",
  description:
    "Mint Juice or Pudina Juice is a healthy and refreshing drink for summers made from fresh mint leaves and lemon.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.Beverages,
    diet: [Diet.Vegan],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=jXvjzVUD6T0&pp=ygUKTWludCBKdWljZQ%3D%3D",
};

const FruitPunch: Recipe = {
  categoryId: 4,
  name: "Fruit Punch Recipe | Fruit Punch Mocktail",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2018/04/fruit-punch-recipe-1-500x500.jpg",
  description:
    "Sweet, refreshing, and free of any artificial ingredients, this Fruit Punch recipe is a favorite with kids and adults alike. Learn how to make Fruit Punch Mocktail drink at home in just 15 minutes with this simple, versatile, and delicious recipe!",
  meta: {
    prepTime: 15,
    cookTime: 0,
    cuisine: Cusine.World,
    course: Course.Beverages,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=lLss9_DS3Ys&pp=ygUTRnJ1aXQgUHVuY2ggUmVjaXBlIA%3D%3D",
};

export const beveragesRecipe = [
  LassiRecipe,
  DryFruitMilkshake,
  BananaMilkshakeRecipe,
  StrawberryMilkshake,
  AppleMilkshake,
  MintJuice,
  FruitPunch,
];
