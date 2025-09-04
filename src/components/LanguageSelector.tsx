import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { currentLanguage, changeLanguage, availableLanguages, t, isLoading } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (languageCode: string) => {
    await changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <div className={`language-selector ${className}`}>
      <button
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        aria-label={t('labels.language')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="language-flag">{currentLang?.flag}</span>
        <span className="language-name">{currentLang?.nativeName}</span>
        <span className="language-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown" role="listbox">
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${
                language.code === currentLanguage ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(language.code)}
              role="option"
              aria-selected={language.code === currentLanguage}
            >
              <span className="language-flag">{language.flag}</span>
              <span className="language-native">{language.nativeName}</span>
              <span className="language-english">({language.name})</span>
            </button>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="language-loading" aria-live="polite">
          {t('labels.loading')}
        </div>
      )}
    </div>
  );
};