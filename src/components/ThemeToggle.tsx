import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <button
      className={`theme-toggle ${isAnimating ? 'animating' : ''}`}
      onClick={handleToggle}
      aria-label={t('accessibility:ariaLabels.themeToggle.switchTo', 'Switch to {{mode}} mode', { mode: theme === 'light' ? t('common.labels.darkMode', 'dark') : t('common.labels.lightMode', 'light') })}
      aria-pressed={theme === 'dark'}
      title={t('accessibility:ariaLabels.themeToggle.switchTo', 'Switch to {{mode}} mode', { mode: theme === 'light' ? t('common.labels.darkMode', 'dark') : t('common.labels.lightMode', 'light') })}
      role="switch"
      type="button"
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${theme}`}>
          <div className="theme-icon-container">
            {theme === 'light' ? (
              <svg
                className="theme-icon sun-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                className="theme-icon moon-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <span className="sr-only">
        {t('accessibility:ariaLabels.themeToggle.currentTheme', 'Current theme: {{theme}}. Click to switch to {{nextTheme}} mode.', { 
          theme: theme, 
          nextTheme: theme === 'light' ? t('common.labels.darkMode', 'dark') : t('common.labels.lightMode', 'light') 
        })}
      </span>
    </button>
  );
};

export default ThemeToggle;