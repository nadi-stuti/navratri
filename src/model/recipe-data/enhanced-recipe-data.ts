import {
  EnhancedRecipe,
  EnhancedRecipeCategory,
} from "../../types/enhanced-models";
import { Course, Cusine, Diet, Difficulty } from "../enums";

// Enhanced recipe categories with translations
export const enhancedRecipeCategories: EnhancedRecipeCategory[] = [
  {
    id: 0,
    title: {
      en: "Lunch & Dinner",
      hi: "दोपहर और रात का खाना",
      ta: "மதிய உணவு மற்றும் இரவு உணவு",
      mr: "दुपारचे आणि रात्रीचे जेवण",
      te: "మధ్యాహ్న మరియు రాత్రి భోజనం",
      ml: "ഉച്ചഭക്ഷണവും അത്താഴവും",
      bn: "দুপুর ও রাতের খাবার",
      kn: "ಮಧ್ಯಾಹ್ನ ಮತ್ತು ರಾತ್ರಿಯ ಊಟ",
    },
    route: "/recipe-list/lunch",
    description: {
      en: "I have categorized the lunch and dinner meals into various breads or grain-based dishes as well as curries, gravies and sides. The breads' list consists both of flatbreads and fried breads.",
      hi: "मैंने दोपहर और रात के भोजन को विभिन्न रोटी या अनाज आधारित व्यंजनों के साथ-साथ करी, ग्रेवी और साइड डिश में वर्गीकृत किया है। रोटी की सूची में फ्लैटब्रेड और तली हुई रोटी दोनों शामिल हैं।",
      ta: "மதிய உணவு மற்றும் இரவு உணவுகளை பல்வேறு ரொட்டிகள் அல்லது தானிய அடிப்படையிலான உணவுகள் மற்றும் கறிகள், குழம்புகள் மற்றும் பக்க உணவுகளாக வகைப்படுத்தியுள்ளேன். ரொட்டி பட்டியலில் தட்டையான ரொட்டிகள் மற்றும் வறுத்த ரொட்டிகள் இரண்டும் உள்ளன।",
      mr: "मी दुपार आणि रात्रीचे जेवण विविध पोळी किंवा धान्य आधारित पदार्थ तसेच भाजी, रस्सा आणि बाजूचे पदार्थ यामध्ये वर्गीकृत केले आहे। पोळीच्या यादीत सपाट पोळी आणि तळलेल्या पोळी दोन्ही समाविष्ट आहेत।",
    },
    recipes: [],
    minRecipeCount: 15,
    imageUrl: "https://example.com/lunch-dinner.jpg",
    tags: ["main-course", "traditional", "filling"],
  },
  {
    id: 1,
    title: {
      en: "Breakfast or Snacks",
      hi: "नाश्ता या स्नैक्स",
      ta: "காலை உணவு அல்லது தின்பண்டங்கள்",
      mr: "नाश्ता किंवा चवदार पदार्थ",
      te: "అల్పాహారం లేదా స్నాక్స్",
      ml: "പ്രാതൽ അല്ലെങ്കിൽ ലഘുഭക്ഷണം",
      bn: "নাস্তা বা স্ন্যাকস",
      kn: "ಬೆಳಗಿನ ಊಟ ಅಥವಾ ತಿಂಡಿಗಳು",
    },
    route: "/recipe-list/snacks",
    description: {
      en: "Here I have listed recipes that you can make for breakfast or snacks. Some of them are fried. For healthier versions, use an appe (paniyaram) pan to make these or air-fry or bake these.",
      hi: "यहाँ मैंने उन व्यंजनों की सूची दी है जो आप नाश्ते या स्नैक्स के लिए बना सकते हैं। इनमें से कुछ तले हुए हैं। स्वस्थ विकल्पों के लिए, इन्हें बनाने के लिए अप्पे (पनियारम) पैन का उपयोग करें या एयर-फ्राई या बेक करें।",
      ta: "இங்கே நீங்கள் காலை உணவு அல்லது தின்பண்டங்களுக்காக செய்யக்கூடிய சமையல் குறிப்புகளை பட்டியலிட்டுள்ளேன். அவற்றில் சில வறுத்தவை. ஆரோக்கியமான பதிப்புகளுக்கு, இவற்றை செய்ய அப்பே (பணியாரம்) பான் பயன்படுத்தவும் அல்லது காற்றில் வறுக்கவும் அல்லது சுடவும்।",
      mr: "येथे मी नाश्ता किंवा चवदार पदार्थांसाठी तुम्ही बनवू शकणाऱ्या पाककृतींची यादी केली आहे। त्यापैकी काही तळलेल्या आहेत. आरोग्यदायी आवृत्त्यांसाठी, हे बनवण्यासाठी अप्पे (पणियारम) पॅन वापरा किंवा एअर-फ्राय किंवा बेक करा।",
    },
    recipes: [],
    minRecipeCount: 20,
    imageUrl: "https://example.com/snacks.jpg",
    tags: ["breakfast", "snacks", "quick", "easy"],
  },
  {
    id: 2,
    title: {
      en: "Chutney & Raita",
      hi: "चटनी और रायता",
      ta: "சட்னி மற்றும் ரைதா",
      mr: "चटणी आणि रायता",
      te: "చట్నీ మరియు రైతా",
      ml: "ചട്നിയും റൈതയും",
      bn: "চাটনি ও রায়তা",
      kn: "ಚಟ್ನಿ ಮತ್ತು ರೈತಾ",
    },
    route: "/recipe-list/chutney",
    description: {
      en: "These chutneys and raitas not only act as the perfect accompaniment with the main course or snacks, but also suffice as topping or dipping sauces. Listed below are such Navratri Fast Recipes.",
      hi: "ये चटनी और रायते न केवल मुख्य भोजन या स्नैक्स के साथ एकदम सही संगत का काम करते हैं, बल्कि टॉपिंग या डिपिंग सॉस के रूप में भी पर्याप्त हैं। नीचे ऐसी नवरात्रि व्रत की रेसिपी दी गई हैं।",
      ta: "இந்த சட்னிகள் மற்றும் ரைதாக்கள் முக்கிய உணவு அல்லது தின்பண்டங்களுடன் சரியான துணையாக மட்டுமல்லாமல், டாப்பிங் அல்லது டிப்பிங் சாஸாகவும் போதுமானவை. கீழே பட்டியலிடப்பட்டுள்ளவை அத்தகைய நவராத்திரி விரத சமையல் குறிப்புகள்.",
      mr: "या चटण्या आणि रायते केवळ मुख्य जेवण किंवा चवदार पदार्थांसोबत योग्य साथीदार म्हणून काम करत नाहीत, तर टॉपिंग किंवा डिपिंग सॉस म्हणूनही पुरेसे आहेत. खाली अशा नवरात्री व्रताच्या पाककृती दिल्या आहेत।",
    },
    recipes: [],
    minRecipeCount: 12,
    imageUrl: "https://example.com/chutney.jpg",
    tags: ["accompaniment", "side-dish", "condiment"],
  },
];

// Sample enhanced recipes with full translation support
export const sampleEnhancedRecipes: EnhancedRecipe[] = [
  {
    id: "sabudana-khichdi-enhanced",
    categoryId: 0,
    imageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2023/02/sabudana-khichdi-3-500x500.jpg",
    name: {
      en: "Sabudana Khichdi",
      hi: "साबूदाना खिचड़ी",
      ta: "சபுதானா கிச்சடி",
      mr: "साबूदाणा खिचडी",
      te: "సబుదానా ఖిచ్డీ",
      ml: "സബുദാന ഖിച്ചഡി",
      bn: "সাবুদানা খিচুড়ি",
      kn: "ಸಬುದಾನ ಖಿಚ್ಡಿ",
    },
    description: {
      en: "Sabudana Khichdi is a delicious preparation of tapioca pearls (sago) made with potatoes, peanuts, a few spices and usually had during Hindu fasting days like Navratri, Ekadashi, Mahashivratri. It is also a gluten-free recipe.",
      hi: "साबूदाना खिचड़ी टैपिओका पर्ल्स (साबूदाना) की एक स्वादिष्ट तैयारी है जो आलू, मूंगफली, कुछ मसालों के साथ बनाई जाती है और आमतौर पर नवरात्रि, एकादशी, महाशिवरात्रि जैसे हिंदू व्रत के दिनों में खाई जाती है। यह एक ग्लूटन-फ्री रेसिपी भी है।",
      ta: "சபுதானா கிச்சடி என்பது உருளைக்கிழங்கு, வேர்க்கடலை, சில மசாலாப்பொருட்களுடன் செய்யப்படும் டேபியோகா முத்துக்களின் (சாகோ) சுவையான தயாரிப்பு ஆகும், இது பொதுவாக நவராத்திரி, ஏகாதசி, மஹாசிவராத்திரி போன்ற இந்து விரத நாட்களில் உண்ணப்படுகிறது. இது ஒரு பசையம் இல்லாத சமையல் குறிப்பு ஆகும்।",
      mr: "साबूदाणा खिचडी ही बटाटे, शेंगदाणे, काही मसाल्यांसह बनवलेली टॅपिओका पर्ल्स (साबूदाणा) ची एक स्वादिष्ट तयारी आहे आणि सामान्यतः नवरात्री, एकादशी, महाशिवरात्री यासारख्या हिंदू व्रताच्या दिवशी खाल्ली जाते. ही एक ग्लूटन-फ्री रेसिपी देखील आहे.",
    },
    ingredients: {
      en: [
        "1 cup sabudana (tapioca pearls)",
        "2 medium potatoes, cubed",
        "1/2 cup roasted peanuts",
        "2-3 green chilies, chopped",
        "1 inch ginger, minced",
        "2 tbsp ghee",
        "1 tsp cumin seeds",
        "Rock salt to taste",
        "2 tbsp lemon juice",
        "Fresh coriander leaves for garnish",
      ],
      hi: [
        "1 कप साबूदाना",
        "2 मध्यम आलू, कटे हुए",
        "1/2 कप भुनी हुई मूंगफली",
        "2-3 हरी मिर्च, कटी हुई",
        "1 इंच अदरक, बारीक कटा हुआ",
        "2 बड़े चम्मच घी",
        "1 छोटा चम्मच जीरा",
        "सेंधा नमक स्वादानुसार",
        "2 बड़े चम्मच नींबू का रस",
        "सजावट के लिए ताजा धनिया पत्ती",
      ],
      ta: [
        "1 கப் சபுதானா",
        "2 நடுத்தர உருளைக்கிழங்கு, துண்டுகளாக்கி",
        "1/2 கப் வறுத்த வேர்க்கடலை",
        "2-3 பச்சை மிளகாய், நறுக்கி",
        "1 அங்குல இஞ்சி, பொடியாக நறுக்கி",
        "2 டேபிள்ஸ்பூன் நெய்",
        "1 டீஸ்பூன் சீரகம்",
        "கல் உப்பு சுவைக்கேற்ப",
        "2 டேபிள்ஸ்பூன் எலுமிச்சை சாறு",
        "அலங்காரத்திற்கு புதிய கொத்தமல்லி இலைகள்",
      ],
      mr: [
        "1 कप साबूदाणा",
        "2 मध्यम बटाटे, चिरलेले",
        "1/2 कप भाजलेले शेंगदाणे",
        "2-3 हिरव्या मिरच्या, चिरल्या",
        "1 इंच आले, बारीक चिरलेले",
        "2 टेबलस्पून तूप",
        "1 टीस्पून जिरे",
        "खडक मीठ चवीनुसार",
        "2 टेबलस्पून लिंबाचा रस",
        "सजावटीसाठी ताजे कोथिंबीर पाने",
      ],
    },
    instructions: {
      en: [
        "Soak sabudana in water for 4-6 hours until soft",
        "Drain and rinse the sabudana thoroughly",
        "Heat ghee in a pan and add cumin seeds",
        "Add chopped green chilies and ginger, sauté briefly",
        "Add cubed potatoes and cook until tender",
        "Add the soaked sabudana and mix gently",
        "Add rock salt and cook for 5-7 minutes",
        "Add roasted peanuts and lemon juice",
        "Garnish with fresh coriander and serve hot",
      ],
      hi: [
        "साबूदाना को 4-6 घंटे पानी में भिगोएं जब तक वह नरम न हो जाए",
        "साबूदाना को छानें और अच्छी तरह धो लें",
        "एक पैन में घी गर्म करें और जीरा डालें",
        "कटी हुई हरी मिर्च और अदरक डालें, थोड़ा भूनें",
        "कटे हुए आलू डालें और नरम होने तक पकाएं",
        "भिगोया हुआ साबूदाना डालें और धीरे से मिलाएं",
        "सेंधा नमक डालें और 5-7 मिनट तक पकाएं",
        "भुनी हुई मूंगफली और नींबू का रस डालें",
        "ताजा धनिया से सजाएं और गर्म परोसें",
      ],
      ta: [
        "சபுதானாவை 4-6 மணி நேரம் தண்ணீரில் ஊற வைக்கவும்",
        "சபுதானாவை வடிகட்டி நன்றாக கழுவவும்",
        "ஒரு பானில் நெய் சூடாக்கி சீரகம் சேர்க்கவும்",
        "நறுக்கிய பச்சை மிளகாய் மற்றும் இஞ்சி சேர்த்து சிறிது வதக்கவும்",
        "துண்டுகளாக்கிய உருளைக்கிழங்கு சேர்த்து மென்மையாகும் வரை சமைக்கவும்",
        "ஊற வைத்த சபுதானா சேர்த்து மெதுவாக கலக்கவும்",
        "கல் உப்பு சேர்த்து 5-7 நிமிடங்கள் சமைக்கவும்",
        "வறுத்த வேர்க்கடலை மற்றும் எலுமிச்சை சாறு சேர்க்கவும்",
        "புதிய கொத்தமல்லியால் அலங்கரித்து சூடாக பரிமாறவும்",
      ],
      mr: [
        "साबूदाणा 4-6 तास पाण्यात भिजवून ठेवा जोपर्यंत ते मऊ होत नाही",
        "साबूदाणा गाळून घ्या आणि चांगले धुवा",
        "एका पॅनमध्ये तूप गरम करा आणि जिरे घाला",
        "चिरलेल्या हिरव्या मिरच्या आणि आले घालून थोडे परतून घ्या",
        "चिरलेले बटाटे घालून मऊ होईपर्यंत शिजवा",
        "भिजवलेला साबूदाणा घालून हळूवारपणे मिसळा",
        "खडक मीठ घालून 5-7 मिनिटे शिजवा",
        "भाजलेले शेंगदाणे आणि लिंबाचा रस घाला",
        "ताज्या कोथिंबिरीने सजवून गरम सर्व्ह करा",
      ],
    },
    meta: {
      prepTime: 20,
      cookTime: 15,
      cuisine: Cusine.Maharashtrian,
      course: Course.MainCourse,
      diet: [Diet.GlutenFree, Diet.Vegetarian],
      diffculty: Difficulty.Easy,
      spiceLevel: "mild",
      region: "Maharashtra",
    },
    videoUrl: "https://www.youtube.com/watch?v=SE4Dc0XyhV8",
    tags: ["navratri", "fasting", "gluten-free", "vegetarian", "quick"],
    nutritionalInfo: {
      calories: 320,
      protein: 8,
      carbohydrates: 45,
      fat: 12,
      fiber: 3,
      sodium: 400,
    },
    servings: 4,
    tips: {
      en: "Soak sabudana properly to avoid sticky texture. Use rock salt only during fasting.",
      hi: "चिपचिपाहट से बचने के लिए साबूदाना को अच्छी तरह भिगोएं। व्रत के दौरान केवल सेंधा नमक का प्रयोग करें।",
      ta: "ஒட்டும் அமைப்பைத் தவிர்க்க சபுதானாவை சரியாக ஊற வைக்கவும். விரத காலத்தில் கல் உப்பு மட்டுமே பயன்படுத்தவும்।",
      mr: "चिकट पोत टाळण्यासाठी साबूदाणा योग्यरित्या भिजवा. व्रतादरम्यान फक्त खडक मीठ वापरा.",
    },
    variations: {
      en: "Can be made with sweet potato instead of regular potato. Add curry leaves for South Indian flavor.",
      hi: "सामान्य आलू के बजाय शकरकंद के साथ बनाया जा सकता है। दक्षिण भारतीय स्वाद के लिए करी पत्ते डालें।",
      ta: "வழக்கமான உருளைக்கிழங்குக்கு பதிலாக சர்க்கரைவள்ளிக்கிழங்கு பயன்படுத்தலாம். தென்னிந்திய சுவைக்கு கறிவேப்பிலை சேர்க்கவும்।",
      mr: "सामान्य बटाट्याऐवजी रताळ्यासह बनवता येते. दक्षिण भारतीय चवीसाठी कढीपत्ता घाला.",
    },
  },
  {
    id: "aloo-jeera-enhanced",
    categoryId: 0,
    imageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/jeera-aloo-1-500x500.jpg",
    name: {
      en: "Aloo Jeera",
      hi: "आलू जीरा",
      ta: "உருளைக்கிழங்கு சீரகம்",
      mr: "बटाटे जिरे",
      te: "ఆలూ జీర",
      ml: "ആലു ജീര",
      bn: "আলু জিরা",
      kn: "ಆಲೂ ಜೀರಿಗೆ",
    },
    description: {
      en: "Simple and flavorful potato curry with cumin seeds, perfect for fasting days. This dry curry pairs well with rotis or rice.",
      hi: "जीरे के साथ बना सरल और स्वादिष्ट आलू की सब्जी, व्रत के दिनों के लिए एकदम सही। यह सूखी सब्जी रोटी या चावल के साथ अच्छी लगती है।",
      ta: "சீரகத்துடன் செய்யப்படும் எளிய மற்றும் சுவையான உருளைக்கிழங்கு கறி, விரத நாட்களுக்கு ஏற்றது। இந்த உலர் கறி ரொட்டி அல்லது சாதத்துடன் நன்றாக இருக்கும்।",
      mr: "जिऱ्यांसह बनवलेली साधी आणि चवदार बटाट्याची भाजी, व्रताच्या दिवसांसाठी योग्य. ही कोरडी भाजी पोळी किंवा भातासोबत चांगली लागते।",
    },
    ingredients: {
      en: [
        "4 medium potatoes, cubed",
        "2 tbsp ghee",
        "1 tsp cumin seeds",
        "2 green chilies, slit",
        "1 inch ginger, julienned",
        "1/2 tsp turmeric powder",
        "Rock salt to taste",
        "Fresh coriander leaves",
        "1 tsp lemon juice",
      ],
      hi: [
        "4 मध्यम आलू, कटे हुए",
        "2 बड़े चम्मच घी",
        "1 छोटा चम्मच जीरा",
        "2 हरी मिर्च, चीरी हुई",
        "1 इंच अदरक, बारीक कटा हुआ",
        "1/2 छोटा चम्मच हल्दी पाउडर",
        "सेंधा नमक स्वादानुसार",
        "ताजा धनिया पत्ती",
        "1 छोटा चम्मच नींबू का रस",
      ],
    },
    instructions: {
      en: [
        "Heat ghee in a pan and add cumin seeds",
        "Add green chilies and ginger, sauté briefly",
        "Add cubed potatoes and mix well",
        "Add turmeric and rock salt",
        "Cover and cook until potatoes are tender",
        "Garnish with coriander and lemon juice",
      ],
      hi: [
        "पैन में घी गर्म करें और जीरा डालें",
        "हरी मिर्च और अदरक डालें, थोड़ा भूनें",
        "कटे हुए आलू डालें और अच्छी तरह मिलाएं",
        "हल्दी और सेंधा नमक डालें",
        "ढककर तब तक पकाएं जब तक आलू नरम न हो जाएं",
        "धनिया और नींबू के रस से सजाएं",
      ],
    },
    meta: {
      prepTime: 10,
      cookTime: 20,
      cuisine: Cusine.NorthIndian,
      course: Course.SideDish,
      diet: [Diet.GlutenFree, Diet.Vegetarian],
      diffculty: Difficulty.Easy,
      spiceLevel: "mild",
      region: "North India",
    },
    videoUrl: "",
    tags: ["navratri", "fasting", "gluten-free", "vegetarian", "easy", "quick"],
    nutritionalInfo: {
      calories: 180,
      protein: 4,
      carbohydrates: 30,
      fat: 6,
      fiber: 4,
      sodium: 300,
    },
    servings: 4,
    tips: {
      en: "Don't overcook potatoes to maintain texture. Add lemon juice at the end for freshness.",
      hi: "बनावट बनाए रखने के लिए आलू को ज्यादा न पकाएं। ताजगी के लिए अंत में नींबू का रस डालें।",
    },
  },
  {
    id: "coconut-chutney-enhanced",
    categoryId: 2,
    imageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/coconut-chutney-1-500x500.jpg",
    name: {
      en: "Coconut Chutney",
      hi: "नारियल चटनी",
      ta: "தேங்காய் சட்னி",
      mr: "नारळ चटणी",
      te: "కొబ్బరి చట్నీ",
      ml: "തേങ്ങ ചട്നി",
      bn: "নারকেল চাটনি",
      kn: "ತೆಂಗಿನ ಚಟ್ನಿ",
    },
    description: {
      en: "Fresh and creamy coconut chutney, a perfect accompaniment for South Indian dishes and fasting meals.",
      hi: "ताजी और मलाईदार नारियल चटनी, दक्षिण भारतीय व्यंजनों और व्रत के भोजन के लिए एकदम सही संगत।",
      ta: "புதிய மற்றும் கிரீமி தேங்காய் சட்னி, தென்னிந்திய உணவுகள் மற்றும் விரத உணவுகளுக்கு சரியான துணை।",
      mr: "ताजी आणि मलईदार नारळ चटणी, दक्षिण भारतीय पदार्थ आणि व्रताच्या जेवणासाठी योग्य साथीदार.",
    },
    ingredients: {
      en: [
        "1 cup fresh coconut, grated",
        "2-3 green chilies",
        "1 inch ginger piece",
        "10-12 curry leaves",
        "Rock salt to taste",
        "1 tbsp lemon juice",
        "2-3 tbsp water",
      ],
      hi: [
        "1 कप ताजा नारियल, कद्दूकस किया हुआ",
        "2-3 हरी मिर्च",
        "1 इंच अदरक का टुकड़ा",
        "10-12 करी पत्ते",
        "सेंधा नमक स्वादानुसार",
        "1 बड़ा चम्मच नींबू का रस",
        "2-3 बड़े चम्मच पानी",
      ],
    },
    instructions: {
      en: [
        "Grind coconut, green chilies, and ginger with little water",
        "Add curry leaves and grind briefly",
        "Add rock salt and lemon juice",
        "Adjust consistency with water",
        "Serve fresh with dosas or idlis",
      ],
      hi: [
        "नारियल, हरी मिर्च और अदरक को थोड़े पानी के साथ पीसें",
        "करी पत्ते डालें और थोड़ा पीसें",
        "सेंधा नमक और नींबू का रस डालें",
        "पानी से गाढ़ाहट को समायोजित करें",
        "डोसा या इडली के साथ ताजा परोसें",
      ],
    },
    meta: {
      prepTime: 10,
      cookTime: 0,
      cuisine: Cusine.SouthIndian,
      course: Course.SideDish,
      diet: [Diet.GlutenFree, Diet.Vegetarian, Diet.Vegan],
      diffculty: Difficulty.Easy,
      spiceLevel: "mild",
      region: "South India",
    },
    videoUrl: "",
    tags: [
      "accompaniment",
      "side-dish",
      "condiment",
      "south-indian",
      "vegan",
      "gluten-free",
    ],
    nutritionalInfo: {
      calories: 120,
      protein: 2,
      carbohydrates: 6,
      fat: 11,
      fiber: 4,
      sodium: 200,
    },
    servings: 4,
    tips: {
      en: "Use fresh coconut for best taste. Don't over-grind to maintain texture.",
      hi: "सबसे अच्छे स्वाद के लिए ताजा नारियल का उपयोग करें। बनावट बनाए रखने के लिए ज्यादा न पीसें।",
    },
  },
];

// Export utility functions for recipe management
export const getRecipesByCategory = (categoryId: number): EnhancedRecipe[] => {
  return sampleEnhancedRecipes.filter(
    (recipe) => recipe.categoryId === categoryId
  );
};

export const getRecipeById = (id: string): EnhancedRecipe | undefined => {
  return sampleEnhancedRecipes.find((recipe) => recipe.id === id);
};

export const searchRecipes = (
  query: string,
  language: string = "en"
): EnhancedRecipe[] => {
  const lowerQuery = query.toLowerCase();
  return sampleEnhancedRecipes.filter((recipe) => {
    const name =
      recipe.name[language as keyof typeof recipe.name] || recipe.name.en;
    const description =
      recipe.description[language as keyof typeof recipe.description] ||
      recipe.description.en;

    return (
      name?.toLowerCase().includes(lowerQuery) ||
      description?.toLowerCase().includes(lowerQuery) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
};
