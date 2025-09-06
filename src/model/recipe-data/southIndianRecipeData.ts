import { Recipe } from "../types";
import { Course, Cusine, Diet, Difficulty } from "../enums";

const CoconutRice: Recipe = {
  categoryId: 5,
  name: "Coconut Rice",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe-500x500.jpg",
  description:
    "Fragrant South Indian coconut rice made with fresh coconut, curry leaves, and spices. This simple yet flavorful rice dish is perfect for Navratri fasting and can be enjoyed with pickle or yogurt.",
  meta: {
    prepTime: 10,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=MoDE9R0ZL4c&pp=ygUMQ29jb251dCBSaWNle",
};

const LemonRice: Recipe = {
  categoryId: 5,
  name: "Lemon Rice",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/lemon-rice-recipe.jpg",
  description:
    "Tangy and aromatic South Indian lemon rice seasoned with mustard seeds, curry leaves, and turmeric. This vibrant yellow rice is a popular temple offering and perfect for festive occasions.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=S582ox6c4l4&pp=ygUKTGVtb24gUmljZQ%3D%3D",
};

const TamarindRice: Recipe = {
  categoryId: 5,
  name: "Tamarind Rice (Puliyodarai)",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQML3BAz87OkVWg-Uo9AXXFnhY_B3ulSd1TgQ&s",
  description:
    "Traditional South Indian tamarind rice with a perfect balance of tangy and spicy flavors. This temple-style preparation is enhanced with roasted spices, peanuts, and curry leaves.",
  meta: {
    prepTime: 15,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=We8Kdc0cWGA&pp=ygUbVGFtYXJpbmQgUmljZSAoUHVsaXlvZGFyYWkp",
};

const CurdRice: Recipe = {
  categoryId: 5,
  name: "Curd Rice (Thayir Sadam)",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZ7_9jBNeRDAzG4LSgZxCjQp7Fy8pAaJ9dQ&s",
  description:
    "Cooling and soothing South Indian curd rice tempered with mustard seeds, curry leaves, and green chilies. This probiotic-rich dish is perfect for hot days and aids digestion.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=8EhJtAD2mqM&pp=ygUYQ3VyZCBSaWNlIChUaGF5aXIgU2FkYW0p",
};

const VegetableUpma: Recipe = {
  categoryId: 5,
  name: "Vegetable Upma",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz56a5jzthJxOipmHb26xVI1__eEPEiyqc2A&s",
  description:
    "Nutritious South Indian breakfast made with semolina and mixed vegetables. This wholesome dish is seasoned with mustard seeds, curry leaves, and ginger for authentic flavor.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=Fz20kYmUcuY&pp=ygUOVmVnZXRhYmxlIFVwbWE%3D",
};

const RavaIdli: Recipe = {
  categoryId: 5,
  name: "Rava Idli",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNic7QYnJiuaIIDGQ_pS8osrFXn1YZgb5Zg&s",
  description:
    "Soft and spongy South Indian steamed cakes made with semolina. These instant idlis are perfect for breakfast or snacks and can be prepared without fermentation.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/watch?v=dcMlG1UA-jU&pp=ygUJUmF2YSBJZGxp",
};

const MedhuVada: Recipe = {
  categoryId: 5,
  name: "Medu Vada",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/medu-vada-recipe-500x500.jpg",
  description:
    "Crispy South Indian lentil donuts made with urad dal. These golden-brown vadas are perfect with sambar and chutney, making them a popular breakfast or snack option.",
  meta: {
    prepTime: 30,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl: "https://www.youtube.com/watch?v=ygW0SxmDrMQ&pp=ygUJTWVkdSBWYWRh",
};

const PlainDosa: Recipe = {
  categoryId: 5,
  name: "Plain Dosa",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-glTW9VpM8O7nW1los6X5F9VkIOaj07rgw&s",
  description:
    "Classic South Indian crepe made from fermented rice and lentil batter. This crispy and golden dosa is a staple breakfast item served with sambar and various chutneys.",
  meta: {
    prepTime: 20,
    cookTime: 30,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=g6lJiImhSCY&pp=ygUKUGxhaW4gRG9zYQ%3D%3D",
};

const RavaUttapam: Recipe = {
  categoryId: 5,
  name: "Rava Uttapam",
  imageUrl:
    "https://cdn2.foodviva.com/static-content/food-images/breakfast-recipes/rava-uttapam/rava-uttapam.jpg",
  description:
    "Thick South Indian pancake made with semolina and topped with vegetables. This instant uttapam is crispy on the outside and soft inside, perfect for a quick meal.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/shorts/Ho6z8UdxXA0",
};

const VegetableSambar: Recipe = {
  categoryId: 5,
  name: "Vegetable Sambar",
  imageUrl:
    "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg",
  description:
    "Traditional South Indian lentil curry with mixed vegetables and tamarind. This flavorful and nutritious curry is the perfect accompaniment to rice, idli, and dosa.",
  meta: {
    prepTime: 20,
    cookTime: 30,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=mVZPR771MG0&pp=ygUWbmF2cmF0cmkgc2FtYmFyIHJlY2lwZQ%3D%3D",
};

const Rasam: Recipe = {
  categoryId: 5,
  name: "Tomato Rasam",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/tomato-rasam-1-500x500.jpg",
  description:
    "Tangy and spicy South Indian soup made with tomatoes, tamarind, and aromatic spices. This comforting rasam aids digestion and is perfect with steamed rice.",
  meta: {
    prepTime: 10,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/shorts/ALYOLAZGGh0",
};

const PotatoCurry: Recipe = {
  categoryId: 5,
  name: "South Indian Potato Curry",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/potato-curry-aloo-curry.jpg",
  description:
    "Simple and flavorful South Indian potato curry with coconut and spices. This versatile curry pairs well with rice, chapati, or can be enjoyed as a side dish.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=oGqitjsaR4k&t=174s&pp=ygUednJhdCBTb3V0aCBJbmRpYW4gUG90YXRvIEN1cnJ5",
};

const CabbagePoriyal: Recipe = {
  categoryId: 5,
  name: "Cabbage Poriyal",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdRfqwTWvCEfdpAdTm1JTO92CopIgVUMmLA&s",
  description:
    "Healthy South Indian dry vegetable preparation with cabbage, coconut, and spices. This nutritious side dish is quick to make and pairs perfectly with rice and sambar.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=24_iFNa1VaA&pp=ygUUdnJhdCBDYWJiYWdlIFBvcml5YWw%3D",
};
const VegetableKootu: Recipe = {
  categoryId: 5,
  name: "Mixed Vegetable Kootu",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgNRZvOtGGYkMJvRgaqu5HrxY3cVH5ZMMxA&s",
  description:
    "Nutritious South Indian curry made with mixed vegetables, lentils, and coconut. This mildly spiced dish is comfort food that provides complete nutrition in one bowl.",
  meta: {
    prepTime: 20,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=nB85nxCQuVU&pp=ygUadnJhdCBNaXhlZCBWZWdldGFibGUgS29vdHU%3D",
};

const VegetableAvial: Recipe = {
  categoryId: 5,
  name: "Vegetable Avial",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5PRzXPqR82DN5NV6QHHLSatQXa1VIEiyzA&s",
  description:
    "Traditional Kerala-style mixed vegetable curry with coconut and curry leaves. This festive dish combines multiple vegetables in a mildly spiced coconut gravy.",
  meta: {
    prepTime: 25,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=VbGEPCW2THE&pp=ygUUdnJhdCBWZWdldGFibGUgQXZpYWzSBwkJsgkBhyohjO8%3D",
};

const PlantainCurry: Recipe = {
  categoryId: 5,
  name: "Raw Banana Curry",
  imageUrl:
    "https://maayeka.com/wp-content/uploads/2012/05/a-raw-banana-sabji-1-of-1.jpg",
  description:
    "South Indian curry made with raw bananas in coconut-based gravy. This traditional preparation is rich in potassium and makes for a satisfying vegetarian meal.",
  meta: {
    prepTime: 15,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/shorts/Xk9GIXfG850",
};

const VratOkraFry: Recipe = {
  categoryId: 5,
  name: "Vrat Okra Fry (Fasting Vendakkai Fry)",
  imageUrl:
    "https://www.yummytummyaarthi.com/wp-content/uploads/2022/06/vendakkai-poriyal-1-500x500.jpg",
  description:
    "Crispy fasting-friendly okra stir-fry with ginger, green chilies, and rock salt. This simple yet flavorful vrat preparation brings out the best in okra without any prohibited ingredients.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=fGhIi-og5Ms&pp=ygUlVnJhdCBPa3JhIEZyeSAoRmFzdGluZyBWZW5kYWtrYWkgRnJ5KQ%3D%3D",
};

const EggplantCurry: Recipe = {
  categoryId: 5,
  name: "Eggplant Curry (Kathirikai Kuzhambu)",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPp2VQPDDgaeT5RRGcN0AajY94VpORec6gg&s",
  description:
    "Tangy South Indian eggplant curry with tamarind and spices. This flavorful curry transforms humble eggplant into a delicious and satisfying dish.",
  meta: {
    prepTime: 20,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=mXgLmo9hpjA&pp=ygUlbm8gb25pb24gZ2FybGljIChLYXRoaXJpa2FpIEt1emhhbWJ1KQ%3D%3D",
};

// Export all South Indian recipes
export const southIndianRecipe: Recipe[] = [
  CoconutRice,
  LemonRice,
  TamarindRice,
  CurdRice,
  VegetableUpma,
  RavaIdli,
  MedhuVada,
  PlainDosa,
  RavaUttapam,
  VegetableSambar,
  Rasam,
  PotatoCurry,
  CabbagePoriyal,
  VegetableKootu,
  VegetableAvial,
  PlantainCurry,
  VratOkraFry,
  EggplantCurry,
];
