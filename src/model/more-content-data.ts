// More section content data with historical, cultural, and practical information

export interface MoreSection {
  id: string;
  title: string;
  content: MoreContent[];
}

export interface MoreContent {
  type: 'paragraph' | 'list' | 'subsection' | 'tip' | 'quote';
  content: string | string[];
  subtitle?: string;
}

// Function to generate content data with translations
export const getMoreContentData = (t: (key: string) => string): MoreSection[] => [
  {
    id: 'historical-context',
    title: t('pages:more.sections.historicalContext.title'),
    content: [
      {
        type: 'paragraph',
        content: t('pages:more.sections.historicalContext.content.paragraph1')
      },
      {
        type: 'paragraph',
        content: t('pages:more.sections.historicalContext.content.paragraph2')
      },
      {
        type: 'subsection',
        subtitle: t('pages:more.sections.historicalContext.content.ancientTraditions.subtitle'),
        content: t('pages:more.sections.historicalContext.content.ancientTraditions.content')
      }
    ]
  },
  {
    id: 'cultural-significance',
    title: t('pages:more.sections.culturalSignificance.title'),
    content: [
      {
        type: 'paragraph',
        content: t('pages:more.sections.culturalSignificance.content.paragraph1')
      },
      {
        type: 'list',
        subtitle: t('pages:more.sections.culturalSignificance.content.threePhases.subtitle'),
        content: [
          t('pages:more.sections.culturalSignificance.content.threePhases.phase1'),
          t('pages:more.sections.culturalSignificance.content.threePhases.phase2'),
          t('pages:more.sections.culturalSignificance.content.threePhases.phase3')
        ]
      },
      {
        type: 'quote',
        content: t('pages:more.sections.culturalSignificance.content.quote')
      }
    ]
  },
  {
    id: 'regional-variations',
    title: t('pages:more.sections.regionalVariations.title'),
    content: [
      {
        type: 'subsection',
        subtitle: t('pages:more.sections.regionalVariations.content.gujarat.subtitle'),
        content: t('pages:more.sections.regionalVariations.content.gujarat.content')
      },
      {
        type: 'subsection',
        subtitle: t('pages:more.sections.regionalVariations.content.westBengal.subtitle'),
        content: t('pages:more.sections.regionalVariations.content.westBengal.content')
      },
      {
        type: 'subsection',
        subtitle: t('pages:more.sections.regionalVariations.content.southIndia.subtitle'),
        content: t('pages:more.sections.regionalVariations.content.southIndia.content')
      },
      {
        type: 'subsection',
        subtitle: t('pages:more.sections.regionalVariations.content.northIndia.subtitle'),
        content: t('pages:more.sections.regionalVariations.content.northIndia.content')
      },
      {
        type: 'list',
        subtitle: t('pages:more.sections.regionalVariations.content.regionalFasting.subtitle'),
        content: [
          t('pages:more.sections.regionalVariations.content.regionalFasting.northIndia'),
          t('pages:more.sections.regionalVariations.content.regionalFasting.southIndia'),
          t('pages:more.sections.regionalVariations.content.regionalFasting.maharashtra'),
          t('pages:more.sections.regionalVariations.content.regionalFasting.rajasthan')
        ]
      }
    ]
  },
  {
    id: 'fasting-traditions',
    title: t('pages:more.sections.fastingTraditions.title'),
    content: [
      {
        type: 'paragraph',
        content: t('pages:more.sections.fastingTraditions.content.paragraph1')
      },
      {
        type: 'list',
        subtitle: t('pages:more.sections.fastingTraditions.content.guidelines.subtitle'),
        content: [
          t('pages:more.sections.fastingTraditions.content.guidelines.guideline1'),
          t('pages:more.sections.fastingTraditions.content.guidelines.guideline2'),
          t('pages:more.sections.fastingTraditions.content.guidelines.guideline3'),
          t('pages:more.sections.fastingTraditions.content.guidelines.guideline4'),
          t('pages:more.sections.fastingTraditions.content.guidelines.guideline5')
        ]
      },
      {
        type: 'subsection',
        subtitle: t('pages:more.sections.fastingTraditions.content.permittedIngredients.subtitle'),
        content: t('pages:more.sections.fastingTraditions.content.permittedIngredients.content')
      }
    ]
  },
  {
    id: 'modern-adaptations',
    title: t('pages:more.sections.modernAdaptations.title'),
    content: [
      {
        type: 'paragraph',
        content: t('pages:more.sections.modernAdaptations.content.paragraph1')
      },
      {
        type: 'list',
        subtitle: t('pages:more.sections.modernAdaptations.content.approaches.subtitle'),
        content: [
          t('pages:more.sections.modernAdaptations.content.approaches.approach1'),
          t('pages:more.sections.modernAdaptations.content.approaches.approach2'),
          t('pages:more.sections.modernAdaptations.content.approaches.approach3'),
          t('pages:more.sections.modernAdaptations.content.approaches.approach4'),
          t('pages:more.sections.modernAdaptations.content.approaches.approach5')
        ]
      },
      {
        type: 'tip',
        content: t('pages:more.sections.modernAdaptations.content.tip1')
      },
      {
        type: 'tip',
        content: t('pages:more.sections.modernAdaptations.content.tip2')
      }
    ]
  },
  {
    id: 'health-benefits',
    title: t('pages:more.sections.healthBenefits.title'),
    content: [
      {
        type: 'paragraph',
        content: t('pages:more.sections.healthBenefits.content.paragraph1')
      },
      {
        type: 'list',
        subtitle: t('pages:more.sections.healthBenefits.content.benefits.subtitle'),
        content: [
          t('pages:more.sections.healthBenefits.content.benefits.benefit1'),
          t('pages:more.sections.healthBenefits.content.benefits.benefit2'),
          t('pages:more.sections.healthBenefits.content.benefits.benefit3'),
          t('pages:more.sections.healthBenefits.content.benefits.benefit4'),
          t('pages:more.sections.healthBenefits.content.benefits.benefit5')
        ]
      },
      {
        type: 'subsection',
        subtitle: t('pages:more.sections.healthBenefits.content.mindfulEating.subtitle'),
        content: t('pages:more.sections.healthBenefits.content.mindfulEating.content')
      }
    ]
  },
  {
    id: 'contemporary-celebrations',
    title: t('pages:more.sections.contemporaryCelebrations.title'),
    content: [
      {
        type: 'paragraph',
        content: t('pages:more.sections.contemporaryCelebrations.content.paragraph1')
      },
      {
        type: 'list',
        subtitle: t('pages:more.sections.contemporaryCelebrations.content.global.subtitle'),
        content: [
          t('pages:more.sections.contemporaryCelebrations.content.global.usa'),
          t('pages:more.sections.contemporaryCelebrations.content.global.uk'),
          t('pages:more.sections.contemporaryCelebrations.content.global.canada'),
          t('pages:more.sections.contemporaryCelebrations.content.global.australia'),
          t('pages:more.sections.contemporaryCelebrations.content.global.middleEast')
        ]
      },
      {
        type: 'tip',
        content: t('pages:more.sections.contemporaryCelebrations.content.tip')
      }
    ]
  },
  {
    id: 'practical-planning',
    title: t('pages:more.sections.practicalPlanning.title'),
    content: [
      {
        type: 'list',
        subtitle: t('pages:more.sections.practicalPlanning.content.preNavratri.subtitle'),
        content: [
          t('pages:more.sections.practicalPlanning.content.preNavratri.prep1'),
          t('pages:more.sections.practicalPlanning.content.preNavratri.prep2'),
          t('pages:more.sections.practicalPlanning.content.preNavratri.prep3'),
          t('pages:more.sections.practicalPlanning.content.preNavratri.prep4'),
          t('pages:more.sections.practicalPlanning.content.preNavratri.prep5')
        ]
      },
      {
        type: 'list',
        subtitle: t('pages:more.sections.practicalPlanning.content.dailyRoutine.subtitle'),
        content: [
          t('pages:more.sections.practicalPlanning.content.dailyRoutine.routine1'),
          t('pages:more.sections.practicalPlanning.content.dailyRoutine.routine2'),
          t('pages:more.sections.practicalPlanning.content.dailyRoutine.routine3'),
          t('pages:more.sections.practicalPlanning.content.dailyRoutine.routine4'),
          t('pages:more.sections.practicalPlanning.content.dailyRoutine.routine5')
        ]
      },
      {
        type: 'tip',
        content: t('pages:more.sections.practicalPlanning.content.tip')
      }
    ]
  }
];

// Navigation structure for the More component
export interface MoreNavigation {
  id: string;
  title: string;
  icon?: string;
}

export const moreNavigationItems: MoreNavigation[] = [
  { id: 'historical-context', title: 'Historical Context' },
  { id: 'cultural-significance', title: 'Cultural Significance' },
  { id: 'regional-variations', title: 'Regional Variations' },
  { id: 'fasting-traditions', title: 'Fasting Traditions' },
  { id: 'modern-adaptations', title: 'Modern Adaptations' },
  { id: 'health-benefits', title: 'Health Benefits' },
  { id: 'contemporary-celebrations', title: 'Global Celebrations' },
  { id: 'practical-planning', title: 'Practical Planning' }
];