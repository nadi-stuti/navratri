import React, { useState } from 'react';
import { allDurgaForms } from '../model/all-durga-forms';
import { useLanguage } from '../contexts/LanguageContext';
import './DurgaFormsDisplay.css';

export const DurgaFormsDisplay: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const { t, currentLanguage } = useLanguage();

  const selectedForm = allDurgaForms.find(form => form.day === selectedDay);

  if (!selectedForm) {
    return <div>{t('common.errors.formNotFound')}</div>;
  }

  const getTranslatedText = (translatedContent: any): string => {
    return translatedContent[currentLanguage] || translatedContent.en || '';
  };

  const getTranslatedArray = (translatedArray: any): string[] => {
    return translatedArray[currentLanguage] || translatedArray.en || [];
  };

  return (
    <div className="durga-forms-container">
      <h2>{t('common.components.durgaForms.title')}</h2>
      
      {/* Day Navigation */}
      <div className="day-navigation">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(day => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
{t('common.ui.day')} {day}
          </button>
        ))}
      </div>

      {/* Selected Form Display */}
      <div className="form-display">
        <div className="form-header">
          <h3 className="form-name">
            {getTranslatedText(selectedForm.name)}
          </h3>
          <div className="sanskrit-name">
            {selectedForm.sanskritName}
          </div>
          <div className="transliteration">
            ({getTranslatedText(selectedForm.transliteration)})
          </div>
        </div>

        <div className="form-content">
          <div className="significance-section">
            <h4>{t('common.components.durgaForms.sections.significance')}</h4>
            <p>{getTranslatedText(selectedForm.significance)}</p>
          </div>

          <div className="symbolism-section">
            <h4>{t('common.components.durgaForms.sections.symbolism')}</h4>
            <p>{getTranslatedText(selectedForm.symbolism)}</p>
          </div>

          <div className="blessings-section">
            <h4>{t('common.components.durgaForms.sections.blessings')}</h4>
            <p>{getTranslatedText(selectedForm.blessings)}</p>
          </div>

          <div className="iconography-section">
            <h4>{t('common.components.durgaForms.sections.iconography')}</h4>
            <p>{getTranslatedText(selectedForm.iconography)}</p>
          </div>

          <div className="details-grid">
            <div className="colors-section">
              <h4>{t('common.components.durgaForms.sections.sacredColors')}</h4>
              <div className="colors-list">
                {selectedForm.colors.map((color, index) => (
                  <span key={index} className={`color-tag color-${color.toLowerCase()}`}>
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="offerings-section">
              <h4>{t('common.components.durgaForms.sections.offerings')}</h4>
              <ul>
                {getTranslatedArray(selectedForm.offerings).map((offering, index) => (
                  <li key={index}>{offering}</li>
                ))}
              </ul>
            </div>

            <div className="celebrations-section">
              <h4>{t('common.components.durgaForms.sections.celebrations')}</h4>
              <ul>
                {getTranslatedArray(selectedForm.celebrations).map((celebration, index) => (
                  <li key={index}>{celebration}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mantras Section */}
          <div className="mantras-section">
            <h4>{t('common.components.durgaForms.sections.sacredMantras')}</h4>
            {selectedForm.mantras.map((mantra, index) => (
              <div key={index} className="mantra-card">
                <div className="sanskrit-text">
                  {mantra.sanskrit}
                </div>
                <div className="transliteration-text">
                  <strong>{t('common.ui.transliteration')}</strong> {getTranslatedText(mantra.transliteration)}
                </div>
                <div className="meaning-text">
                  <strong>{t('common.ui.meaning')}</strong> {getTranslatedText(mantra.meaning)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};