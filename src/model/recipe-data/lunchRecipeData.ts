import { Recipe } from "../types";
import { Course, Cusine, Diet, Difficulty } from "../enums";

const SabudanaKhichdi: Recipe = {
  categoryId: 0,
  name: "Sabudana Khichdi",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2023/02/sabudana-khichdi-3-500x500.jpg",
  description:
    "Sabudana Khichdi is a delicious preparation of tapioca pearls (sago) made with potatoes, peanuts, a few spices and usually had during Hindu fasting days like Navratri, Ekadashi, Mahashivratri. It is also a gluten-free recipe. Make the best non-sticky Sabudana ki Khichdi with my recipe.",
  meta: {
    prepTime: 20,
    cookTime: 5,
    cuisine: Cusine.Maharashtrian,
    course: Course.Snacks,
    diet: [Diet.GlutenFree, Diet.Vegetarian],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=SE4Dc0XyhV8&pp=ygUPU2FidWRhbmFLaGljaGRp",
};

const Samachawalkhichdi: Recipe = {
  categoryId: 0,
  name: "Sama Chawal khichdi",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/samvat-rice-khichdi-1b-500x500.jpg",
  description:
    "Samvat rice khichdi recipe - savory porridge made with barnyard millet and potatoes.",
  meta: {
    prepTime: 60,
    cookTime: 35,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.GlutenFree, Diet.Vegetarian],
    diffculty: Difficulty.Difficult,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=HizT5pMhnfU&pp=ygUTU2FtYSBDaGF3YWwga2hpY2hkaQ%3D%3D",
};

const KuttuKhichdi: Recipe = {
  categoryId: 0,
  name: "Kuttu ki Khichdi | Buckwheat Khichdi",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2014/04/kuttu-ki-khichdi-recipe-1-500x500.jpg",
  description:
    "Buckwheat Khichdi is easy to prepare khichdi with buckwheat groats (kuttu), potatoes and peanuts for Navratri fasting. Wholesome super food.",
  meta: {
    prepTime: 15,
    cookTime: 15,
    cuisine: Cusine.Maharashtrian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=2w2OXrtj_SA&pp=ygUMS3V0dHVLaGljaGRp",
};

const SamakRicePulao: Recipe = {
  categoryId: 0,
  name: "Samak Rice Pulao (Barnyard Millet Recipe)",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/vrat-ke-chawal-recipe-35-1-500x500.jpg",
  description:
    "Samak Rice Pulao is a simple, healthy and tasty pulao made during Hindu fasting days like Navratri and Ekadashi. Also known as samak/sama/samvat/samo/bhagar and Barnyard Millet in English, this is a popular ingredient used in dishes that are made during the religious fasting days in India.",
  meta: {
    prepTime: 30,
    cookTime: 15,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=zRRMhURQ3P0&pp=ygUQU2FtYWsgUmljZSBQdWxhbw%3D%3D",
};

const SabudanaThalipeeth: Recipe = {
  categoryId: 0,
  name: "Sabudana Thalipeeth",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/04/sabudana-thalipeeth-recipe-1-500x500.jpg",
  description:
    "Sabudana Thalipeeth are crispy and soft pancakes made with tapioca pearls (sago), mashed potatoes, ground peanuts, herbs and spices. They are also called as Upvasache Thalipeeth in Marathi language and can also be referred to as Sabudana Roti.",
  meta: {
    prepTime: 480,
    cookTime: 30,
    cuisine: Cusine.Maharashtrian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=DZxZQV3hZ7w&pp=ygUTU2FidWRhbmEgVGhhbGlwZWV0aA%3D%3D",
};

const RajgiraParatha: Recipe = {
  categoryId: 0,
  name: "Rajgira Roti | Amaranth Paratha",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/amarnath-paratha-recipe-1-500x500.jpg",
  description:
    "Rajgira paratha is a healthy gluten-free flatbread made with amaranth flour (known as rajgira atta in Hindi), mashed potatoes and seasonings. Usually these rajgira roti or paratha are made during fasting or vrat days. Rajgira is one of the commonly used ingredients for Hindu religious fasting.",
  meta: {
    prepTime: 20,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.Vegan, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=AQ4evTvZtEg&pp=ygUfUmFqZ2lyYSBSb3RpIHwgQW1hcmFudGggUGFyYXRoYQ%3D%3D",
};

const KuttukaParatha: Recipe = {
  categoryId: 0,
  name: "Kuttu ka Paratha",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/kuttu-ka-paratha-recipe-1-500x500.jpg",
  description:
    "Kuttu ki roti or paratha are gluten free flatbreads made with buckwheat flour and mashed potatoes. These healthy flatbreads are usually made during the Navratri fasting period in India.",
  meta: {
    prepTime: 10,
    cookTime: 30,
    cuisine: Cusine.NorthIndian,
    course: Course.SideDish,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=a3QPjHjwoP4&pp=ygUQS3V0dHUga2EgUGFyYXRoYQ%3D%3D",
};

const SinghareKiPuri: Recipe = {
  categoryId: 0,
  name: "Singhare Ki Puri",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/singhare-ki-poori-recipe-1-500x500.jpg",
  description:
    "Singhare ki Puri is a delicious Indian fried bread made with water chestnut flour, mashed potatoes, edible rock salt and a few spices.",
  meta: {
    prepTime: 25,
    cookTime: 25,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Difficult,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=cYIKN5BdlLo&pp=ygUQU2luZ2hhcmUgS2kgUHVyaQ%3D%3D",
};

const KuttukiPoori: Recipe = {
  categoryId: 0,
  name: "Kuttu ki Poori",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2017/09/kuttu-ki-poori-recipe-1b-500x500.jpg",
  description:
    "Rajgira Poori or Amaranth Poori are deep fried puffy breads made from amaranth flour, boiled mashed potatoes and edible rock salt. It also happens to be naturally gluten-free and vegan. Amaranth flour or seeds are usually eaten during the Hindu fasting or vrat season in India.",
  meta: {
    prepTime: 15,
    cookTime: 15,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=ULDTBgh1D5c&pp=ygUOS3V0dHUga2kgUG9vcmk%3D",
};

const RajgiraPuri: Recipe = {
  categoryId: 0,
  name: "Rajgira Puri | Amaranth Puri",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/rajgira-ki-poori-recipe-2-500x500.jpg",
  description:
    "Rajgira Poori or Amaranth Poori are deep fried puffy breads made from amaranth flour, boiled mashed potatoes and edible rock salt. It also happens to be naturally gluten-free and vegan. Amaranth flour or seeds are usually eaten during the Hindu fasting or vrat season in India.",
  meta: {
    prepTime: 25,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=ULDTBgh1D5c&pp=ygUOS3V0dHUga2kgUG9vcmk%3D",
};

const VratkiKadhi: Recipe = {
  categoryId: 0,
  name: "Vrat ki Kadhi | Rajgira Kadhi for Fasting | Farali Kadhi",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/vrat-ki-kadhi-recipe-1-1-500x500.jpg",
  description:
    "Easy and quick to prepare rajgira kadhi for Navratri fasting or upwas.",
  meta: {
    prepTime: 3,
    cookTime: 12,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=XM8_mMydnkM&pp=ygUOVnJhdCBraSBLYWRoaSA%3D",
};

const ArbiCurry: Recipe = {
  categoryId: 0,
  name: "Arbi Curry | Arbi Masala",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2012/10/arbi-curry-recipe-1-500x500.jpg",
  description:
    "Arbi Curry or Arbi Masala is a light North Indian style curry made with colocasia or taro roots in a base of pureed tomatoes, spices and herbs.",
  meta: {
    prepTime: 20,
    cookTime: 15,
    cuisine: Cusine.Punjabi,
    course: Course.SideDish,
    diet: [Diet.GlutenFree, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=XM8_mMydnkM&pp=ygUOVnJhdCBraSBLYWRoaSA%3D",
};

const KaddukiSabji: Recipe = {
  categoryId: 0,
  name: "Kaddu ki Sabji",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2011/09/kaddu-ki-sabzi-recipe-1a-1-500x500.jpg",
  description:
    "Kaddu ki Sabji is an easy and delicious vegan pumpkin recipe made with yellow pumpkin, spices and herbs. This is a North Indian style satvik recipe made without onions and garlic.",
  meta: {
    prepTime: 20,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=mqzPkVrO5sQ&pp=ygUUS2FkZHUga2kgU2FiamkgIHZyYXQ%3D",
};

const AlookiSabji: Recipe = {
  categoryId: 0,
  name: "Easy Aloo ki Sabji | Satvik Aloo Tamatar Ki Sabji",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/aloo-tamatar-sabzi-recipe-1-500x500.jpg",
  description:
    "Aloo ki Sabji or Aloo Tamatar Ki Sabji is an easy to make lightly spiced gravy featuring potatoes, tomatoes, a few spices and herbs. A satvik recipe made without onion and garlic.",
  meta: {
    prepTime: 20,
    cookTime: 10,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=oGqitjsaR4k&pp=ygUcU2F0dmlrIEFsb28gVGFtYXRhciBLaSBTYWJqaQ%3D%3D",
};

const ArbiSabji: Recipe = {
  categoryId: 0,
  name: "Arbi Sabji | Arbi Recipe | Ghuiya Ki Sabji",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2012/02/sukhi-arbi-recipe-1-500x500.jpg",
  description:
    "Crispy, perfectly spiced and tasty Arbi Recipe made with Taro Roots (also called Arbi and Ghuiya in Hindi), a few spices and herbs. This Arbi Sabji is an easy way you can have a variation in your everyday meals.",
  meta: {
    prepTime: 30,
    cookTime: 30,
    cuisine: Cusine.NorthIndian,
    course: Course.Starter,
    diet: [Diet.Vegan],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=vPwMeXn5qP0&pp=ygUUR2h1aXlhIEtpIFNhYmppIHZyYXQ%3D",
};

const SamakRiceKheer: Recipe = {
  categoryId: 0,
  name: "Samak Rice Kheer",
  imageUrl:
    "https://www.sharmispassions.com/wp-content/uploads/2020/12/43489149570_a03c4370ac_o.jpg",
  description:
    "Creamy and delicious kheer made with barnyard millet (samak rice), milk, and jaggery. This nutritious dessert is perfect for fasting days and provides sustained energy.",
  meta: {
    prepTime: 10,
    cookTime: 30,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=rbQrZw1_WtE&pp=ygUXc2FtYWsgcmljZSBraGVlciByZWNpcGU%3D",
};

const KuttuDosa: Recipe = {
  categoryId: 0,
  name: "Kuttu Dosa (Buckwheat Dosa)",
  imageUrl:
    "https://foodtrails25.com/wp-content/uploads/2020/10/Kuutu-Sama-Rice-Dosa.jpg",
  description:
    "Healthy and gluten-free dosa made with buckwheat flour and potatoes. This crispy crepe is perfect for Navratri fasting and can be served with coconut chutney.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=lo8LV4DskOc&pp=ygUKa3V0dHUgZG9zYQ%3D%3D",
};

const RajgiraChilla: Recipe = {
  categoryId: 0,
  name: "Rajgira Chilla (Amaranth Pancake)",
  imageUrl:
    "https://zoconut-static.s3.ap-south-1.amazonaws.com/Practice/138001/artifacts/recipes/WhatsAppImage2024-11-18at6.22.38PM_1731934425_997006.jpeg",
  description:
    "Nutritious and protein-rich pancakes made with amaranth flour and vegetables. These savory pancakes are perfect for breakfast or light dinner during fasting.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=vHjeet2BDd4&pp=ygUOUmFqZ2lyYSBDaGlsbGE%3D",
};

const SinghareKaHalwa: Recipe = {
  categoryId: 0,
  name: "Singhare Ka Halwa",
  imageUrl:
    "https://images.herzindagi.info/image/2019/Sep/singhare-atte-ka-halwa-tasty-healthy-main.jpg",
  description:
    "Rich and aromatic halwa made with water chestnut flour, ghee, and milk. This traditional sweet dish is commonly prepared during Navratri fasting.",
  meta: {
    prepTime: 10,
    cookTime: 25,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "hhttps://www.youtube.com/watch?v=qf1QUqFTuHA&pp=ygURU2luZ2hhcmUgS2EgSGFsd2E%3D",
};

const VratWaliMaggi: Recipe = {
  categoryId: 0,
  name: "Vrat Wali Maggi (Fasting Noodles)",
  imageUrl: "https://i.timesnowhindi.com/stories/Vegetable_Masala_Maggi.jpg",
  description:
    "Special fasting-friendly noodles made with vegetables. This quick and tasty meal is perfect when you want something different during fasting days.",
  meta: {
    prepTime: 15,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl: "https://www.youtube.com/watch?v=gpcNlVHRw8w",
};

const SamakRiceBiryani: Recipe = {
  categoryId: 0,
  name: "Samak Rice Pulao",
  imageUrl:
    "https://www.cookwithkushi.com/wp-content/uploads/2021/08/samak_chawal_samo_rice_khichdi.jpg",
  description:
    "Fragrant and flavorful pulao made with barnyard millet and vegetables. This festive dish brings the taste of traditional biryani to your fasting menu.",
  meta: {
    prepTime: 30,
    cookTime: 40,
    cuisine: Cusine.NorthIndian,
    course: Course.MainCourse,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Difficult,
  },
  videoUrl: "https://www.youtube.com/shorts/p0KJADU389w",
};

export const lunchRecipe = [
  SabudanaKhichdi,
  Samachawalkhichdi,
  KuttuKhichdi,
  SamakRicePulao,
  SabudanaThalipeeth,
  RajgiraParatha,
  KuttukaParatha,
  SinghareKiPuri,
  KuttukiPoori,
  RajgiraPuri,
  VratkiKadhi,
  ArbiCurry,
  KaddukiSabji,
  AlookiSabji,
  ArbiSabji,
  SamakRiceKheer,
  KuttuDosa,
  RajgiraChilla,
  SinghareKaHalwa,
  VratWaliMaggi,
  SamakRiceBiryani,
];
