
import { DurgaFormsDisplay } from '../components/DurgaFormsDisplay';
import { useLanguage } from '../contexts/LanguageContext';

const AboutFestival = () => {
  const { t } = useLanguage();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{t('pages.aboutFestival.title')}</h1>
      <p>
        {t('pages.aboutFestival.personalIntroduction')}
      </p>
      <p>
        {t('pages.aboutFestival.celebrationDescription')}
      </p>
      <p>
        {t('pages.aboutFestival.fastingDescription')}
      </p>
      
      <DurgaFormsDisplay />
    </div>
  );
};

export default AboutFestival;
