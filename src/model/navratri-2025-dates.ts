// Navratri 2025 dates and celebrations data
// Requirements: 5.1, 5.2, 5.3, 5.4

import { NavratriCalendar, NavratriDate } from '../types/enhanced-models';
import { allDurgaForms } from './all-durga-forms';

// Navratri 2025 dates (September 22 - September 30, 2025)
export const navratri2025Dates: NavratriDate[] = [
  // Day 1 - September 22, 2025 (Monday)
  {
    date: '2025-09-22',
    day: 1,
    dayOfWeek: 'Monday',
    durgaForm: allDurgaForms[0], // Shailaputri
    preparations: {
      en: [
        'Clean and decorate the puja area with red flowers',
        'Prepare kalash (sacred pot) with water, mango leaves, and coconut',
        'Arrange red cloth and flowers for Goddess worship',
        'Prepare offerings: ghee, fruits, and sweets',
        'Set up the altar with Durga image or idol'
      ],
      hi: [
        'पूजा स्थल को लाल फूलों से साफ करें और सजाएं',
        'कलश को पानी, आम के पत्ते और नारियल के साथ तैयार करें',
        'देवी पूजा के लिए लाल कपड़ा और फूल व्यवस्थित करें',
        'प्रसाद तैयार करें: घी, फल और मिठाई',
        'दुर्गा की तस्वीर या मूर्ति के साथ वेदी स्थापित करें'
      ]
    },
    observances: {
      en: [
        'Begin with Kalash Sthapana (establishing the sacred pot)',
        'Perform Ghatasthapana ceremony at auspicious time',
        'Offer prayers to Goddess Shailaputri',
        'Wear red or orange colored clothes',
        'Start the nine-day fasting period',
        'Chant Shailaputri mantras and stotras'
      ],
      hi: [
        'कलश स्थापना (पवित्र घड़े की स्थापना) से शुरुआत करें',
        'शुभ समय पर घटस्थापना समारोह करें',
        'देवी शैलपुत्री को प्रार्थना अर्पित करें',
        'लाल या नारंगी रंग के कपड़े पहनें',
        'नौ दिन का उपवास काल शुरू करें',
        'शैलपुत्री मंत्र और स्तोत्र का जाप करें'
      ]
    },
    specialRituals: {
      en: [
        'Establish the Kalash with sacred water from Ganges if available',
        'Light a ghee lamp that should burn continuously for nine days',
        'Perform Shodashopachar Puja (16-step worship)',
        'Offer red flowers and chunari to the Goddess',
        'Distribute prasad to family and neighbors'
      ],
      hi: [
        'यदि उपलब्ध हो तो गंगा के पवित्र जल से कलश स्थापित करें',
        'घी का दीपक जलाएं जो नौ दिनों तक लगातार जलना चाहिए',
        'षोडशोपचार पूजा (16 चरणों की पूजा) करें',
        'देवी को लाल फूल और चुनरी अर्पित करें',
        'परिवार और पड़ोसियों में प्रसाद वितरित करें'
      ]
    },
    fastingRules: {
      en: [
        'Complete fast or eat only fruits and milk',
        'Avoid grains, pulses, and regular salt',
        'Use rock salt (sendha namak) if needed',
        'Drink plenty of water and fresh fruit juices',
        'Avoid onion, garlic, and non-vegetarian food'
      ],
      hi: [
        'पूर्ण उपवास या केवल फल और दूध लें',
        'अनाज, दाल और सामान्य नमक से बचें',
        'आवश्यकता पड़ने पर सेंधा नमक का उपयोग करें',
        'भरपूर पानी और ताजे फलों का रस पिएं',
        'प्याज, लहसुन और मांसाहारी भोजन से बचें'
      ]
    },
    recommendedColors: ['#DC2626', '#EA580C'], // Red, Orange
    auspiciousTimes: {
      sunrise: '06:15 AM',
      sunset: '06:45 PM',
      pujaTime: '06:30 AM - 08:00 AM'
    }
  },

  // Day 2 - September 23, 2025 (Tuesday)
  {
    date: '2025-09-23',
    day: 2,
    dayOfWeek: 'Tuesday',
    durgaForm: allDurgaForms[1], // Brahmacharini
    preparations: {
      en: [
        'Arrange white flowers and white cloth for decoration',
        'Prepare sugar, fruits, and white sweets as offerings',
        'Set up meditation area for spiritual practices',
        'Prepare panchamrit (mixture of milk, curd, ghee, honey, sugar)',
        'Keep sacred books and rosary ready for prayers'
      ],
      hi: [
        'सजावट के लिए सफेद फूल और सफेद कपड़ा व्यवस्थित करें',
        'चीनी, फल और सफेद मिठाई प्रसाद के रूप में तैयार करें',
        'आध्यात्मिक अभ्यास के लिए ध्यान क्षेत्र स्थापित करें',
        'पंचामृत (दूध, दही, घी, शहद, चीनी का मिश्रण) तैयार करें',
        'प्रार्थना के लिए पवित्र पुस्तकें और माला तैयार रखें'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Brahmacharini with devotion',
        'Wear white or light orange colored clothes',
        'Practice meditation and read sacred texts',
        'Observe fast with fruits and dairy products',
        'Chant Brahmacharini mantras throughout the day',
        'Practice self-discipline and spiritual austerity'
      ],
      hi: [
        'देवी ब्रह्मचारिणी की भक्ति के साथ पूजा करें',
        'सफेद या हल्के नारंगी रंग के कपड़े पहनें',
        'ध्यान का अभ्यास करें और पवित्र ग्रंथ पढ़ें',
        'फल और डेयरी उत्पादों के साथ उपवास रखें',
        'दिन भर ब्रह्मचारिणी मंत्र का जाप करें',
        'आत्म-अनुशासन और आध्यात्मिक तपस्या का अभ्यास करें'
      ]
    },
    specialRituals: {
      en: [
        'Perform special prayers for knowledge and wisdom',
        'Read chapters from Durga Saptashati',
        'Offer white flowers and sugar to the Goddess',
        'Light incense and maintain continuous prayers',
        'Practice yoga and meditation for spiritual growth'
      ],
      hi: [
        'ज्ञान और बुद्धि के लिए विशेष प्रार्थना करें',
        'दुर्गा सप्तशती के अध्याय पढ़ें',
        'देवी को सफेद फूल और चीनी अर्पित करें',
        'धूप जलाएं और निरंतर प्रार्थना बनाए रखें',
        'आध्यात्मिक विकास के लिए योग और ध्यान का अभ्यास करें'
      ]
    },
    fastingRules: {
      en: [
        'Eat only sattvic (pure) food items',
        'Include fruits, milk, and nuts in diet',
        'Avoid spicy and processed foods',
        'Drink herbal teas and fresh juices',
        'Maintain mental purity along with physical fasting'
      ],
      hi: [
        'केवल सात्विक (शुद्ध) भोजन लें',
        'आहार में फल, दूध और मेवे शामिल करें',
        'मसालेदार और प्रसंस्कृत भोजन से बचें',
        'हर्बल चाय और ताजे रस पिएं',
        'शारीरिक उपवास के साथ मानसिक पवित्रता बनाए रखें'
      ]
    },
    recommendedColors: ['#FFFFFF', '#FB923C'], // White, Light Orange
    auspiciousTimes: {
      sunrise: '06:16 AM',
      sunset: '06:44 PM',
      pujaTime: '06:30 AM - 08:00 AM'
    }
  },

  // Day 3 - September 24, 2025 (Wednesday)
  {
    date: '2025-09-24',
    day: 3,
    dayOfWeek: 'Wednesday',
    durgaForm: allDurgaForms[2], // Chandraghanta
    preparations: {
      en: [
        'Decorate with golden and yellow flowers',
        'Prepare turmeric, yellow sweets, and honey',
        'Arrange golden cloth and ornaments',
        'Set up offerings of milk and yellow fruits',
        'Prepare the altar with lion imagery or symbols'
      ],
      hi: [
        'सुनहरे और पीले फूलों से सजावट करें',
        'हल्दी, पीली मिठाई और शहद तैयार करें',
        'सुनहरा कपड़ा और आभूषण व्यवस्थित करें',
        'दूध और पीले फलों का प्रसाद तैयार करें',
        'सिंह की छवि या प्रतीकों के साथ वेदी तैयार करें'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Chandraghanta for peace and bravery',
        'Wear golden or yellow colored clothes',
        'Pray for courage and protection from enemies',
        'Offer yellow flowers and turmeric to the Goddess',
        'Chant Chandraghanta mantras for inner strength',
        'Seek blessings for family harmony and peace'
      ],
      hi: [
        'शांति और वीरता के लिए देवी चंद्रघंटा की पूजा करें',
        'सुनहरे या पीले रंग के कपड़े पहनें',
        'साहस और शत्रुओं से सुरक्षा के लिए प्रार्थना करें',
        'देवी को पीले फूल और हल्दी अर्पित करें',
        'आंतरिक शक्ति के लिए चंद्रघंटा मंत्र का जाप करें',
        'पारिवारिक सद्भावना और शांति के लिए आशीर्वाद मांगें'
      ]
    },
    specialRituals: {
      en: [
        'Perform special prayers for removing obstacles',
        'Offer milk and honey to the Goddess',
        'Light golden colored candles or lamps',
        'Recite Chandraghanta Kavach for protection',
        'Distribute yellow sweets as prasad'
      ],
      hi: [
        'बाधाओं को दूर करने के लिए विशेष प्रार्थना करें',
        'देवी को दूध और शहद अर्पित करें',
        'सुनहरे रंग की मोमबत्तियां या दीपक जलाएं',
        'सुरक्षा के लिए चंद्रघंटा कवच का पाठ करें',
        'प्रसाद के रूप में पीली मिठाई वितरित करें'
      ]
    },
    fastingRules: {
      en: [
        'Continue with fruits and milk-based diet',
        'Include yellow fruits like bananas and mangoes',
        'Drink turmeric milk for health benefits',
        'Avoid heavy meals and stick to light foods',
        'Maintain regular prayer timings'
      ],
      hi: [
        'फल और दूध आधारित आहार जारी रखें',
        'केला और आम जैसे पीले फल शामिल करें',
        'स्वास्थ्य लाभ के लिए हल्दी वाला दूध पिएं',
        'भारी भोजन से बचें और हल्के भोजन पर टिके रहें',
        'नियमित प्रार्थना समय बनाए रखें'
      ]
    },
    recommendedColors: ['#D97706', '#EAB308'], // Golden, Yellow
    auspiciousTimes: {
      sunrise: '06:17 AM',
      sunset: '06:42 PM',
      pujaTime: '06:30 AM - 08:00 AM'
    }
  },

  // Day 4 - September 25, 2025 (Thursday)
  {
    date: '2025-09-25',
    day: 4,
    dayOfWeek: 'Thursday',
    durgaForm: allDurgaForms[3], // Kushmanda
    preparations: {
      en: [
        'Arrange orange and red decorations',
        'Prepare pumpkin dishes and coconut offerings',
        'Set up red flowers and orange cloth',
        'Prepare jaggery sweets and sesame seeds',
        'Create a bright, energetic atmosphere with lights'
      ],
      hi: [
        'नारंगी और लाल सजावट व्यवस्थित करें',
        'कद्दू के व्यंजन और नारियल का प्रसाद तैयार करें',
        'लाल फूल और नारंगी कपड़ा सेट करें',
        'गुड़ की मिठाई और तिल तैयार करें',
        'रोशनी के साथ उज्ज्वल, ऊर्जावान वातावरण बनाएं'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Kushmanda for health and prosperity',
        'Wear orange or red colored clothes',
        'Pray for energy, vitality, and cosmic power',
        'Offer pumpkin and coconut to the Goddess',
        'Chant Kushmanda mantras for strength',
        'Seek blessings for removing diseases and negativity'
      ],
      hi: [
        'स्वास्थ्य और समृद्धि के लिए देवी कूष्मांडा की पूजा करें',
        'नारंगी या लाल रंग के कपड़े पहनें',
        'ऊर्जा, जीवन शक्ति और ब्रह्मांडीय शक्ति के लिए प्रार्थना करें',
        'देवी को कद्दू और नारियल अर्पित करें',
        'शक्ति के लिए कूष्मांडा मंत्र का जाप करें',
        'रोगों और नकारात्मकता को दूर करने के लिए आशीर्वाद मांगें'
      ]
    },
    specialRituals: {
      en: [
        'Perform Surya (Sun) worship along with Goddess worship',
        'Offer red flowers and orange fruits',
        'Light multiple lamps to invoke cosmic energy',
        'Recite Kushmanda Stotram for health',
        'Prepare and distribute pumpkin-based prasad'
      ],
      hi: [
        'देवी पूजा के साथ सूर्य पूजा करें',
        'लाल फूल और नारंगी फल अर्पित करें',
        'ब्रह्मांडीय ऊर्जा का आह्वान करने के लिए कई दीपक जलाएं',
        'स्वास्थ्य के लिए कूष्मांडा स्तोत्र का पाठ करें',
        'कद्दू आधारित प्रसाद तैयार करें और वितरित करें'
      ]
    },
    fastingRules: {
      en: [
        'Include pumpkin and orange-colored foods',
        'Eat coconut and jaggery-based sweets',
        'Drink fresh coconut water and orange juice',
        'Avoid processed and artificial foods',
        'Focus on natural, energy-giving foods'
      ],
      hi: [
        'कद्दू और नारंगी रंग के भोजन शामिल करें',
        'नारियल और गुड़ आधारित मिठाई खाएं',
        'ताजा नारियल पानी और संतरे का रस पिएं',
        'प्रसंस्कृत और कृत्रिम भोजन से बचें',
        'प्राकृतिक, ऊर्जा देने वाले भोजन पर ध्यान दें'
      ]
    },
    recommendedColors: ['#EA580C', '#DC2626'], // Orange, Red
    auspiciousTimes: {
      sunrise: '06:18 AM',
      sunset: '06:41 PM',
      pujaTime: '06:30 AM - 08:00 AM'
    }
  },

  // Day 5 - September 26, 2025 (Friday)
  {
    date: '2025-09-26',
    day: 5,
    dayOfWeek: 'Friday',
    durgaForm: allDurgaForms[4], // Skandamata
    preparations: {
      en: [
        'Decorate with white and light blue flowers',
        'Prepare bananas, coconut water, and white sweets',
        'Arrange white cloth and lotus flowers',
        'Set up rice pudding and milk-based offerings',
        'Create a peaceful, maternal atmosphere'
      ],
      hi: [
        'सफेद और हल्के नीले फूलों से सजावट करें',
        'केला, नारियल पानी और सफेद मिठाई तैयार करें',
        'सफेद कपड़ा और कमल के फूल व्यवस्थित करें',
        'चावल की खीर और दूध आधारित प्रसाद तैयार करें',
        'शांतिपूर्ण, मातृत्व का वातावरण बनाएं'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Skandamata for motherly protection',
        'Wear white or light blue colored clothes',
        'Pray for child welfare and family protection',
        'Offer bananas and lotus flowers to the Goddess',
        'Chant Skandamata mantras for nurturing energy',
        'Seek blessings for fertility and motherhood'
      ],
      hi: [
        'मातृ सुरक्षा के लिए देवी स्कंदमाता की पूजा करें',
        'सफेद या हल्के नीले रंग के कपड़े पहनें',
        'बाल कल्याण और पारिवारिक सुरक्षा के लिए प्रार्थना करें',
        'देवी को केला और कमल के फूल अर्पित करें',
        'पोषण ऊर्जा के लिए स्कंदमाता मंत्र का जाप करें',
        'प्रजनन क्षमता और मातृत्व के लिए आशीर्वाद मांगें'
      ]
    },
    specialRituals: {
      en: [
        'Perform special prayers for children and mothers',
        'Offer milk and rice pudding to the Goddess',
        'Light white candles for peace and purity',
        'Recite Skandamata Kavach for protection',
        'Distribute white sweets and fruits as prasad'
      ],
      hi: [
        'बच्चों और माताओं के लिए विशेष प्रार्थना करें',
        'देवी को दूध और चावल की खीर अर्पित करें',
        'शांति और पवित्रता के लिए सफेद मोमबत्तियां जलाएं',
        'सुरक्षा के लिए स्कंदमाता कवच का पाठ करें',
        'प्रसाद के रूप में सफेद मिठाई और फल वितरित करें'
      ]
    },
    fastingRules: {
      en: [
        'Focus on white and pure foods',
        'Include bananas, milk, and coconut products',
        'Drink coconut water and milk-based drinks',
        'Eat rice-based dishes if allowed',
        'Maintain purity in thoughts and actions'
      ],
      hi: [
        'सफेद और शुद्ध भोजन पर ध्यान दें',
        'केला, दूध और नारियल उत्पाद शामिल करें',
        'नारियल पानी और दूध आधारित पेय पिएं',
        'यदि अनुमति हो तो चावल आधारित व्यंजन खाएं',
        'विचारों और कार्यों में पवित्रता बनाए रखें'
      ]
    },
    recommendedColors: ['#FFFFFF', '#93C5FD'], // White, Light Blue
    auspiciousTimes: {
      sunrise: '06:19 AM',
      sunset: '06:39 PM',
      pujaTime: '06:30 AM - 08:00 AM'
    }
  },

  // Day 6 - September 27, 2025 (Saturday)
  {
    date: '2025-09-27',
    day: 6,
    dayOfWeek: 'Saturday',
    durgaForm: allDurgaForms[5], // Katyayani
    preparations: {
      en: [
        'Arrange red flowers and red cloth decorations',
        'Prepare honey, jaggery, and red-colored sweets',
        'Set up bananas and red fruits as offerings',
        'Arrange warrior symbols and red ornaments',
        'Create a powerful, energetic worship environment'
      ],
      hi: [
        'लाल फूल और लाल कपड़े की सजावट व्यवस्थित करें',
        'शहद, गुड़ और लाल रंग की मिठाई तैयार करें',
        'केला और लाल फल प्रसाद के रूप में व्यवस्थित करें',
        'योद्धा प्रतीक और लाल आभूषण व्यवस्थित करें',
        'शक्तिशाली, ऊर्जावान पूजा वातावरण बनाएं'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Katyayani for courage and victory',
        'Wear red or orange colored clothes',
        'Pray for strength to overcome challenges',
        'Offer red flowers and honey to the Goddess',
        'Chant Katyayani mantras for warrior strength',
        'Seek blessings for victory over enemies and obstacles'
      ],
      hi: [
        'साहस और विजय के लिए देवी कात्यायनी की पूजा करें',
        'लाल या नारंगी रंग के कपड़े पहनें',
        'चुनौतियों पर काबू पाने की शक्ति के लिए प्रार्थना करें',
        'देवी को लाल फूल और शहद अर्पित करें',
        'योद्धा शक्ति के लिए कात्यायनी मंत्र का जाप करें',
        'शत्रुओं और बाधाओं पर विजय के लिए आशीर्वाद मांगें'
      ]
    },
    specialRituals: {
      en: [
        'Perform special prayers for removing obstacles',
        'Offer red flowers and jaggery to the Goddess',
        'Light red candles or lamps for power',
        'Recite Katyayani Mantra 108 times',
        'Distribute red-colored prasad for strength'
      ],
      hi: [
        'बाधाओं को दूर करने के लिए विशेष प्रार्थना करें',
        'देवी को लाल फूल और गुड़ अर्पित करें',
        'शक्ति के लिए लाल मोमबत्तियां या दीपक जलाएं',
        'कात्यायनी मंत्र का 108 बार जाप करें',
        'शक्ति के लिए लाल रंग का प्रसाद वितरित करें'
      ]
    },
    fastingRules: {
      en: [
        'Include red-colored natural foods',
        'Eat honey, jaggery, and red fruits',
        'Drink pomegranate juice and red fruit juices',
        'Avoid negative thoughts and maintain positive energy',
        'Focus on strength-building foods'
      ],
      hi: [
        'लाल रंग के प्राकृतिक भोजन शामिल करें',
        'शहद, गुड़ और लाल फल खाएं',
        'अनार का रस और लाल फलों का रस पिएं',
        'नकारात्मक विचारों से बचें और सकारात्मक ऊर्जा बनाए रखें',
        'शक्ति बढ़ाने वाले भोजन पर ध्यान दें'
      ]
    },
    recommendedColors: ['#DC2626', '#EA580C'], // Red, Orange
    auspiciousTimes: {
      sunrise: '06:20 AM',
      sunset: '06:38 PM',
      pujaTime: '06:30 AM - 08:00 AM'
    }
  },

  // Day 7 - September 28, 2025 (Sunday)
  {
    date: '2025-09-28',
    day: 7,
    dayOfWeek: 'Sunday',
    durgaForm: allDurgaForms[6], // Kalaratri
    preparations: {
      en: [
        'Arrange dark flowers and black/dark blue cloth',
        'Prepare jaggery, sesame oil, and iron items',
        'Set up mustard oil lamps and dark decorations',
        'Prepare offerings to ward off negative energies',
        'Create a protective, powerful worship atmosphere'
      ],
      hi: [
        'गहरे फूल और काले/गहरे नीले कपड़े व्यवस्थित करें',
        'गुड़, तिल का तेल और लोहे की वस्तुएं तैयार करें',
        'सरसों के तेल के दीपक और गहरी सजावट सेट करें',
        'नकारात्मक ऊर्जाओं को दूर करने के लिए प्रसाद तैयार करें',
        'सुरक्षात्मक, शक्तिशाली पूजा वातावरण बनाएं'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Kalaratri for protection from evil',
        'Wear black or dark blue colored clothes',
        'Pray for removal of fear and negative energies',
        'Offer jaggery and sesame oil to the Goddess',
        'Chant Kalaratri mantras for fearlessness',
        'Seek protection from enemies and black magic'
      ],
      hi: [
        'बुराई से सुरक्षा के लिए देवी कालरात्रि की पूजा करें',
        'काले या गहरे नीले रंग के कपड़े पहनें',
        'भय और नकारात्मक ऊर्जाओं को दूर करने के लिए प्रार्थना करें',
        'देवी को गुड़ और तिल का तेल अर्पित करें',
        'निर्भयता के लिए कालरात्रि मंत्र का जाप करें',
        'शत्रुओं और काले जादू से सुरक्षा मांगें'
      ]
    },
    specialRituals: {
      en: [
        'Perform night vigil and special protection prayers',
        'Light mustard oil lamps to ward off negativity',
        'Offer iron items and black sesame seeds',
        'Recite Kalaratri Kavach for ultimate protection',
        'Distribute jaggery and sesame-based prasad'
      ],
      hi: [
        'रात्रि जागरण और विशेष सुरक्षा प्रार्थना करें',
        'नकारात्मकता को दूर करने के लिए सरसों के तेल के दीपक जलाएं',
        'लोहे की वस्तुएं और काले तिल अर्पित करें',
        'परम सुरक्षा के लिए कालरात्रि कवच का पाठ करें',
        'गुड़ और तिल आधारित प्रसाद वितरित करें'
      ]
    },
    fastingRules: {
      en: [
        'Include jaggery and sesame-based foods',
        'Eat iron-rich foods like dates and raisins',
        'Drink sesame oil mixed warm water (small quantity)',
        'Avoid fear-inducing thoughts and maintain courage',
        'Focus on protective and strengthening foods'
      ],
      hi: [
        'गुड़ और तिल आधारित भोजन शामिल करें',
        'खजूर और किशमिश जैसे आयरन युक्त भोजन खाएं',
        'तिल के तेल मिश्रित गर्म पानी पिएं (कम मात्रा में)',
        'डर पैदा करने वाले विचारों से बचें और साहस बनाए रखें',
        'सुरक्षात्मक और मजबूत बनाने वाले भोजन पर ध्यान दें'
      ]
    },
    recommendedColors: ['#000000', '#1E3A8A'], // Black, Dark Blue
    auspiciousTimes: {
      sunrise: '06:21 AM',
      sunset: '06:36 PM',
      pujaTime: '06:30 AM - 08:00 AM, 08:00 PM - 10:00 PM'
    }
  },

  // Day 8 - September 29, 2025 (Monday)
  {
    date: '2025-09-29',
    day: 8,
    dayOfWeek: 'Monday',
    durgaForm: allDurgaForms[7], // Mahagauri
    preparations: {
      en: [
        'Decorate with white flowers and silver ornaments',
        'Prepare coconut, white sweets, and milk offerings',
        'Arrange white cloth and pure decorations',
        'Set up silver items and white candles',
        'Create a pure, peaceful worship environment'
      ],
      hi: [
        'सफेद फूल और चांदी के आभूषणों से सजावट करें',
        'नारियल, सफेद मिठाई और दूध का प्रसाद तैयार करें',
        'सफेद कपड़ा और शुद्ध सजावट व्यवस्थित करें',
        'चांदी की वस्तुएं और सफेद मोमबत्तियां सेट करें',
        'शुद्ध, शांतिपूर्ण पूजा वातावरण बनाएं'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Mahagauri for purity and peace',
        'Wear white or silver colored clothes',
        'Pray for inner purity and spiritual cleansing',
        'Offer white flowers and coconut to the Goddess',
        'Chant Mahagauri mantras for purification',
        'Seek blessings for beauty and grace'
      ],
      hi: [
        'पवित्रता और शांति के लिए देवी महागौरी की पूजा करें',
        'सफेद या चांदी के रंग के कपड़े पहनें',
        'आंतरिक पवित्रता और आध्यात्मिक शुद्धीकरण के लिए प्रार्थना करें',
        'देवी को सफेद फूल और नारियल अर्पित करें',
        'शुद्धीकरण के लिए महागौरी मंत्र का जाप करें',
        'सुंदरता और अनुग्रह के लिए आशीर्वाद मांगें'
      ]
    },
    specialRituals: {
      en: [
        'Perform purification rituals and cleansing ceremonies',
        'Offer milk and white sweets to the Goddess',
        'Light white candles for purity and peace',
        'Recite Mahagauri Stotram for inner beauty',
        'Distribute white coconut and milk-based prasad'
      ],
      hi: [
        'शुद्धीकरण अनुष्ठान और सफाई समारोह करें',
        'देवी को दूध और सफेद मिठाई अर्पित करें',
        'पवित्रता और शांति के लिए सफेद मोमबत्तियां जलाएं',
        'आंतरिक सुंदरता के लिए महागौरी स्तोत्र का पाठ करें',
        'सफेद नारियल और दूध आधारित प्रसाद वितरित करें'
      ]
    },
    fastingRules: {
      en: [
        'Focus on white and pure foods only',
        'Include coconut, milk, and white fruits',
        'Drink coconut water and pure milk',
        'Maintain complete purity in diet and thoughts',
        'Avoid any colored or processed foods'
      ],
      hi: [
        'केवल सफेद और शुद्ध भोजन पर ध्यान दें',
        'नारियल, दूध और सफेद फल शामिल करें',
        'नारियल पानी और शुद्ध दूध पिएं',
        'आहार और विचारों में पूर्ण पवित्रता बनाए रखें',
        'किसी भी रंगीन या प्रसंस्कृत भोजन से बचें'
      ]
    },
    recommendedColors: ['#FFFFFF', '#C0C0C0'], // White, Silver
    auspiciousTimes: {
      sunrise: '06:22 AM',
      sunset: '06:35 PM',
      pujaTime: '06:30 AM - 08:00 AM'
    }
  },

  // Day 9 - September 30, 2025 (Tuesday) - Mahanavami
  {
    date: '2025-09-30',
    day: 9,
    dayOfWeek: 'Tuesday',
    durgaForm: allDurgaForms[8], // Siddhidatri
    preparations: {
      en: [
        'Arrange multi-colored flowers and rainbow decorations',
        'Prepare all types of fruits, sweets, and offerings',
        'Set up precious items and beautiful ornaments',
        'Arrange perfumes and fragrant items',
        'Create a grand, celebratory worship environment'
      ],
      hi: [
        'बहुरंगी फूल और इंद्रधनुष सजावट व्यवस्थित करें',
        'सभी प्रकार के फल, मिठाई और प्रसाद तैयार करें',
        'कीमती वस्तुएं और सुंदर आभूषण सेट करें',
        'इत्र और सुगंधित वस्तुएं व्यवस्थित करें',
        'भव्य, उत्सवी पूजा वातावरण बनाएं'
      ]
    },
    observances: {
      en: [
        'Worship Goddess Siddhidatri for supernatural powers',
        'Wear multi-colored or rainbow colored clothes',
        'Pray for fulfillment of all desires and wishes',
        'Offer all types of flowers and fruits to the Goddess',
        'Chant Siddhidatri mantras for accomplishments',
        'Seek blessings for success and spiritual attainment'
      ],
      hi: [
        'अलौकिक शक्तियों के लिए देवी सिद्धिदात्री की पूजा करें',
        'बहुरंगी या इंद्रधनुष रंग के कपड़े पहनें',
        'सभी इच्छाओं और कामनाओं की पूर्ति के लिए प्रार्थना करें',
        'देवी को सभी प्रकार के फूल और फल अर्पित करें',
        'उपलब्धियों के लिए सिद्धिदात्री मंत्र का जाप करें',
        'सफलता और आध्यात्मिक प्राप्ति के लिए आशीर्वाद मांगें'
      ]
    },
    specialRituals: {
      en: [
        'Perform grand Mahanavami celebrations',
        'Offer precious items and perfumes to the Goddess',
        'Light multiple colored candles and lamps',
        'Recite complete Durga Saptashati',
        'Distribute variety of sweets and fruits as prasad',
        'Perform Kanya Puja (worship of young girls)'
      ],
      hi: [
        'भव्य महानवमी उत्सव मनाएं',
        'देवी को कीमती वस्तुएं और इत्र अर्पित करें',
        'कई रंगीन मोमबत्तियां और दीपक जलाएं',
        'संपूर्ण दुर्गा सप्तशती का पाठ करें',
        'प्रसाद के रूप में विभिन्न प्रकार की मिठाई और फल वितरित करें',
        'कन्या पूजा (युवा लड़कियों की पूजा) करें'
      ]
    },
    fastingRules: {
      en: [
        'Complete the nine-day fasting with gratitude',
        'Include all types of fruits and sweets',
        'Prepare special feast for breaking the fast',
        'Share food with family, friends, and needy',
        'Maintain spiritual discipline till the end'
      ],
      hi: [
        'कृतज्ञता के साथ नौ दिन का उपवास पूरा करें',
        'सभी प्रकार के फल और मिठाई शामिल करें',
        'उपवास तोड़ने के लिए विशेष भोज तैयार करें',
        'परिवार, मित्रों और जरूरतमंदों के साथ भोजन साझा करें',
        'अंत तक आध्यात्मिक अनुशासन बनाए रखें'
      ]
    },
    recommendedColors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'], // Multi-colored
    auspiciousTimes: {
      sunrise: '06:23 AM',
      sunset: '06:33 PM',
      pujaTime: '06:30 AM - 08:00 AM, 06:00 PM - 08:00 PM'
    }
  }
];

export const navratri2025Calendar: NavratriCalendar = {
  year: 2025,
  startDate: '2025-09-22',
  endDate: '2025-09-30',
  dates: navratri2025Dates,
  generalInfo: {
    significance: {
      en: "Navratri 2025 celebrates the nine divine forms of Goddess Durga, representing the triumph of good over evil. This sacred festival spans nine nights of devotion, fasting, and spiritual transformation.",
      hi: "नवरात्रि 2025 देवी दुर्गा के नौ दिव्य रूपों का उत्सव है, जो बुराई पर अच्छाई की विजय का प्रतीक है। यह पवित्र त्योहार भक्ति, उपवास और आध्यात्मिक परिवर्तन की नौ रातों तक फैला है।"
    },
    overview: {
      en: "Navratri 2025 begins on September 22nd (Monday) and concludes on September 30th (Tuesday). Each day is dedicated to a specific form of Goddess Durga, with unique rituals, colors, and celebrations.",
      hi: "नवरात्रि 2025 22 सितंबर (सोमवार) को शुरू होकर 30 सितंबर (मंगलवार) को समाप्त होती है। प्रत्येक दिन देवी दुर्गा के एक विशिष्ट रूप को समर्पित है, जिसमें अनूठे अनुष्ठान, रंग और उत्सव हैं।"
    },
    preparation: {
      en: "Prepare by cleaning your home, setting up a dedicated puja space, gathering necessary items for each day's worship, and mentally preparing for the spiritual journey of nine days.",
      hi: "अपने घर की सफाई करके, एक समर्पित पूजा स्थान स्थापित करके, प्रत्येक दिन की पूजा के लिए आवश्यक वस्तुओं को इकट्ठा करके, और नौ दिनों की आध्यात्मिक यात्रा के लिए मानसिक रूप से तैयार होकर तैयारी करें।"
    }
  }
};