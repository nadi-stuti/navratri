import { Recipe } from "../types";
import { Course, Cusine, Diet, Difficulty } from "../enums";

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
  name: "Vrat Beetroot Raita",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2010/06/beetroot-carrot-raita-recipe-12a-500x500.jpg",
  description:
    "Vrat-friendly beetroot raita made with healthy beets, carrots, rock salt, and yogurt. This colorful and nutritious side dish is perfect for fasting days and adds vibrant color to your meal.",
  meta: {
    prepTime: 15,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=ZKt734DAnB0&pp=ygUTdnJhdCBiZWV0cm9vdCByYWl0YdIHCQmyCQGHKiGM7w%3D%3D",
};

const MintChutney: Recipe = {
  categoryId: 2,
  name: "Mint Chutney (Pudina Chutney)",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mint-chutney-pudina-chutney.jpg",
  description:
    "Fresh and aromatic mint chutney made with mint leaves, coriander, and green chilies. This vibrant green chutney is perfect with snacks and main meals.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=f0tBXM8Fdu8&pp=ygUeIk1pbnQgQ2h1dG5leSAoUHVkaW5hIENodXRuZXkp",
};

const CorianderChutney: Recipe = {
  categoryId: 2,
  name: "Coriander Chutney (Dhania Chutney)",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/cilantro-chutney-recipe-500x375.jpg",
  description:
    "Fresh and zesty coriander chutney with coconut and green chilies. This South Indian style chutney pairs perfectly with dosa, idli, and rice dishes.",
  meta: {
    prepTime: 10,
    cookTime: 5,
    cuisine: Cusine.SouthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=sqal39B9CV4&pp=ygUiQ29yaWFuZGVyIENodXRuZXkgKERoYW5pYSBDaHV0bmV5KQ%3D%3D",
};

const CoconutChutney: Recipe = {
  categoryId: 2,
  name: "Coconut Chutney (Nariyal Chutney)",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/coconut-chutney-recipe.jpg",
  description:
    "Classic South Indian coconut chutney with green chilies and ginger. This creamy white chutney is the perfect accompaniment to South Indian breakfast items.",
  meta: {
    prepTime: 10,
    cookTime: 5,
    cuisine: Cusine.SouthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=xLE_BZ_2JoI&pp=ygUiQ29jb251dCBDaHV0bmV5IChOYXJpeWFsIENodXRuZXkpIg%3D%3D",
};

const PeanutChutney: Recipe = {
  categoryId: 2,
  name: "Peanut Chutney (Moongfali Chutney)",
  imageUrl:
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/peanut-chutney-ground-nut-chutney.jpg",
  description:
    "Protein-rich peanut chutney with tamarind and spices. This nutty and tangy chutney is popular in South Indian cuisine and pairs well with rice and snacks.",
  meta: {
    prepTime: 10,
    cookTime: 10,
    cuisine: Cusine.SouthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=hUud-bL3AvI&pp=ygUTUGVhbnV0IENodXRuZXkgdnJhdA%3D%3D",
};

const TomatoChutney: Recipe = {
  categoryId: 2,
  name: "Vrat Tomato Chutney (Fasting Tamatar Chutney)",
  imageUrl: "https://www.subbuskitchen.com/wp-content/uploads/2017/01/0-13.jpg",
  description:
    "Tangy and spicy fasting-friendly tomato chutney made with tomatoes, green chilies, ginger, and rock salt. This versatile chutney is perfect for vrat days and pairs well with kuttu roti and other fasting foods.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=ZcX-IBd7YQI&pp=ygUTVnJhdCBUb21hdG8gQ2h1dG5leQ%3D%3D",
};

const VratMintRaita: Recipe = {
  categoryId: 2,
  name: "Vrat Mint Raita (Pudina Raita)",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_s9oSyLa3dZjYRmiPa2-WN-QRLK6uPUKiPg&s",
  description:
    "Refreshing and cooling mint raita made with fresh mint leaves, yogurt, and rock salt. This aromatic side dish is perfect for fasting days and helps balance spicy meals while aiding digestion.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=jUB0Et6FC3o&pp=ygUPVnJhdCBNaW50IFJhaXRh",
};

const MixedVegetableRaita: Recipe = {
  categoryId: 2,
  name: "Mixed Vegetable Raita",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcys7gMCza_GKbAR6hUj8UnR7XfXE2M3oLXg&s",
  description:
    "Colorful and nutritious raita with mixed vegetables and yogurt. This healthy side dish adds crunch and freshness to any Indian meal.",
  meta: {
    prepTime: 15,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/shorts/zPp01ap6b_g",
};

const BoondiRaita: Recipe = {
  categoryId: 2,
  name: "Boondi Raita",
  imageUrl:
    "https://www.indianveggiedelight.com/wp-content/uploads/2020/11/boondi-raita-featured.jpg",
  description:
    "Traditional North Indian raita with crispy boondi pearls and yogurt. This textural delight adds a festive touch to any meal.",
  meta: {
    prepTime: 15,
    cookTime: 0,
    cuisine: Cusine.NorthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=ZXfTacJh10s&pp=ygURVnJhdCBCb29uZGkgUmFpdGE%3D",
};

const PomegranateRaita: Recipe = {
  categoryId: 2,
  name: "Pomegranate Raita (Anar Raita)",
  imageUrl:
    "https://spicyvegrecipes.com/media/2023/04/Anar-Raitapic-scaled.jpg",
  description:
    "Sweet and tangy raita with pomegranate seeds and yogurt. This antioxidant-rich side dish adds color and nutrition to your meal.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=8Fy7RLHKDho&pp=ygUeUG9tZWdyYW5hdGUgUmFpdGEgKEFuYXIgUmFpdGEp",
};

const PineappleRaita: Recipe = {
  categoryId: 2,
  name: "Pineapple Raita (Ananas Raita)",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpzXip6l-lNW8W0j6JeFntotoaO1hVmIrRg&s",
  description:
    "Sweet and tropical pineapple raita with yogurt and mint. This refreshing side dish brings a burst of tropical flavor to Indian meals.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.SouthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=lSrSupptby0&pp=ygUeUGluZWFwcGxlIFJhaXRhIChBbmFuYXMgUmFpdGEp",
};

const GreenChutney: Recipe = {
  categoryId: 2,
  name: "Green Chutney (Hari Chutney)",
  imageUrl:
    "https://c.ndtvimg.com/2024-06/jfgbd8co_green-chutney-or-hari-chutney-with-coriander-or-dhaniya_625x300_10_June_24.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384",
  description:
    "Spicy and tangy green chutney with mint, coriander, and green chilies. This versatile chutney is perfect for chaat, sandwiches, and snacks.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/shorts/UE5wyshrVro",
};

const VratRedChutney: Recipe = {
  categoryId: 2,
  name: "Vrat Red Chutney (Fasting Lal Chutney)",
  imageUrl:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgumG769BuYdDN04yp2VItu3mHQkkxCPeW7jS9xf92z-YEcpnDpIRoqPMLefmub9q_X-6TNzW_yuNWX7TCqVapTWBgeuw_w1CNAQnzGLwjwAholS7yz00HGBA8xG6QNP6gPBqwF14h2bJpw/s1600/IMG_8088.JPG",
  description:
    "Spicy fasting red chutney made with red chilies, ginger, tamarind, and rock salt. This fiery vrat-friendly condiment is perfect for adding heat to your fasting meals without using prohibited ingredients.",
  meta: {
    prepTime: 15,
    cookTime: 10,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://maayeka.com/2023/12/red-chili-chutney-laal-mirch-chutney.html",
};

const CarrotRaita: Recipe = {
  categoryId: 2,
  name: "Carrot Raita (Gajar Raita)",
  imageUrl:
    "https://images.picxy.com/cache/2020/7/10/a17bd43ed14942255befaec7731acfff.jpg",
  description:
    "Sweet and crunchy carrot raita with yogurt and spices. This colorful and nutritious side dish is rich in beta-carotene and vitamins.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=f0OjqioMuaY&pp=ygUbQ2Fycm90IFJhaXRhIChHYWphciBSYWl0YSki",
};

const SpinachRaita: Recipe = {
  categoryId: 2,
  name: "Spinach Raita (Palak Raita)",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtvxdO7Xwy5neRhCJ3HNAFMjmR-vWtDpMqw&s",
  description:
    "Healthy and iron-rich spinach raita with yogurt and spices. This green and nutritious side dish is perfect for boosting your daily vegetable intake.",
  meta: {
    prepTime: 15,
    cookTime: 5,
    cuisine: Cusine.Indian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=gaUMbLAGJNw&pp=ygUbU3BpbmFjaCBSYWl0YSAoUGFsYWsgUmFpdGEp",
};

const RadishRaita: Recipe = {
  categoryId: 2,
  name: "Radish Raita (Mooli Raita)",
  imageUrl:
    "https://images.archanaskitchen.com/images/recipes/indian/side-dishes/indian-raita-recipes/Mooli_Raita_Recipe_Spiced_Yogurt_Salad_with_Radish_1_2_e9b4c0f56c.jpg",
  description:
    "Crisp and refreshing radish raita with yogurt and mint. This cooling side dish has a slight peppery bite and aids digestion.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.NorthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=01Yba4BEZ2o&pp=ygUOIChNb29saSBSYWl0YSk%3D",
};

const SesameChutney: Recipe = {
  categoryId: 2,
  name: "Sesame Chutney (Til Chutney)",
  imageUrl:
    "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/d965a17e-28c3-4679-95a7-3d11ae82f3a0/til-chutney.jpg",
  description:
    "Nutty and flavorful sesame chutney with tamarind and spices. This South Indian specialty is rich in calcium and healthy fats.",
  meta: {
    prepTime: 10,
    cookTime: 10,
    cuisine: Cusine.SouthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=AAM6T3-1wGE&pp=ygUcU2VzYW1lIENodXRuZXkgKFRpbCBDaHV0bmV5KQ%3D%3D",
};

export const chutneyRecipe = [
  TamarindChutney,
  DateTamarindChutney,
  CucumberRaita,
  BeetrootRaita,
  MintChutney,
  CorianderChutney,
  CoconutChutney,
  PeanutChutney,
  TomatoChutney,
  VratMintRaita,
  MixedVegetableRaita,
  BoondiRaita,
  PomegranateRaita,
  PineappleRaita,
  GreenChutney,
  VratRedChutney,
  CarrotRaita,
  SpinachRaita,
  RadishRaita,
  SesameChutney,
];
