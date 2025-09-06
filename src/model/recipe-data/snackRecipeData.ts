import { Recipe } from "../types";
import { Course, Cusine, Diet, Difficulty } from "../enums";

const SabudanaVada: Recipe = {
  categoryId: 1,
  name: "Sabudana Vada",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/sabudana-vada-3-500x500.jpg",
  description:
    "Sabudana Vada is a popular savory deep fried snack made during Hindu fasting days, featuring tapioca pearls (sago), potatoes, peanuts and herbs. They are naturally gluten-free and vegan. This fail-proof Maharashtrian style Sabudana Vada recipe gives you a super delicious crispy vada with a soft and light interior.",
  meta: {
    prepTime: 300,
    cookTime: 30,
    cuisine: Cusine.Maharashtrian,
    course: Course.Snacks,
    diet: [Diet.GlutenFree, Diet.Vegetarian],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=LLd4Yb2oR7g&pp=ygUNU2FidWRhbmEgVmFkYQ%3D%3D",
};

const SabudanaTikki: Recipe = {
  categoryId: 1,
  name: "Sabudana Tikki | Sabudana Cutlet",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/sabudana-tikki-recipe-1-500x500.jpg",
  description:
    "Sabudana tikki also known as sabudana cutlet are pan-fried thin patties made with tapioca pearls, mashed potatoes and spices. These crispy patties make for a delicious snack that will get over in no time.",
  meta: {
    prepTime: 300,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.GlutenFree, Diet.Vegetarian],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=5f1NHK4rQs0&pp=ygUOU2FidWRhbmEgdGlra2k%3D",
};

const SamaChawalIdli: Recipe = {
  categoryId: 1,
  name: "Sama Chawal Idli | Vrat Ki Idli | Vari Rice Idli",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/sama-ke-chawal-idli-recipe-1-500x500.jpg",
  description:
    "Sama Chawal Idli or Vrat Ki Idli is a unique variation to the South Indian Idli. These are made without the regular rice and lentils, but with Sama also known as Barnyard Millet in English. Thus, a perfect choice of dish for your vrats or fasts and even on regular days. A vegan, gluten free and quite a nutritious recipe.",
  meta: {
    prepTime: 540,
    cookTime: 10,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=sGUkDkAZMz4&pp=ygUQU2FtYSBDaGF3YWwgSWRsaQ%3D%3D",
};

const RoastedMakhanaRecipe: Recipe = {
  categoryId: 1,
  name: "Roasted Makhana Recipe",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/04/roasted-makhana-recipe-1-500x500.jpg",
  description:
    "Roasted Makhana is a healthy snack that is made with slow roasting/toasting phool makhana or foxnuts with spices and seasonings.",
  meta: {
    prepTime: 10,
    cookTime: 10,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=27U_zfCrtCY&pp=ygUWUm9hc3RlZCBNYWtoYW5hIFJlY2lwZQ%3D%3D",
};

const SabudanaPakoda: Recipe = {
  categoryId: 1,
  name: "Sabudana Pakoda",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/sabudana-pakora-recipe-1-500x500.jpg",
  description:
    "These Sabudana pakora made for fasting or vrat are crisp, golden fritters made from tapioca pearls, mashed potatoes and roasted crushed peanuts.",
  meta: {
    prepTime: 480,
    cookTime: 20,
    cuisine: Cusine.NorthIndian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=xCxvb2ZAZ3o&pp=ygUWc2FidWRhbmEgcGFrb2RhIHJlY2lwZQ%3D%3D",
};

const SabudanaChivda: Recipe = {
  categoryId: 1,
  name: "Sabudana Chivda | Sabudana Namkeen",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2014/09/sabudana-chiwda-recipe-1-1-500x500.jpg",
  description:
    "This Nylon sabudana chivda is a crispy and tasty fasting snack made from nylon sabudana and dry fruits for the Navratri fasts.",
  meta: {
    prepTime: 5,
    cookTime: 25,
    cuisine: Cusine.NorthIndian,
    course: Course.Snacks,
    diet: [Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=GcBBfsKQ0cU&pp=ygUPU2FidWRhbmEgQ2hpdmRh",
};

const SweetPotatoChaat: Recipe = {
  categoryId: 1,
  name: "Sweet Potato Chaat (Shakarkandi Chaat)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2016/10/sweet-potato-chaat-recipe-2-1-500x500.jpg",
  description:
    "Sweet Potato Chaat referred to as Shakarkandi Chaat is an easy chaat snack made with sweet potatoes and a few ground spice powders. This recipe requires just about 5 ingredients and can be made quickly with steamed or boiled sweet potato. Ideal for Navratri or any other Hindu religious fasts.",
  meta: {
    prepTime: 15,
    cookTime: 0,
    cuisine: Cusine.NorthIndian,
    course: Course.Snacks,
    diet: [Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=FGlTJLmYqg8&pp=ygUXU3dlZXQgUG90YXRvIENoYWF0IHZyYXQ%3D",
};

const BananaChips: Recipe = {
  categoryId: 1,
  name: "Banana Chips",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/banana-chips-recipe-1-500x500.jpg",
  description:
    "These are easy and simple homemade tasty banana chips made from raw unripe bananas.",
  meta: {
    prepTime: 15,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=_7CqPPkEwsQ&pp=ygUTYmFuYW5hIGNoaXBzIHJlY2lwZQ%3D%3D",
};

const KelekaKofta: Recipe = {
  categoryId: 1,
  name: "Kele ka Kofta | Banana Kofta",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/10/raw-banana-kofta-recipe-1-500x500.jpg",
  description:
    "Kele ka Kofta are crispy, spiced pan fried patties made with raw green unripe bananas or plantains, spices, herbs and a binding flour. A special snack that you can make during the Navratri fasting period or on any other regular day.",
  meta: {
    prepTime: 15,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=SZNE5w77oVE&pp=ygUSS2VsZSBrYSBLb2Z0YSB2cmF0",
};

const FaraliPattice: Recipe = {
  categoryId: 1,
  name: "Farali Pattice",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2010/05/farali-pattice-recipe-2-500x500.jpg",
  description:
    "Farali pattice is an easy snack of crispy and tasty patties made with potatoes and stuffed with a sweet filling of coconut, nuts and raisins. This dish is from the Gujarati cuisine that is made during fast or upvas.",
  meta: {
    prepTime: 30,
    cookTime: 30,
    cuisine: Cusine.Gujarati,
    course: Course.Snacks,
    diet: [Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=3_uZ9mWdwvw&pp=ygUORmFyYWxpIFBhdHRpY2U%3D",
};

const AlooTukRecipe: Recipe = {
  categoryId: 1,
  name: "Aloo Tuk Recipe (Sindhi Style)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2010/02/aloo-tuk-recipe-191.jpg",
  description:
    "Aloo tuk is a popular Sindhi snack of crispy, fried and spiced potato slices. The potato slices are double fried to make them extra crispy. This dish makes for a good tea time snack or a side dish with your favorite North Indian meal.",
  meta: {
    prepTime: 5,
    cookTime: 20,
    cuisine: Cusine.Sindhi,
    course: Course.Snacks,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=_SS2o2D1nYQ&pp=ygUPQWxvbyBUdWsgUmVjaXBl",
};

const RajgiraLaddu: Recipe = {
  categoryId: 1,
  name: "Rajgira Laddu (Amaranth Ladoo)",
  imageUrl:
    "https://5.imimg.com/data5/SELLER/Default/2023/1/HT/KC/IZ/135878792/rajgira-laddu-amaranth-seeds-laddu-handmade-only-no-machines-involved-.jpg",
  description:
    "Healthy and nutritious laddu made with puffed amaranth, jaggery, and ghee. These energy-rich balls are perfect for fasting and provide sustained energy throughout the day.",
  meta: {
    prepTime: 20,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=T6PnODt2LVU&pp=ygUeUmFqZ2lyYSBMYWRkdSAoQW1hcmFudGggTGFkb28p",
};

const KuttuPakoda: Recipe = {
  categoryId: 1,
  name: "Kuttu Pakoda (Buckwheat Fritters)",
  imageUrl:
    "https://spiceyandsugarybites.wordpress.com/wp-content/uploads/2016/08/img_1997.jpg",
  description:
    "Crispy and delicious fritters made with buckwheat flour and vegetables. These golden pakodas are perfect for rainy days and fasting periods.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.NorthIndian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl: "https://www.youtube.com/shorts/ERqT8RISg5s",
};

const SinghareKeTikki: Recipe = {
  categoryId: 1,
  name: "Singhare Ke Tikki (Water Chestnut Cutlets)",
  imageUrl:
    "https://static.toiimg.com/thumb/imgsize-151438,msid-94508991/94508991.jpg?width=500&resizemode=4",
  description:
    "Crispy pan-fried cutlets made with water chestnut flour and potatoes. These protein-rich tikkis are perfect as evening snacks during fasting.",
  meta: {
    prepTime: 20,
    cookTime: 15,
    cuisine: Cusine.NorthIndian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=FKqRGXPs9MU&pp=ygURU2luZ2hhcmUgS2UgVGlra2k%3D",
};

const MakhanaKheer: Recipe = {
  categoryId: 1,
  name: "Makhana Kheer (Fox Nuts Pudding)",
  imageUrl:
    "https://i0.wp.com/www.mylittlemoppet.com/wp-content/uploads/2018/12/feature-2.jpg",
  description:
    "Creamy and rich pudding made with roasted fox nuts and milk. This nutritious dessert can be enjoyed as a healthy snack during fasting.",
  meta: {
    prepTime: 10,
    cookTime: 25,
    cuisine: Cusine.NorthIndian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=CvfuUIHv3dc&t=10s&pp=ygUNTWFraGFuYSBLaGVlcg%3D%3D",
};

const FruitChaat: Recipe = {
  categoryId: 1,
  name: "Fruit Chaat (Mixed Fruit Salad)",
  imageUrl:
    "https://www.daringgourmet.com/wp-content/uploads/2024/01/Fruit-Chaat-Recipe-13.jpg",
  description:
    "Refreshing and healthy mixed fruit salad with chaat masala and lemon juice. This colorful and nutritious snack is perfect for fasting and hot weather.",
  meta: {
    prepTime: 15,
    cookTime: 0,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=9Sqtt7Ook0o&pp=ygUfRnJ1aXQgQ2hhYXQgKE1peGVkIEZydWl0IFNhbGFkKQ%3D%3D",
};

const DryFruitChikki: Recipe = {
  categoryId: 1,
  name: "Dry Fruit Chikki (Mixed Nuts Brittle)",
  imageUrl:
    "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-dryfruits-chikki-coorg-homemade.20221224001827.webp",
  description:
    "Crunchy and nutritious brittle made with mixed dry fruits and jaggery. This energy-rich snack is perfect for fasting and provides instant energy.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=zNy5E6gwj4c&pp=ygUlRHJ5IEZydWl0IENoaWtraSAoTWl4ZWQgTnV0cyBCcml0dGxlKQ%3D%3D",
};

const RoastedFoxNuts: Recipe = {
  categoryId: 1,
  name: "Roasted Fox Nuts (Masala Makhana)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/04/roasted-makhana-recipe-1.jpg",
  description:
    "Spicy and crunchy roasted fox nuts seasoned with Indian spices. This healthy and low-calorie snack is perfect for fasting and weight management.",
  meta: {
    prepTime: 5,
    cookTime: 10,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=Yo3p_FmTQbQ&pp=ygUhUm9hc3RlZCBGb3ggTnV0cyAoTWFzYWxhIE1ha2hhbmEp",
};

export const snackRecipe = [
  SabudanaVada,
  SabudanaTikki,
  SamaChawalIdli,
  RoastedMakhanaRecipe,
  SabudanaPakoda,
  SabudanaChivda,
  SweetPotatoChaat,
  BananaChips,
  KelekaKofta,
  FaraliPattice,
  AlooTukRecipe,
  RajgiraLaddu,
  KuttuPakoda,
  SinghareKeTikki,
  MakhanaKheer,
  FruitChaat,
  DryFruitChikki,
  RoastedFoxNuts,
];
