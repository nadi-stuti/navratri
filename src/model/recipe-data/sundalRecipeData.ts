import { Recipe } from "../types";
import { Course, Cusine, Diet, Difficulty } from "../enums";

const ChanaSundal: Recipe = {
  categoryId: 6,
  name: "Chana Sundal",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/chana-sundal-recipe-1-500x375.jpg",
  description:
    "Traditional South Indian dry preparation made with white chickpeas, coconut, and spices. Perfect for Navratri fasting and festivals. This protein-rich sundal is seasoned with mustard seeds, curry leaves, and fresh coconut.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=xhdUxsXFaoo&pp=ygUMQ2hhbmEgU3VuZGFs",
};

const MoongDalSundal: Recipe = {
  categoryId: 6,
  name: "Moong Dal Sundal",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLPRqksolosB2n0dfnmo9DYGa_3r3QadR5A&s",
  description:
    "Nutritious and protein-rich sundal made with green moong dal, perfect for evening snacks and festival offerings. This healthy preparation is easy to digest and packed with nutrients.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=o9vCpFbsDmw&pp=ygUQTW9vbmcgRGFsIFN1bmRhbA%3D%3D",
};

const BlackEyedPeasSundal: Recipe = {
  categoryId: 6,
  name: "Black Eyed Peas Sundal",
  imageUrl:
    "https://aahaaramonline.com/wp-content/uploads/2022/08/Karamani_Sundal_Lobia_Sundal-1024x683.jpg",
  description:
    "Delicious and healthy sundal made with black-eyed peas, coconut, and aromatic spices. Rich in protein and fiber, this sundal is perfect for festivals and fasting days.",
  meta: {
    prepTime: 15,
    cookTime: 20,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=xOUDGT2pTbw&pp=ygUWQmxhY2sgRXllZCBQZWFzIFN1bmRhbA%3D%3D",
};

const PeanutSundal: Recipe = {
  categoryId: 6,
  name: "Peanut Sundal",
  imageUrl:
    "https://aahaaramonline.com/wp-content/uploads/2015/08/Verkadalai_Sundal_Palli_Guggillu_Verusenaga_Guggillu-1024x683.jpg",
  description:
    "Crunchy and flavorful sundal made with roasted peanuts, perfect for evening snacks. This protein and healthy fat-rich preparation is loved by all age groups.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=R-53kMFUUPE&pp=ygUNUGVhbnV0IFN1bmRhbA%3D%3Dl",
};

const SweetCornSundal: Recipe = {
  categoryId: 6,
  name: "Sweet Corn Sundal",
  imageUrl:
    "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/babitha-costa147576311857f65bad530b8.jpeg",
  description:
    "Sweet and colorful sundal made with fresh corn kernels, loved by kids and adults alike. This vibrant preparation adds color and nutrition to your festival spread.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=_hyLiCk4uAw&pp=ygURU3dlZXQgQ29ybiBTdW5kYWzSBwkJsgkBhyohjO8%3D",
};

const RajmaSundal: Recipe = {
  categoryId: 6,
  name: "Rajma Sundal",
  imageUrl:
    "https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/rajma-sundal-recipe-1.jpg",
  description:
    "Protein-packed sundal made with kidney beans, perfect for a nutritious snack. This filling and healthy preparation is ideal for those looking for substantial nutrition.",
  meta: {
    prepTime: 15,
    cookTime: 25,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=DLTJn5bmWGo&pp=ygUMUmFqbWEgU3VuZGFs",
};

const GreenPeasSundal: Recipe = {
  categoryId: 6,
  name: "Green Peas Sundal",
  imageUrl:
    "https://images.archanaskitchen.com/images/recipes/snack-recipes/indian-snack-recipes/Pattani_Sundal_Green_Peas_Sundal_Recipe_d160b55918.jpg",
  description:
    "Fresh and vibrant sundal made with green peas, rich in vitamins and minerals. This colorful preparation is perfect for adding nutrition and visual appeal to your meals.",
  meta: {
    prepTime: 10,
    cookTime: 15,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Easy,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=C4APEOlCkNs&pp=ygURR3JlZW4gUGVhcyBTdW5kYWw%3D",
};

const HorseGramSundal: Recipe = {
  categoryId: 6,
  name: "Horse Gram Sundal",
  imageUrl:
    "https://rakskitchen.net/wp-content/uploads/2015/10/1-kollu-sundal.jpg",
  description:
    "Healthy and medicinal sundal made with horse gram, known for its therapeutic properties. This traditional preparation is valued for its health benefits and unique flavor.",
  meta: {
    prepTime: 15,
    cookTime: 30,
    cuisine: Cusine.Indian,
    course: Course.Snacks,
    diet: [Diet.Vegetarian, Diet.GlutenFree],
    diffculty: Difficulty.Moderate,
  },
  videoUrl:
    "https://www.youtube.com/watch?v=faj7RNA_DSQ&pp=ygUUa29sbHUgc3VuZGFsIHJlY2lwZSA%3D",
};

// const LimaBeansSundal: Recipe = {
//   categoryId: 6,
//   name: "Lima Beans Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/lima-beans-sundal-500x500.jpg",
//   description:
//     "Creamy and delicious sundal made with lima beans, rich in protein and fiber. This smooth-textured preparation offers a different taste experience in the sundal family.",
//   meta: {
//     prepTime: 15,
//     cookTime: 25,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=lima-beans-sundal",
// };

// const NavyBeansSundal: Recipe = {
//   categoryId: 6,
//   name: "Navy Beans Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/navy-beans-sundal-500x500.jpg",
//   description:
//     "Smooth and nutritious sundal made with small white navy beans. This protein-rich preparation has a delicate flavor and creamy texture.",
//   meta: {
//     prepTime: 15,
//     cookTime: 25,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=navy-beans-sundal",
// };

// const FieldBeansSundal: Recipe = {
//   categoryId: 6,
//   name: "Field Beans Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/field-beans-sundal-500x500.jpg",
//   description:
//     "Traditional sundal made with fresh field beans, popular in Tamil Nadu. This regional specialty showcases the authentic flavors of South Indian cuisine.",
//   meta: {
//     prepTime: 10,
//     cookTime: 15,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=field-beans-sundal",
// };

// const SproutedMoongSundal: Recipe = {
//   categoryId: 6,
//   name: "Sprouted Moong Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/sprouted-moong-sundal-500x500.jpg",
//   description:
//     "Highly nutritious sundal made with sprouted green moong, packed with enzymes and vitamins. This health-conscious preparation maximizes nutritional benefits through sprouting.",
//   meta: {
//     prepTime: 10,
//     cookTime: 10,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=sprouted-moong-sundal",
// };

// const BlackGramSundal: Recipe = {
//   categoryId: 6,
//   name: "Black Gram Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/black-gram-sundal-500x500.jpg",
//   description:
//     "Rich and creamy sundal made with black gram, excellent source of protein and calcium. This traditional preparation is valued for its nutritional density and authentic taste.",
//   meta: {
//     prepTime: 15,
//     cookTime: 30,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Moderate,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=black-gram-sundal",
// };

// const PigeonPeasSundal: Recipe = {
//   categoryId: 6,
//   name: "Pigeon Peas Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/pigeon-peas-sundal-500x500.jpg",
//   description:
//     "Protein-rich sundal made with pigeon peas, a staple legume in South Indian cuisine. This wholesome preparation showcases the versatility of toor dal beyond curries.",
//   meta: {
//     prepTime: 15,
//     cookTime: 25,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=pigeon-peas-sundal",
// };

// const CashewSundal: Recipe = {
//   categoryId: 6,
//   name: "Cashew Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/cashew-sundal-500x500.jpg",
//   description:
//     "Rich and luxurious sundal made with cashews, perfect for special occasions. This premium preparation combines the richness of cashews with traditional South Indian flavors.",
//   meta: {
//     prepTime: 10,
//     cookTime: 15,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=cashew-sundal",
// };

// const AlmondsSundal: Recipe = {
//   categoryId: 6,
//   name: "Almonds Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/almonds-sundal-500x500.jpg",
//   description:
//     "Nutritious and brain-healthy sundal made with almonds, rich in vitamin E and healthy fats. This premium preparation is perfect for those seeking both taste and nutrition.",
//   meta: {
//     prepTime: 15,
//     cookTime: 10,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=almonds-sundal",
// };

// const MixedNutsSundal: Recipe = {
//   categoryId: 6,
//   name: "Mixed Nuts Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/mixed-nuts-sundal-500x500.jpg",
//   description:
//     "Gourmet sundal made with a variety of nuts, perfect for festive celebrations. This luxurious preparation combines multiple nuts for a rich and satisfying experience.",
//   meta: {
//     prepTime: 15,
//     cookTime: 12,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=mixed-nuts-sundal",
// };

// const RoastedChanaSundal: Recipe = {
//   categoryId: 6,
//   name: "Roasted Chana Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/roasted-chana-sundal-500x500.jpg",
//   description:
//     "Crunchy and flavorful sundal made with roasted chickpeas, perfect for tea-time snacks. This quick preparation offers instant satisfaction with minimal cooking time.",
//   meta: {
//     prepTime: 5,
//     cookTime: 8,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=roasted-chana-sundal",
// };

// const MasalaSundal: Recipe = {
//   categoryId: 6,
//   name: "Masala Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/masala-sundal-500x500.jpg",
//   description:
//     "Spicy and aromatic sundal made with mixed legumes and special spice blend. This flavorful preparation adds excitement to the traditional sundal repertoire.",
//   meta: {
//     prepTime: 20,
//     cookTime: 25,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Moderate,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=masala-sundal",
// };

// const FreshCoconutSundal: Recipe = {
//   categoryId: 6,
//   name: "Fresh Coconut Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/coconut-sundal-500x500.jpg",
//   description:
//     "Simple and pure sundal made primarily with fresh coconut, perfect for fasting days. This minimalist preparation celebrates the natural sweetness and flavor of coconut.",
//   meta: {
//     prepTime: 10,
//     cookTime: 8,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=coconut-sundal",
// };

// const SweetJaggerySundal: Recipe = {
//   categoryId: 6,
//   name: "Sweet Jaggery Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/jaggery-sundal-500x500.jpg",
//   description:
//     "Sweet version of sundal made with jaggery, perfect for those who prefer mild sweetness. This dessert-like preparation offers a unique twist on traditional sundal.",
//   meta: {
//     prepTime: 15,
//     cookTime: 20,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=jaggery-sundal",
// };

// const TuvarDalSundal: Recipe = {
//   categoryId: 6,
//   name: "Tuvar Dal Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/tuvar-dal-sundal-500x500.jpg",
//   description:
//     "Traditional sundal made with tuvar dal (pigeon peas), a staple in South Indian households. This everyday preparation transforms common dal into a festive snack.",
//   meta: {
//     prepTime: 15,
//     cookTime: 20,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=tuvar-dal-sundal",
// };

// const ChanaDalSundal: Recipe = {
//   categoryId: 6,
//   name: "Chana Dal Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/chana-dal-sundal-500x500.jpg",
//   description:
//     "Protein-rich sundal made with split chickpeas (chana dal), offering a different texture from whole chickpeas. This preparation is quick-cooking and highly nutritious.",
//   meta: {
//     prepTime: 10,
//     cookTime: 15,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=chana-dal-sundal",
// };

// const UradDalSundal: Recipe = {
//   categoryId: 6,
//   name: "Urad Dal Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/urad-dal-sundal-500x500.jpg",
//   description:
//     "Rich and creamy sundal made with split black gram (urad dal), known for its high protein content. This preparation offers a unique taste and texture in the sundal family.",
//   meta: {
//     prepTime: 15,
//     cookTime: 20,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=urad-dal-sundal",
// };

// const MasoorDalSundal: Recipe = {
//   categoryId: 6,
//   name: "Masoor Dal Sundal",
//   imageUrl:
//     "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/masoor-dal-sundal-500x500.jpg",
//   description:
//     "Quick-cooking sundal made with red lentils (masoor dal), perfect for busy days. This fast preparation doesn't compromise on taste or nutrition.",
//   meta: {
//     prepTime: 10,
//     cookTime: 12,
//     cuisine: Cusine.Indian,
//     course: Course.Snacks,
//     diet: [Diet.Vegetarian, Diet.GlutenFree],
//     diffculty: Difficulty.Easy,
//   },
//   videoUrl: "https://www.youtube.com/watch?v=masoor-dal-sundal",
// };

// Export all sundal recipes
export const sundalRecipe: Recipe[] = [
  ChanaSundal,
  MoongDalSundal,
  BlackEyedPeasSundal,
  PeanutSundal,
  SweetCornSundal,
  RajmaSundal,
  GreenPeasSundal,
  HorseGramSundal,
];
