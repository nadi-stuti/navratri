import React from "react";
import { NavratriDate } from "../types/enhanced-models";
import { useLanguage } from "../contexts/LanguageContext";
import "./NavratriDatePopup.css";

interface NavratriDatePopupProps {
  navratriDate: NavratriDate;
  isOpen: boolean;
  onClose: () => void;
}

const NavratriDatePopup: React.FC<NavratriDatePopupProps> = ({
  navratriDate,
  isOpen,
  onClose,
}) => {
  const { currentLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = currentLanguage === "en" ? "en-US" : `hi-IN`;

    return date.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const durgaForm = navratriDate.durgaForm;
  const currentLangKey = currentLanguage as keyof typeof durgaForm.name;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>
            {t("pages.dates.labels.day")} {navratriDate.day} -{" "}
            {durgaForm.name[currentLangKey] || durgaForm.name.en}
          </h2>
          <button
            className="close-button"
            onClick={onClose}
            aria-label={t("common.actions.close", "Close")}
          >
            ×
          </button>
        </div>

        <div className="popup-body">
          <div className="date-info">
            <p className="date-text">{formatDate(navratriDate.date)}</p>
            <p className="day-of-week">{navratriDate.dayOfWeek}</p>
          </div>

          <div className="goddess-section">
            <h3>{t("pages.dates.popup.goddess", "Goddess Information")}</h3>
            <div className="goddess-details">
              <p className="sanskrit-name">{durgaForm.sanskritName}</p>
              <p className="significance">
                {durgaForm.significance[currentLangKey] ||
                  durgaForm.significance.en}
              </p>
              <p className="symbolism">
                <strong>
                  {t("pages.dates.popup.symbolism", "Symbolism")}:{" "}
                </strong>
                {durgaForm.symbolism[currentLangKey] || durgaForm.symbolism.en}
              </p>
              <p className="blessings">
                <strong>
                  {t("pages.dates.popup.blessings", "Blessings")}:{" "}
                </strong>
                {durgaForm.blessings[currentLangKey] || durgaForm.blessings.en}
              </p>
            </div>
          </div>

          <div className="colors-section">
            <h3>{t("pages.dates.labels.colors")}</h3>
            <div className="color-palette">
              {navratriDate.recommendedColors.map((color, index) => (
                <div
                  key={index}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div className="times-section">
            <h3>
              {t("pages.dates.popup.auspiciousTimes", "Auspicious Times")}
            </h3>
            <div className="times-grid">
              <div className="time-item">
                <span className="time-label">
                  {t("pages.dates.popup.sunrise", "Sunrise")}:
                </span>
                <span className="time-value">
                  {navratriDate.auspiciousTimes.sunrise}
                </span>
              </div>
              <div className="time-item">
                <span className="time-label">
                  {t("pages.dates.popup.sunset", "Sunset")}:
                </span>
                <span className="time-value">
                  {navratriDate.auspiciousTimes.sunset}
                </span>
              </div>
              <div className="time-item">
                <span className="time-label">
                  {t("pages.dates.popup.pujaTime", "Puja Time")}:
                </span>
                <span className="time-value">
                  {navratriDate.auspiciousTimes.pujaTime}
                </span>
              </div>
            </div>
          </div>

          {navratriDate.preparations &&
            navratriDate.preparations[currentLangKey] && (
              <div className="preparations-section">
                <h3>{t("pages.dates.popup.preparations", "Preparations")}</h3>
                <ul>
                  {navratriDate.preparations[currentLangKey]?.map(
                    (prep, index) => (
                      <li key={index}>{prep}</li>
                    )
                  )}
                </ul>
              </div>
            )}

          {navratriDate.observances &&
            navratriDate.observances[currentLangKey] && (
              <div className="observances-section">
                <h3>{t("pages.dates.popup.observances", "Observances")}</h3>
                <ul>
                  {navratriDate.observances[currentLangKey]?.map(
                    (obs, index) => (
                      <li key={index}>{obs}</li>
                    )
                  )}
                </ul>
              </div>
            )}

          {navratriDate.specialRituals &&
            navratriDate.specialRituals[currentLangKey] && (
              <div className="rituals-section">
                <h3>
                  {t("pages.dates.popup.specialRituals", "Special Rituals")}
                </h3>
                <ul>
                  {navratriDate.specialRituals[currentLangKey]?.map(
                    (ritual, index) => (
                      <li key={index}>{ritual}</li>
                    )
                  )}
                </ul>
              </div>
            )}

          {navratriDate.fastingRules &&
            navratriDate.fastingRules[currentLangKey] && (
              <div className="fasting-section">
                <h3>{t("pages.dates.popup.fastingRules", "Fasting Rules")}</h3>
                <ul>
                  {navratriDate.fastingRules[currentLangKey]?.map(
                    (rule, index) => (
                      <li key={index}>{rule}</li>
                    )
                  )}
                </ul>
              </div>
            )}

          {durgaForm.mantras && durgaForm.mantras.length > 0 && (
            <div className="mantras-section">
              <h3>{t("pages.dates.popup.mantras", "Sacred Mantras")}</h3>
              {durgaForm.mantras.map((mantra, index) => (
                <div key={index} className="mantra-item">
                  <p className="sanskrit-text">{mantra.sanskrit}</p>
                  <p className="transliteration">
                    <strong>
                      {t(
                        "pages.dates.popup.transliteration",
                        "Transliteration"
                      )}
                      :{" "}
                    </strong>
                    {mantra.transliteration[currentLangKey] ||
                      mantra.transliteration.en}
                  </p>
                  <p className="meaning">
                    <strong>
                      {t("pages.dates.popup.meaning", "Meaning")}:{" "}
                    </strong>
                    {mantra.meaning[currentLangKey] || mantra.meaning.en}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavratriDatePopup;
