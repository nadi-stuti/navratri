import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./LanguageSelector.css";
import { supportedLanguages } from "../i18n";

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = "",
}) => {
  const { currentLanguage, changeLanguage, availableLanguages, t, isLoading } =
    useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleLanguageChange = async (languageCode: string) => {
    await changeLanguage(languageCode);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const currentLang =
    availableLanguages.find((lang) => lang.code === currentLanguage) ||
    supportedLanguages[0];

  return (
    <div className={`language-selector ${className}`} ref={dropdownRef}>
      <button
        ref={buttonRef}
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        aria-label={t(
          "accessibility:ariaLabels.languageSelector.selectLanguage",
          "Select Language"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title={t(
          "accessibility:ariaLabels.languageSelector.selectLanguage",
          "Select Language"
        )}
      >
        <span className="language-name">{currentLang?.nativeName}</span>
        <span
          className={`language-arrow ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        >
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div
          className="language-dropdown"
          role="listbox"
          aria-label={t(
            "accessibility:ariaLabels.languageSelector.availableLanguages",
            "Available Languages"
          )}
        >
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${
                language.code === currentLanguage ? "active" : ""
              }`}
              onClick={() => handleLanguageChange(language.code)}
              role="option"
              aria-selected={language.code === currentLanguage}
              tabIndex={isOpen ? 0 : -1}
            >
              <span className="language-native">{language.nativeName}</span>
            </button>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="language-loading" aria-live="polite" role="status">
          <span className="loading-spinner" aria-hidden="true">
            ⟳
          </span>
          {t("common.labels.loading", "Loading...")}
        </div>
      )}
    </div>
  );
};
