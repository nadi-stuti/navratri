import { Recipe } from "./types";
import { Course, Cusine, Diet, Difficulty } from "./enums";

const SabudanaKheer: Recipe = {
  categoryId: 3,
  name: "Sabudana Kheer",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/sabudana-kheer-recipe-1-500x500.jpg",
  description:
    "Sabudana Kheer is a sweet, creamy pudding made with tapioca pearls or sago pearls (called sabudana in Hindi), milk, sugar, nuts and flavored with cardamom & saffron. Sabudana Kheer is also a popular pick as fasting food during the Hindu Navratri festival. It is simple and easy to make, and tastes absolutely delicious.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.NorthIndian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=ZI2OecT2FMg&pp=ygUOU2FidWRhbmEgS2hlZXI%3D",
};

const MakhanekiKheer: Recipe = {
  categoryId: 3,
  name: "Makhane ki Kheer",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/09/makhane-ki-kheer-500x500.jpg",
  description:
    "Makhane ki kheer is a sweet dessert pudding made with Makhana (foxnuts), milk, ghee, sugar and dry fruits. This is an easy and popular sweet that is often made during Hindu fasting days.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.NorthIndian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=HA32jZ6UB7k&pp=ygUQTWFraGFuZSBraSBLaGVlcg%3D%3D",
};

const RajgiraKheer: Recipe = {
  categoryId: 3,
  name: "Rajgira Kheer",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/amaranth-kheer-recipe-2-500x500.jpg",
  description:
    "Rajgira kheer is a simple easy dessert pudding made with amaranth grains. Navratri recipe.",
  meta: {
    prepTime: 10,
    cookTime: 10,
    cuisine: Cusine.NorthIndian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=isade3Lx0WA&pp=ygUNUmFqZ2lyYSBLaGVlcg%3D%3D",
};

const PaneerKheer: Recipe = {
  categoryId: 3,
  name: "Paneer Kheer",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2014/09/paneer-kheer-recipe-1-500x500.jpg",
  description:
    "Paneer kheer recipe is a quick and easy Indian cottage cheese kheer for the festive season. Ready in less than 25 minutes.",
  meta: {
    prepTime: 5,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=Jo0OfB4Fz-A&pp=ygUMUGFuZWVyIEtoZWVy",
};

const laukikikheer: Recipe = {
  categoryId: 3,
  name: "Lauki ki kheer",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2016/04/lauki-kheer-recipe-2-500x500.jpg",
  description: "Delicious kheer made with bottle gourd or opo squash.",
  meta: {
    prepTime: 5,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=HvVvnKihu5g&pp=ygUObGF1a2kga2kga2hlZXI%3D",
};

const BadamKheer: Recipe = {
  categoryId: 3,
  name: "Badam Kheer",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/badam-kheer-recipe-1-500x500.jpg",
  description:
    "Badam kheer or almond payasam is a delicious creamy kheer made with blanched almond paste, milk and saffron.",
  meta: {
    prepTime: 30,
    cookTime: 35,
    cuisine: Cusine.Indian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=LrQnfRcXexY&pp=ygULQmFkYW0gS2hlZXI%3D",
};

const LaukiHalwa: Recipe = {
  categoryId: 3,
  name: "Lauki Halwa Recipe (Dudhi Halwa)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2011/11/lauki-halwa-dudhi-halwa-500x500.jpg",
  description:
    "Lauki Halwa is also called Dudhi Halwa. It is a rich Indian sweet made with bottle gourd (opo squash), milk, sugar and ghee. The method of making lauki halwa is similar to making gajar halwa. Making lauki halwa is easy but takes some time. This is a slow cooked halwa and what you get after minutes of slow cooking is super deliciousness. ",
  meta: {
    prepTime: 10,
    cookTime: 45,
    cuisine: Cusine.Indian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=MbwL4V8Zy3I&pp=ygUSTGF1a2kgSGFsd2EgUmVjaXBl",
};

const AppleHalwa: Recipe = {
  categoryId: 3,
  name: "Apple Halwa",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2012/02/apple-halwa-3-500x500.jpg",
  description:
    "Apple halwa recipe made with apples, sugar, cinnamon and vanilla. Apple halwa is a delicious halwa that is easy to make. This apple halwa does not use sooji (rava), milk, khoya or milk powder. Just apples, sugar (optional) and ghee. Flavorings and nuts of your choice can be added to the halwa. ",
  meta: {
    prepTime: 15,
    cookTime: 30,
    cuisine: Cusine.Indian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=BuuPb_I3XWI&pp=ygULQXBwbGUgSGFsd2E%3D",
};

const PapayaHalwa: Recipe = {
  categoryId: 3,
  name: "Papaya Halwa (Papaya Sweet)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/papaya-halwa-recipe-2-1-500x500.jpg",
  description:
    "Papaya Halwa is a Indian sweet or dessert made with papaya. This Papaya Sweet is prepared by slow-cooking semi-ripe papaya, sugar and almond powder in oil. With hints of lovely cardamom, it makes for tasty dessert to end your meals with.",
  meta: {
    prepTime: 10,
    cookTime: 40,
    cuisine: Cusine.Indian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=ocUAoKrBFdo&pp=ygUMUGFwYXlhIEhhbHdh",
};

const PumpkinHalwa: Recipe = {
  categoryId: 3,
  name: "Pumpkin Halwa | Kaddu Ka Halwa",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/pumpkin-halwa-recipe-1-500x500.jpg",
  description:
    "Pumpkin Halwa is called Kaddu Ka Halwa in Hindi. Subtly flavored, this halwa variant made with pumpkin along with cardamom, melon seeds and nuts – is quite easy to prepare and makes for a delightful dessert as well.",
  meta: {
    prepTime: 10,
    cookTime: 30,
    cuisine: Cusine.NorthIndian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=zCJ1qjSOgKk&pp=ygUNUHVtcGtpbiBIYWx3YQ%3D%3D",
};

const KashiHalwa: Recipe = {
  categoryId: 3,
  name: "Kashi Halwa | Dumroot Halwa | Ash Gourd Halwa",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2016/10/ash-gourd-halwa-recipe-1-500x500.jpg",
  description:
    "Kashi Halwa also called Dumroot Halwa is a unique, tasty and rich halwa made from ash gourd or white pumpkin, sugar, nuts, ghee, raisins and flavored with saffron.",
  meta: {
    prepTime: 10,
    cookTime: 30,
    cuisine: Cusine.Udupi,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=jgNvjMcXkOE&pp=ygULa2FzaGkgaGFsd2E%3D",
};

const SweetPotatoHalwa: Recipe = {
  categoryId: 3,
  name: "Sweet Potato Halwa (Shakarkandi ka Halwa)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/sweet-potato-halwa-recipe-1-500x500.jpg",
  description:
    "Sweet Potato Halwa also called Shakarkandi ka Halwa in Hindi is a delicious Indian sweet made with boiled and mashed sweet potatoes and scented with cardamom, saffron.",
  meta: {
    prepTime: 20,
    cookTime: 40,
    cuisine: Cusine.NorthIndian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=jLSIOfyooj8&pp=ygUpU3dlZXQgUG90YXRvIEhhbHdhIChTaGFrYXJrYW5kaSBrYSBIYWx3YSk%3D",
};

const BadamLaddu: Recipe = {
  categoryId: 3,
  name: "Badam Laddu | Almond Ladoo",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/badam-ladoo-recipe-2-500x500.jpg",
  description:
    "Here’s a Badam Laddu recipe that is quick, easy, tasty and made with almonds, jaggery and raisins. Make this delish Almond Ladoo the next time when you have a bag full of almonds. Use it for making these ladoos with minimal ingredients.",
  meta: {
    prepTime: 1,
    cookTime: 9,
    cuisine: Cusine.NorthIndian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=cfG9X_ohv1k&pp=ygUSYmFkYW0gbGFkZHUgcmVjaXBl",
};

const CoconutLadoo: Recipe = {
  categoryId: 3,
  name: "Coconut Ladoo Recipe | Nariyal ke Laddu",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2017/05/instant-coconut-ladoo-recipe-1-500x500.jpg",
  description:
    "Make coconut ladoo with three recipes. The first one is a quick 3 ingredient recipe made with fresh coconut, milkmaid and cardamom powder. The second recipe has 2 ingredients – desiccated coconut and condensed milk. The third recipe is made with desiccated coconut and sugar.",
  meta: {
    prepTime: 2,
    cookTime: 14,
    cuisine: Cusine.Maharashtrian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=wHNXSzKIe2Y&pp=ygUNQ29jb251dCBMYWRvbw%3D%3D",
};

const NarkelNaru: Recipe = {
  categoryId: 3,
  name: "Narkel Naru (Coconut Ladoo With Jaggery)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2017/09/gurer-narkel-naru-recipe-1-500x500.jpg",
  description:
    "Narkel Naru is a traditional sweet ladoo made with jaggery and coconut from the Bengali cuisine. These rustic ladoo can be sweetened with date palm jaggery or regular sugarcane jaggery or sugar.",
  meta: {
    prepTime: 5,
    cookTime: 10,
    cuisine: Cusine.Bengali,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=-QzDTb6tqHw&pp=ygULTmFya2VsIE5hcnU%3D",
};

const DryFruitLaddu: Recipe = {
  categoryId: 3,
  name: "Dry Fruit Laddu Recipe (Naturally Sweetened)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/dry-fruit-ladoo-recipe-2-500x500.jpg",
  description:
    "Easy Dry Fruit Laddu Recipe without any added sugar or fats like ghee or oil. Packed with nutrients, good fats and fibre, these energy balls are made with dates, figs and various nuts. This Dry Fruit Ladoo recipe gets done quickly and comes together under 20 minutes.",
  meta: {
    prepTime: 15,
    cookTime: 5,
    cuisine: Cusine.Indian,
    course: Course.Desserts,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=XehogIkn6TE&pp=ygUXIkRyeSBGcnVpdCBMYWRkdSBSZWNpcGU%3D",
};

export const sweetsRecipe = [
  SabudanaKheer,
  MakhanekiKheer,
  RajgiraKheer,
  PaneerKheer,
  laukikikheer,
  BadamKheer,
  LaukiHalwa,
  AppleHalwa,
  PapayaHalwa,
  PumpkinHalwa,
  KashiHalwa,
  SweetPotatoHalwa,
  BadamLaddu,
  CoconutLadoo,
  NarkelNaru,
  DryFruitLaddu,
];
