import { Recipe } from "../types";
import { Course, Cusine, Diet, Difficulty } from "../enums";

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

const MangoLassi: Recipe = {
  categoryId: 4,
  name: "Mango Lassi",
  imageUrl:
    "https://www.anediblemosaic.com/wp-content/uploads//2021/09/mango-lassi-featured-image.jpg",
  description:
    "Creamy and tropical mango lassi made with ripe mangoes and yogurt. This refreshing summer drink is rich in probiotics and vitamin C.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.Beverages,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=xqir4h6rYJw&pp=ygULTWFuZ28gTGFzc2k%3D",
};

const RoseSharbat: Recipe = {
  categoryId: 4,
  name: "Rose Sharbat (Gulab Sharbat)",
  imageUrl:
    "https://www.thespruceeats.com/thmb/YraWRIqZJtEDCo9ekhtMrxbQKZ0=/4095x4095/filters:fill(auto,1)/glass-of-rose-petal-syrup--with-spoon-and-petals-on-a-plate-112708826-5a81b673fa6bcc0037adf2b2.jpg",
  description:
    "Fragrant and cooling rose syrup drink perfect for summer. This traditional Indian beverage has a beautiful pink color and aromatic rose flavor.",
  meta: {
    prepTime: 5,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.Beverages,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=Of7vnwCkuA0&pp=ygUcUm9zZSBTaGFyYmF0IChHdWxhYiBTaGFyYmF0KQ%3D%3D",
};

const LemonJuice: Recipe = {
  categoryId: 4,
  name: "Fresh Lemon Juice (Nimbu Paani)",
  imageUrl:
    "https://www.seriouseats.com/thmb/Lkr5DnY7jNP2aP5DS3d5qE0PEkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200816-nimbu-soda-vicky-wasik-1-28079d5d45ee4e47a37a969d1e4834a0.jpg",
  description:
    "Refreshing and tangy lemon juice with mint and black salt. This hydrating drink is perfect for hot weather and helps with digestion.",
  meta: {
    prepTime: 5,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.Beverages,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/shorts/ME8UvEhF3kU",
};

const ThandalSharbat: Recipe = {
  categoryId: 4,
  name: "Thandai Sharbat",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWpOpq2JJv57LgIigMzKyOOcN8TRdRSDnew&s",
  description:
    "Traditional cooling drink made with nuts, seeds, and aromatic spices. This festive beverage is perfect for Holi and hot summer days.",
  meta: {
    prepTime: 30,
    cookTime: 0,
    cuisine: Cusine.NorthIndian,
    course: Course.Beverages,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=d3nJEn1-N4U&pp=ygUWdGhhbmRhaSBzaGFyYmF0IHJlY2lwZQ%3D%3D",
};

const JalJeera: Recipe = {
  categoryId: 4,
  name: "Jal Jeera",
  imageUrl:
    "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2017/03/how-to-make-jaljeera.jpg?w=1200&ssl=1",
  description:
    "Spicy and tangy cumin-flavored drink with mint and tamarind. This digestive drink is perfect for summer and helps cool the body naturally.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.NorthIndian,
    course: Course.Beverages,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/watch?v=J7UDjNVxUFw&pp=ygUJSmFsIEplZXJh",
};

const AamPanna: Recipe = {
  categoryId: 4,
  name: "Aam Panna (Raw Mango Drink)",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwL1lsZqOX-6uhwc4lvrniuN-X7B881xBZA&s",
  description:
    "Traditional summer cooler made with raw mangoes, mint, and spices. This tangy drink helps prevent heat stroke and is rich in vitamin C.",
  meta: {
    prepTime: 15,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Beverages,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=42t12JMA37c&pp=ygUbQWFtIFBhbm5hIChSYXcgTWFuZ28gRHJpbmsp",
};

const SattuDrink: Recipe = {
  categoryId: 4,
  name: "Sattu Drink (Sattu Sharbat)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2016/05/sattu-ka-sharbat-recipe-1.jpg",
  description:
    "Protein-rich drink made with roasted gram flour, lemon, and spices. This nutritious beverage is popular in Bihar and provides sustained energy.",
  meta: {
    prepTime: 10,
    cookTime: 0,
    cuisine: Cusine.NorthIndian,
    course: Course.Beverages,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=5dnHF8_XajE&pp=ygUic2F0dHUgZHJpbmsgKHNhdHR1IHNoYXJiYXQpIHJlY2lwZQ%3D%3D",
};

export const beveragesRecipe = [
  LassiRecipe,
  DryFruitMilkshake,
  BananaMilkshakeRecipe,
  StrawberryMilkshake,
  AppleMilkshake,
  MintJuice,
  FruitPunch,
  MangoLassi,
  RoseSharbat,
  LemonJuice,
  ThandalSharbat,
  JalJeera,
  AamPanna,
  SattuDrink,
];
