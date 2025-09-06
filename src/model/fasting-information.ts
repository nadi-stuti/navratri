// Fasting information with scriptural references
// Requirements: 6.1, 8.1

import { FastingInformation, ScriptureReference, FastingRule } from "../types/enhanced-models";

// Scriptural references for fasting
export const fastingScriptures: ScriptureReference[] = [
  {
    text: "उपवासेन शुद्ध्यन्ति मनसा च शुभाशुभे। तपसा च शरीरं च ब्रह्मचर्येण चेन्द्रियाः॥",
    transliteration: {
      en: "Upvasena Shuddhyanti Manasa Cha Shubhashubhe | Tapasa Cha Shariram Cha Brahmacharyena Chendriyah ||",
      hi: "उपवासेन शुद्ध्यन्ति मनसा च शुभाशुभे। तपसा च शरीरं च ब्रह्मचर्येण चेन्द्रियाः॥",
      ta: "உபவாசேன சுத்த்யந்தி மனசா ச சுபாசுபே | தபசா ச சரீரம் ச ப்ரஹ்மசர்யேண சேந்த்ரியாः ||",
      mr: "उपवासेन शुद्ध्यन्ति मनसा च शुभाशुभे। तपसा च शरीरं च ब्रह्मचर्येण चेन्द्रियाः॥"
    },
    translation: {
      en: "By fasting, the mind is purified of good and bad thoughts. By penance, the body is purified, and by celibacy, the senses are controlled.",
      hi: "उपवास से मन शुभ-अशुभ विचारों से शुद्ध होता है। तपस्या से शरीर शुद्ध होता है और ब्रह्मचर्य से इंद्रियों पर नियंत्रण होता है।",
      ta: "உபவாசத்தால் மனம் நல்ல மற்றும் கெட்ட எண்ணங்களிலிருந்து தூய்மையடைகிறது। தவத்தால் உடல் தூய்மையடைகிறது, பிரம்மச்சரியத்தால் புலன்கள் கட்டுப்படுத்தப்படுகின்றன।",
      mr: "उपवासाने मन शुभ-अशुभ विचारांपासून शुद्ध होते। तपस्येने शरीर शुद्ध होते आणि ब्रह्मचर्याने इंद्रियांवर नियंत्रण येते।"
    },
    source: {
      en: "Garuda Purana",
      hi: "गरुड़ पुराण",
      ta: "கருட புராணம்",
      mr: "गरुड पुराण"
    },
    chapter: "Dharma Kanda",
    verse: "15.26"
  },
  {
    text: "व्रतानि हि महादेवि सर्वपापप्रणाशिनी। व्रतेन लभते सर्वं व्रतेन परमं पदम्॥",
    transliteration: {
      en: "Vratani Hi Mahadevi Sarvapapapranashini | Vratena Labhate Sarvam Vratena Paramam Padam ||",
      hi: "व्रतानि हि महादेवि सर्वपापप्रणाशिनी। व्रतेन लभते सर्वं व्रतेन परमं पदम्॥",
      ta: "வ்ரதானி ஹி மஹாதேவி சர்வபாபப்ரணாசினீ | வ்ரதேன லபதே சர்வம் வ்ரதேன பரமம் பதம் ||",
      mr: "व्रतानि हि महादेवि सर्वपापप्रणाशिनी। व्रतेन लभते सर्वं व्रतेन परमं पदम्॥"
    },
    translation: {
      en: "O Great Goddess, fasting destroys all sins. Through fasting, one obtains everything, and through fasting, one attains the supreme state.",
      hi: "हे महादेवी, व्रत सभी पापों का नाश करता है। व्रत से सब कुछ प्राप्त होता है और व्रत से परम पद प्राप्त होता है।",
      ta: "ஓ மஹாதேவி, விரதம் அனைத்து பாவங்களையும் அழிக்கிறது। விரதத்தால் எல்லாம் கிடைக்கிறது, விரதத்தால் பரம பதவி அடையப்படுகிறது।",
      mr: "हे महादेवी, व्रत सर्व पापांचा नाश करतो। व्रताने सर्व काही मिळते आणि व्रताने परम पद प्राप्त होते।"
    },
    source: {
      en: "Devi Bhagavata Purana",
      hi: "देवी भागवत पुराण",
      ta: "தேவி பாகவத புராணம்",
      mr: "देवी भागवत पुराण"
    },
    chapter: "9",
    verse: "24"
  },
  {
    text: "नवरात्रे महापूज्ये देव्या: पूजनमुत्तमम्। व्रतेन तपसा दानैर्भक्त्या च सुसमाहिता॥",
    transliteration: {
      en: "Navaratre Mahapujye Devyah Pujanamuttamam | Vratena Tapasa Danairbhaktya Cha Susamahita ||",
      hi: "नवरात्रे महापूज्ये देव्या: पूजनमुत्तमम्। व्रतेन तपसा दानैर्भक्त्या च सुसमाहिता॥",
      ta: "நவராத்ரே மஹாபூஜ்யே தேவ்யாः பூஜனமுத்தமம் | வ்ரதேன தபசா தானைர்பக்த்யா ச ஸுஸமாஹிதா ||",
      mr: "नवरात्रे महापूज्ये देव्या: पूजनमुत्तमम्। व्रतेन तपसा दानैर्भक्त्या च सुसमाहिता॥"
    },
    translation: {
      en: "In the most sacred Navratri, the worship of the Goddess is supreme. Through fasting, penance, charity, and devotion, one becomes well-concentrated.",
      hi: "अत्यंत पवित्र नवरात्रि में देवी की पूजा सर्वोत्तम है। व्रत, तपस्या, दान और भक्ति से व्यक्ति सुसमाहित हो जाता है।",
      ta: "மிகவும் புனிதமான நவராத்திரியில், தேவியின் வழிபாடு உச்சமானது. விரதம், தவம், தானம் மற்றும் பக்தியால் ஒருவர் நன்கு ஒருமுகப்படுகிறார்।",
      mr: "अत्यंत पवित्र नवरात्रीत देवीची पूजा सर्वोत्तम आहे। व्रत, तपस्या, दान आणि भक्तीने व्यक्ती सुसमाहित होतो।"
    },
    source: {
      en: "Markandeya Purana",
      hi: "मार्कण्डेय पुराण",
      ta: "மார்கண்டேய புராணம்",
      mr: "मार्कंडेय पुराण"
    },
    chapter: "Devi Mahatmya",
    verse: "11.45"
  }
];

// Fasting rules for Navratri
export const navratriFastingRules: FastingRule[] = [
  {
    id: "no-grains",
    title: {
      en: "Avoid Regular Grains",
      hi: "सामान्य अनाज से बचें",
      ta: "வழக்கமான தானியங்களைத் தவிர்க்கவும்",
      mr: "सामान्य धान्य टाळा"
    },
    description: {
      en: "Wheat, rice, barley, and other regular grains are not consumed during fasting",
      hi: "व्रत के दौरान गेहूं, चावल, जौ और अन्य सामान्य अनाज का सेवन नहीं किया जाता",
      ta: "விரத காலத்தில் கோதுமை, அரிசி, பார்லி மற்றும் பிற வழக்கமான தானியங்கள் உட்கொள்ளப்படுவதில்லை",
      mr: "व्रतादरम्यान गहू, तांदूळ, जव आणि इतर सामान्य धान्याचे सेवन केले जात नाही"
    },
    category: "dietary",
    importance: "mandatory"
  },
  {
    id: "allowed-grains",
    title: {
      en: "Permitted Grains and Flours",
      hi: "अनुमतित अनाज और आटा",
      ta: "அனுமதிக்கப்பட்ட தானியங்கள் மற்றும் மாவுகள்",
      mr: "परवानगी असलेले धान्य आणि पीठ"
    },
    description: {
      en: "Buckwheat (kuttu), water chestnut flour (singhara), amaranth (rajgira), and barnyard millet (sama) are allowed",
      hi: "कुट्टू, सिंघाड़े का आटा, राजगीरा और सामा की अनुमति है",
      ta: "கோதுமை (குட்டு), நீர் கஷ்கொட்டை மாவு (சிங்காரா), அமரந்த் (ராஜ்கிரா) மற்றும் பார்ன்யார்ட் தினை (சாமா) அனுமதிக்கப்படுகிறது",
      mr: "कुट्टू, शिंगाड्याचे पीठ, राजगिरा आणि सामा यांना परवानगी आहे"
    },
    category: "dietary",
    importance: "recommended"
  },
  {
    id: "no-onion-garlic",
    title: {
      en: "Avoid Onion and Garlic",
      hi: "प्याज और लहसुन से बचें",
      ta: "வெங்காயம் மற்றும் பூண்டு தவிர்க்கவும்",
      mr: "कांदा आणि लसूण टाळा"
    },
    description: {
      en: "Onion, garlic, and other tamasic foods that increase passion and ignorance are avoided",
      hi: "प्याज, लहसुन और अन्य तामसिक भोजन जो राग और अज्ञान बढ़ाते हैं, से बचा जाता है",
      ta: "வெங்காயம், பூண்டு மற்றும் ஆசை மற்றும் அறியாமையை அதிகரிக்கும் பிற தாமசிக உணவுகள் தவிர்க்கப்படுகின்றன",
      mr: "कांदा, लसूण आणि इतर तामसिक अन्न जे राग आणि अज्ञान वाढवतात ते टाळले जातात"
    },
    category: "dietary",
    importance: "mandatory"
  },
  {
    id: "rock-salt-only",
    title: {
      en: "Use Only Rock Salt",
      hi: "केवल सेंधा नमक का प्रयोग करें",
      ta: "கல் உப்பு மட்டுமே பயன்படுத்தவும்",
      mr: "फक्त खडक मीठ वापरा"
    },
    description: {
      en: "Regular table salt is avoided; only rock salt (sendha namak) is used during fasting",
      hi: "सामान्य नमक से बचा जाता है; व्रत के दौरान केवल सेंधा नमक का प्रयोग किया जाता है",
      ta: "வழக்கமான உப்பு தவிர்க்கப்படுகிறது; விரத காலத்தில் கல் உப்பு (சேந்த நமக்) மட்டுமே பயன்படுத்தப்படுகிறது",
      mr: "सामान्य मीठ टाळले जाते; व्रतादरम्यान फक्त खडक मीठ (सेंधा मीठ) वापरले जाते"
    },
    category: "dietary",
    importance: "mandatory"
  },
  {
    id: "fruits-dairy-allowed",
    title: {
      en: "Fruits and Dairy Products Allowed",
      hi: "फल और डेयरी उत्पादों की अनुमति",
      ta: "பழங்கள் மற்றும் பால் பொருட்கள் அனுமதி",
      mr: "फळे आणि दुग्धजन्य पदार्थांना परवानगी"
    },
    description: {
      en: "All fresh fruits, milk, yogurt, paneer, and other dairy products can be consumed",
      hi: "सभी ताजे फल, दूध, दही, पनीर और अन्य डेयरी उत्पादों का सेवन किया जा सकता है",
      ta: "அனைத்து புதிய பழங்கள், பால், தயிர், பனீர் மற்றும் பிற பால் பொருட்கள் உட்கொள்ளலாம்",
      mr: "सर्व ताजी फळे, दूध, दही, पनीर आणि इतर दुग्धजन्य पदार्थांचे सेवन करता येते"
    },
    category: "dietary",
    importance: "recommended"
  },
  {
    id: "single-meal",
    title: {
      en: "Single Meal Observance",
      hi: "एक समय भोजन का पालन",
      ta: "ஒரு வேளை உணவு அனுசரணை",
      mr: "एकवेळ जेवणाचे पालन"
    },
    description: {
      en: "Some devotees observe complete fasting with only one meal in the evening after prayers",
      hi: "कुछ भक्त प्रार्थना के बाद शाम को केवल एक बार भोजन के साथ पूर्ण व्रत रखते हैं",
      ta: "சில பக்தர்கள் பிரார்த்தனைக்குப் பிறகு மாலையில் ஒரே ஒரு உணவுடன் முழு விரதம் அனुசரிக்கிறார்கள்",
      mr: "काही भक्त प्रार्थनेनंतर संध्याकाळी फक्त एकदा जेवणासह पूर्ण व्रत पाळतात"
    },
    category: "timing",
    importance: "optional"
  }
];

// Complete fasting information structure
export const navratriFastingInformation: FastingInformation = {
  reasonsForFasting: {
    spiritual: {
      en: "Fasting purifies the mind and soul, enhances spiritual awareness, and helps in connecting with the divine feminine energy of Goddess Durga",
      hi: "व्रत मन और आत्मा को शुद्ध करता है, आध्यात्मिक जागरूकता बढ़ाता है और देवी दुर्गा की दिव्य स्त्री शक्ति से जुड़ने में मदद करता है",
      ta: "விரதம் மனம் மற்றும் ஆன்மாவை தூய்மைப்படுத்துகிறது, ஆன்மீக விழிப்புணர்வை அதிகரிக்கிறது மற்றும் தேவி துர்க்கையின் தெய்வீக பெண் சக்தியுடன் இணைக்க உதவுகிறது",
      mr: "व्रत मन आणि आत्म्याला शुद्ध करतो, आध्यात्मिक जागरूकता वाढवतो आणि देवी दुर्गेच्या दैवी स्त्री शक्तीशी जोडण्यास मदत करतो"
    },
    physical: {
      en: "Fasting detoxifies the body, improves digestion, boosts immunity, and provides rest to the digestive system",
      hi: "व्रत शरीर को विषमुक्त करता है, पाचन में सुधार करता है, प्रतिरक्षा बढ़ाता है और पाचन तंत्र को आराम प्रदान करता है",
      ta: "விரதம் உடலை நச்சுநீக்கம் செய்கிறது, செரிமானத்தை மேம்படுத்துகிறது, நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது மற்றும் செரிமான அமைப்புக்கு ஓய்வு அளிக்கிறது",
      mr: "व्रत शरीराला विषमुक्त करतो, पचनक्रिया सुधारतो, रोगप्रतिकारक शक्ती वाढवतो आणि पाचनसंस्थेला विश्रांती देतो"
    },
    mental: {
      en: "Fasting enhances mental clarity, improves concentration, develops self-discipline, and reduces stress and anxiety",
      hi: "व्रत मानसिक स्पष्टता बढ़ाता है, एकाग्रता में सुधार करता है, आत्म-अनुशासन विकसित करता है और तनाव व चिंता को कम करता है",
      ta: "விரதம் மன தெளிவை அதிகரிக்கிறது, கவனத்தை மேம்படுத்துகிறது, சுய-ஒழுக்கத்தை வளர்க்கிறது மற்றும் மன அழுத்தம் மற்றும் கவலையை குறைக்கிறது",
      mr: "व्रत मानसिक स्पष्टता वाढवतो, एकाग्रता सुधारतो, आत्म-शिस्त विकसित करतो आणि तणाव व चिंता कमी करतो"
    },
    cultural: {
      en: "Fasting connects us with our cultural heritage, strengthens community bonds, and preserves ancient traditions for future generations",
      hi: "व्रत हमें हमारी सांस्कृतिक विरासत से जोड़ता है, सामुदायिक बंधन मजबूत करता है और भावी पीढ़ियों के लिए प्राचीन परंपराओं को संरक्षित करता है",
      ta: "விரதம் நம்மை நமது கலாச்சார பாரம்பரியத்துடன் இணைக்கிறது, சமூக பிணைப்புகளை வலுப்படுத்துகிறது மற்றும் எதிர்கால சந்ததியினருக்காக பண்டைய மரபுகளை பாதுகாக்கிறது",
      mr: "व्रत आपल्याला आपल्या सांस्कृतिक वारशाशी जोडतो, सामुदायिक बंध मजबूत करतो आणि भावी पिढ्यांसाठी प्राचीन परंपरा जतन करतो"
    }
  },
  navratriFastingSignificance: {
    purpose: {
      en: "Navratri fasting is observed to honor the nine forms of Goddess Durga, seek her blessings for protection, prosperity, and spiritual growth",
      hi: "नवरात्रि व्रत देवी दुर्गा के नौ रूपों का सम्मान करने, सुरक्षा, समृद्धि और आध्यात्मिक विकास के लिए उनका आशीर्वाद पाने के लिए रखा जाता है",
      ta: "நவராத்திரி விரதம் தேவி துர்க்கையின் ஒன்பது வடிவங்களை மதிக்கவும், பாதுகாப்பு, செழிப்பு மற்றும் ஆன்மீக வளர்ச்சிக்காக அவரது ஆசீர்வாதங்களை நாடவும் அனுசரிக்கப்படுகிறது",
      mr: "नवरात्री व्रत देवी दुर्गेच्या नऊ रूपांचा सन्मान करण्यासाठी, संरक्षण, समृद्धी आणि आध्यात्मिक विकासासाठी तिचे आशीर्वाद मिळवण्यासाठी पाळले जाते"
    },
    benefits: {
      en: "Brings divine protection, removes obstacles, grants wishes, purifies karma, and accelerates spiritual evolution",
      hi: "दिव्य सुरक्षा लाता है, बाधाओं को दूर करता है, इच्छाएं पूरी करता है, कर्म शुद्ध करता है और आध्यात्मिक विकास को तेज करता है",
      ta: "தெய்வீக பாதுகாப்பை கொண்டுவருகிறது, தடைகளை நீக்குகிறது, விருப்பங்களை நிறைவேற்றுகிறது, கர்மத்தை தூய்மைப்படுத்துகிறது மற்றும் ஆன்மீக பரிணாமத்தை துரிதப்படுத்துகிறது",
      mr: "दैवी संरक्षण आणते, अडथळे दूर करते, इच्छा पूर्ण करते, कर्म शुद्ध करते आणि आध्यात्मिक उत्क्रांती वेगवान करते"
    },
    spiritualAspects: {
      en: "Awakens the dormant spiritual energy (Kundalini), balances the chakras, and facilitates communion with the Divine Mother",
      hi: "सुप्त आध्यात्मिक ऊर्जा (कुंडलिनी) को जगाता है, चक्रों को संतुलित करता है और दिव्य माता के साथ संवाद की सुविधा प्रदान करता है",
      ta: "உறங்கும் ஆன்மீக சக்தியை (குண்டலினி) எழுப்புகிறது, சக்கரங்களை சமநிலைப்படுத்துகிறது மற்றும் தெய்வீக தாயுடன் தொடர்பு கொள்ள உதவுகிறது",
      mr: "सुप्त आध्यात्मिक ऊर्जा (कुंडलिनी) जागृत करते, चक्र संतुलित करते आणि दैवी मातेशी संवाद साधण्यास मदत करते"
    }
  },
  scriptureReferences: fastingScriptures,
  fastingRules: navratriFastingRules,
  allowedFoods: {
    en: [
      "Fresh fruits (all varieties)",
      "Milk and dairy products",
      "Nuts and dry fruits",
      "Buckwheat flour (kuttu)",
      "Water chestnut flour (singhara)",
      "Amaranth (rajgira)",
      "Barnyard millet (sama)",
      "Potatoes and sweet potatoes",
      "Pumpkin and bottle gourd",
      "Tomatoes",
      "Rock salt (sendha namak)",
      "Coconut",
      "Honey and jaggery"
    ],
    hi: [
      "ताजे फल (सभी किस्में)",
      "दूध और डेयरी उत्पाद",
      "मेवे और सूखे मेवे",
      "कुट्टू का आटा",
      "सिंघाड़े का आटा",
      "राजगीरा",
      "सामा",
      "आलू और शकरकंद",
      "कद्दू और लौकी",
      "टमाटर",
      "सेंधा नमक",
      "नारियल",
      "शहद और गुड़"
    ],
    ta: [
      "புதிய பழங்கள் (அனைத்து வகைகளும்)",
      "பால் மற்றும் பால் பொருட்கள்",
      "கொட்டைகள் மற்றும் உலர் பழங்கள்",
      "கோதுமை மாவு (குட்டு)",
      "நீர் கஷ்கொட்டை மாவு (சிங்காரா)",
      "அமரந்த் (ராஜ்கிரா)",
      "பார்ன்யார்ட் தினை (சாமா)",
      "உருளைக்கிழங்கு மற்றும் இனிப்பு உருளைக்கிழங்கு",
      "பூசணி மற்றும் பாட்டில் கார்ட்",
      "தக்காளி",
      "கல் உப்பு (சேந்த நமக்)",
      "தேங்காய்",
      "தேன் மற்றும் வெல்லம்"
    ],
    mr: [
      "ताजी फळे (सर्व जाती)",
      "दूध आणि दुग्धजन्य पदार्थ",
      "काजू-बदाम आणि सुकामेवा",
      "कुट्टूचे पीठ",
      "शिंगाड्याचे पीठ",
      "राजगिरा",
      "सामा",
      "बटाटे आणि रताळे",
      "भोपळा आणि दुधी भोपळा",
      "टोमॅटो",
      "खडक मीठ (सेंधा मीठ)",
      "नारळ",
      "मध आणि गूळ"
    ]
  },
  forbiddenFoods: {
    en: [
      "Regular grains (wheat, rice, barley)",
      "Lentils and legumes",
      "Onion and garlic",
      "Regular table salt",
      "Non-vegetarian food",
      "Alcohol and tobacco",
      "Processed and packaged foods",
      "Spices like turmeric, red chili powder",
      "Asafoetida (hing)"
    ],
    hi: [
      "सामान्य अनाज (गेहूं, चावल, जौ)",
      "दाल और फलियां",
      "प्याज और लहसुन",
      "सामान्य नमक",
      "मांसाहारी भोजन",
      "शराब और तंबाकू",
      "प्रसंस्कृत और पैकेज्ड खाद्य पदार्थ",
      "हल्दी, लाल मिर्च पाउडर जैसे मसाले",
      "हींग"
    ],
    ta: [
      "வழக்கமான தானியங்கள் (கோதுமை, அரிசி, பார்லி)",
      "பருப்பு வகைகள்",
      "வெங்காயம் மற்றும் பூண்டு",
      "வழக்கமான உப்பு",
      "அசைவ உணவு",
      "மது மற்றும் புகையிலை",
      "பதப்படுத்தப்பட்ட மற்றும் பேக்கேஜ் செய்யப்பட்ட உணவுகள்",
      "மஞ்சள், சிவப்பு மிளகாய் தூள் போன்ற மசாலாக்கள்",
      "பெருங்காயம்"
    ],
    mr: [
      "सामान्य धान्य (गहू, तांदूळ, जव)",
      "डाळी आणि कडधान्ये",
      "कांदा आणि लसूण",
      "सामान्य मीठ",
      "मांसाहारी अन्न",
      "दारू आणि तंबाखू",
      "प्रक्रिया केलेले आणि पॅकेज केलेले पदार्थ",
      "हळद, लाल मिरची पावडर सारखे मसाले",
      "हिंग"
    ]
  },
  dailySchedule: {
    en: [
      { time: "5:00 AM", activity: "Wake up and bath", description: "Start the day with purification" },
      { time: "6:00 AM", activity: "Morning prayers and meditation", description: "Connect with the divine" },
      { time: "7:00 AM", activity: "Goddess worship and aarti", description: "Offer prayers to Durga Ma" },
      { time: "8:00 AM", activity: "Light breakfast (fruits/milk)", description: "Nourish the body mindfully" },
      { time: "12:00 PM", activity: "Midday prayers", description: "Brief remembrance of the Goddess" },
      { time: "6:00 PM", activity: "Evening aarti and prayers", description: "Main worship session" },
      { time: "7:00 PM", activity: "Breaking fast (if single meal)", description: "Consume sattvic food" },
      { time: "9:00 PM", activity: "Reading scriptures", description: "Study spiritual texts" },
      { time: "10:00 PM", activity: "Rest and sleep", description: "Peaceful rest with divine thoughts" }
    ],
    hi: [
      { time: "5:00 AM", activity: "जागना और स्नान", description: "शुद्धीकरण के साथ दिन की शुरुआत" },
      { time: "6:00 AM", activity: "प्रातःकालीन प्रार्थना और ध्यान", description: "दिव्य से जुड़ाव" },
      { time: "7:00 AM", activity: "देवी पूजा और आरती", description: "दुर्गा माता को प्रार्थना अर्पित करें" },
      { time: "8:00 AM", activity: "हल्का नाश्ता (फल/दूध)", description: "सचेत रूप से शरीर का पोषण" },
      { time: "12:00 PM", activity: "दोपहर की प्रार्थना", description: "देवी का संक्षिप्त स्मरण" },
      { time: "6:00 PM", activity: "संध्या आरती और प्रार्थना", description: "मुख्य पूजा सत्र" },
      { time: "7:00 PM", activity: "व्रत तोड़ना (यदि एक समय भोजन)", description: "सात्विक भोजन का सेवन" },
      { time: "9:00 PM", activity: "शास्त्र पठन", description: "आध्यात्मिक ग्रंथों का अध्ययन" },
      { time: "10:00 PM", activity: "विश्राम और नींद", description: "दिव्य विचारों के साथ शांतिपूर्ण आराम" }
    ]
  },
  healthConsiderations: {
    benefits: {
      en: "Improves digestion, boosts immunity, detoxifies body, enhances mental clarity, reduces inflammation, and promotes weight management",
      hi: "पाचन में सुधार, प्रतिरक्षा बढ़ाना, शरीर को विषमुक्त करना, मानसिक स्पष्टता बढ़ाना, सूजन कम करना और वजन प्रबंधन को बढ़ावा देना",
      ta: "செரிமானத்தை மேம்படுத்துகிறது, நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, உடலை நச்சுநீக்கம் செய்கிறது, மன தெளிவை அதிகரிக்கிறது, வீக்கத்தை குறைக்கிறது மற்றும் எடை மேலாண்மையை ஊக்குவிக்கிறது",
      mr: "पचनक्रिया सुधारते, रोगप्रतिकारक शक्ती वाढवते, शरीर विषमुक्त करते, मानसिक स्पष्टता वाढवते, जळजळ कमी करते आणि वजन व्यवस्थापनास प्रोत्साहन देते"
    },
    precautions: {
      en: "Stay hydrated, avoid overexertion, listen to your body, maintain electrolyte balance, and consult healthcare provider if needed",
      hi: "हाइड्रेटेड रहें, अधिक परिश्रम से बचें, अपने शरीर की सुनें, इलेक्ट्रोलाइट संतुलन बनाए रखें और आवश्यकता पड़ने पर स्वास्थ्य सेवा प्रदाता से सलाह लें",
      ta: "நீர்ச்சத்துடன் இருங்கள், அதிக உழைப்பைத் தவிர்க்கவும், உங்கள் உடலின் சொல்வதைக் கேளுங்கள், எலக்ட்ரோலைட் சமநிலையை பராமரிக்கவும், தேவைப்பட்டால் சுகாதார வழங்குநரை அணுகவும்",
      mr: "हायड्रेटेड राहा, जास्त कष्ट टाळा, आपल्या शरीराचे ऐका, इलेक्ट्रोलाइट संतुलन राखा आणि गरज भासल्यास आरोग्य सेवा प्रदात्याचा सल्ला घ्या"
    },
    whoShouldAvoid: {
      en: "Pregnant and breastfeeding women, children under 12, elderly with health conditions, diabetics, and people with eating disorders should avoid strict fasting",
      hi: "गर्भवती और स्तनपान कराने वाली महिलाएं, 12 साल से कम उम्र के बच्चे, स्वास्थ्य समस्याओं वाले बुजुर्ग, मधुमेह रोगी और खाने के विकार वाले लोगों को सख्त व्रत से बचना चाहिए",
      ta: "கர்ப்பிणி மற்றும் பாலூட்டும் பெண்கள், 12 வயதுக்குட்பட்ட குழந்தைகள், உடல்நலப் பிரச்சினைகள் உள்ள வயதானவர்கள், நீரிழிவு நோயாளிகள் மற்றும் உணவுக் கோளாறுகள் உள்ளவர்கள் கடுமையான விரதத்தைத் தவிர்க்க வேண்டும்",
      mr: "गर्भवती आणि स्तनपान करणाऱ्या महिला, 12 वर्षांपेक्षा कमी वयाची मुले, आरोग्य समस्या असलेले वृद्ध, मधुमेह रुग्ण आणि खाण्याचे विकार असलेल्या लोकांनी कठोर व्रत टाळावे"
    }
  },
  modernAdaptations: {
    workingProfessionals: {
      en: "Modify fasting to include light meals, stay hydrated, avoid heavy physical work, and maintain energy levels for productivity",
      hi: "व्रत को हल्के भोजन के साथ संशोधित करें, हाइड्रेटेड रहें, भारी शारीरिक काम से बचें और उत्पादकता के लिए ऊर्जा का स्तर बनाए रखें",
      ta: "விரதத்தை லேசான உணவுகளுடன் மாற்றியமைக்கவும், நீர்ச்சத்துடன் இருக்கவும், கடுமையான உடல் வேலைகளைத் தவிர்க்கவும், உற்பத்தித்திறனுக்கான ஆற்றல் நிலைகளை பராமரிக்கவும்",
      mr: "व्रताला हलक्या जेवणासह सुधारा, हायड्रेटेड राहा, जड शारीरिक काम टाळा आणि उत्पादकतेसाठी ऊर्जा पातळी राखा"
    },
    students: {
      en: "Include brain-boosting foods like nuts and fruits, maintain study schedule, avoid late-night studying during fasting",
      hi: "मेवे और फल जैसे मस्तिष्क बढ़ाने वाले खाद्य पदार्थ शामिल करें, अध्ययन कार्यक्रम बनाए रखें, व्रत के दौरान देर रात पढ़ाई से बचें",
      ta: "கொட்டைகள் மற்றும் பழங்கள் போன்ற மூளையை வலுப்படுத்தும் உணவுகளை சேர்க்கவும், படிப்பு அட்டவணையை பராமரிக்கவும், விரத காலத்தில் இரவு நேர படிப்பைத் தவிர்க்கவும்",
      mr: "काजू-बदाम आणि फळे यासारखे मेंदू वाढवणारे पदार्थ समाविष्ट करा, अभ्यास वेळापत्रक राखा, व्रतादरम्यान रात्री उशिरा अभ्यास टाळा"
    },
    elderly: {
      en: "Consult doctor before fasting, modify according to health conditions, ensure adequate nutrition, avoid complete fasting",
      hi: "व्रत से पहले डॉक्टर से सलाह लें, स्वास्थ्य स्थितियों के अनुसार संशोधित करें, पर्याप्त पोषण सुनिश्चित करें, पूर्ण व्रत से बचें",
      ta: "விரதத்திற்கு முன் மருத்துவரை அணுகவும், உடல்நிலைக்கு ஏற்ப மாற்றியமைக்கவும், போதுமான ஊட்டச்சத்தை உறுதி செய்யவும், முழு விரதத்தைத் தவிர்க்கவும்",
      mr: "व्रतापूर्वी डॉक्टरांचा सल्ला घ्या, आरोग्य परिस्थितीनुसार सुधारा, पुरेसे पोषण सुनिश्चित करा, पूर्ण व्रत टाळा"
    },
    children: {
      en: "Children under 12 should not fast strictly, can participate in prayers and cultural activities, maintain regular nutritious meals",
      hi: "12 साल से कम उम्र के बच्चों को सख्त व्रत नहीं रखना चाहिए, प्रार्थना और सांस्कृतिक गतिविधियों में भाग ले सकते हैं, नियमित पौष्टिक भोजन बनाए रखें",
      ta: "12 வயதுக்குட்பட்ட குழந்தைகள் கடுமையாக விரதம் இருக்கக்கூடாது, பிரார்த்தனைகள் மற்றும் கலாச்சார நடவடிக்கைகளில் பங்கேற்கலாம், வழக்கமான சத்தான உணவுகளை பராமரிக்கவும்",
      mr: "12 वर्षांपेक्षा कमी वयाच्या मुलांनी कठोर व्रत करू नये, प्रार्थना आणि सांस्कृतिक कार्यक्रमात सहभागी होऊ शकतात, नियमित पौष्टिक जेवण राखा"
    }
  }
};