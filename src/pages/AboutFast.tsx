import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { navratriFastingInformation } from "../model/fasting-information";
import { FastingRule, ScriptureReference } from "../types/enhanced-models";
import "./AboutFast.css";

const AboutFast = () => {
  const { currentLanguage, t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedRule, setExpandedRule] = useState<string | null>(null);
  const [expandedScripture, setExpandedScripture] = useState<string | null>(
    null
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleRule = (ruleId: string) => {
    setExpandedRule(expandedRule === ruleId ? null : ruleId);
  };

  const toggleScripture = (index: number) => {
    const scriptureKey = `scripture-${index}`;
    setExpandedScripture(
      expandedScripture === scriptureKey ? null : scriptureKey
    );
  };

  const getTranslatedContent = (content: any) => {
    return content[currentLanguage as keyof typeof content] || content.en || "";
  };

  const renderSection = (
    title: string,
    content: React.ReactNode,
    sectionKey: string
  ) => (
    <div className="fasting-section">
      <button
        onClick={() => toggleSection(sectionKey)}
        className={`section-header ${
          expandedSection === sectionKey ? "expanded" : ""
        }`}
      >
        <span className="section-title">{title}</span>
        <span className="section-toggle">
          {expandedSection === sectionKey ? "−" : "+"}
        </span>
      </button>
      {expandedSection === sectionKey && (
        <div className="section-content">{content}</div>
      )}
    </div>
  );

  const renderReasonsForFasting = () => (
    <div className="reasons-grid">
      <div className="reason-item">
        <h4>
          {t("pages.fasting.reasons.spiritualTitle", "🕉️ Spiritual Benefits")}
        </h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.reasonsForFasting.spiritual
          )}
        </p>
      </div>

      <div className="reason-item">
        <h4>
          {t("pages.fasting.reasons.physicalTitle", "💪 Physical Benefits")}
        </h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.reasonsForFasting.physical
          )}
        </p>
      </div>

      <div className="reason-item">
        <h4>{t("pages.fasting.reasons.mentalTitle", "🧠 Mental Benefits")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.reasonsForFasting.mental
          )}
        </p>
      </div>

      <div className="reason-item">
        <h4>
          {t("pages.fasting.reasons.culturalTitle", "🏛️ Cultural Benefits")}
        </h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.reasonsForFasting.cultural
          )}
        </p>
      </div>
    </div>
  );

  const renderNavratriFastingSignificance = () => (
    <div className="significance-content">
      <div className="significance-item">
        <h4>{t("pages.fasting.significance.purposeTitle", "🎯 Purpose")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.navratriFastingSignificance.purpose
          )}
        </p>
      </div>

      <div className="significance-item">
        <h4>{t("pages.fasting.significance.benefitsTitle", "🌟 Benefits")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.navratriFastingSignificance.benefits
          )}
        </p>
      </div>

      <div className="significance-item">
        <h4>
          {t(
            "pages.fasting.significance.spiritualAspectsTitle",
            "🔮 Spiritual Aspects"
          )}
        </h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.navratriFastingSignificance
              .spiritualAspects
          )}
        </p>
      </div>
    </div>
  );

  const renderScriptureReferences = () => (
    <div className="scriptures-content">
      <p className="section-description">
        {t(
          "pages.fasting.scripturesIntro",
          "References about fasting in Hindu scriptures:"
        )}
      </p>

      {navratriFastingInformation.scriptureReferences.map(
        (scripture: ScriptureReference, index: number) => (
          <div key={index} className="scripture-item">
            <button
              onClick={() => toggleScripture(index)}
              className={`scripture-header ${
                expandedScripture === `scripture-${index}` ? "expanded" : ""
              }`}
            >
              <span className="scripture-title">
                {getTranslatedContent(scripture.source)}{" "}
                {scripture.chapter && `- ${scripture.chapter}`}{" "}
                {scripture.verse && `(${scripture.verse})`}
              </span>
              <span className="scripture-toggle">
                {expandedScripture === `scripture-${index}` ? "−" : "+"}
              </span>
            </button>

            {expandedScripture === `scripture-${index}` && (
              <div className="scripture-content">
                <div className="scripture-text">
                  <h5>
                    {t(
                      "pages.fasting.scripture.sanskritTitle",
                      "Sanskrit Text:"
                    )}
                  </h5>
                  <p className="sanskrit-text">{scripture.text}</p>
                </div>

                <div className="scripture-text">
                  <h5>
                    {t(
                      "pages.fasting.scripture.transliterationTitle",
                      "Transliteration:"
                    )}
                  </h5>
                  <p className="transliteration-text">
                    {getTranslatedContent(scripture.transliteration)}
                  </p>
                </div>

                <div className="scripture-text">
                  <h5>
                    {t(
                      "pages.fasting.scripture.translationTitle",
                      "Translation:"
                    )}
                  </h5>
                  <p className="translation-text">
                    {getTranslatedContent(scripture.translation)}
                  </p>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );

  const renderFastingRules = () => (
    <div className="rules-content">
      <p className="section-description">
        {t("pages.fasting.rulesIntro", "Navratri fasting rules and guidelines:")}
      </p>

      {navratriFastingInformation.fastingRules.map((rule: FastingRule) => (
        <div key={rule.id} className={`rule-item ${rule.importance}`}>
          <button
            onClick={() => toggleRule(rule.id)}
            className={`rule-header ${
              expandedRule === rule.id ? "expanded" : ""
            }`}
          >
            <span className="rule-title">
              {rule.importance === "mandatory"
                ? "🔴 "
                : rule.importance === "recommended"
                ? "🟡 "
                : "🟢 "}
              {getTranslatedContent(rule.title)}
            </span>
            <span className="rule-toggle">
              {expandedRule === rule.id ? "−" : "+"}
            </span>
          </button>

          {expandedRule === rule.id && (
            <div className="rule-content">
              <p>{getTranslatedContent(rule.description)}</p>
              <span className="rule-importance">
                {rule.importance === "mandatory"
                  ? t("pages.fasting.importance.mandatory", "MANDATORY")
                  : rule.importance === "recommended"
                  ? t("pages.fasting.importance.recommended", "RECOMMENDED")
                  : t("pages.fasting.importance.optional", "OPTIONAL")}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderFoodLists = () => (
    <div className="food-lists">
      <div className="food-list allowed">
        <h4>
          {t("pages.fasting.foodLists.allowedTitle", "✅ Allowed Foods")}
        </h4>
        <ul>
          {(
            navratriFastingInformation.allowedFoods[
              currentLanguage as keyof typeof navratriFastingInformation.allowedFoods
            ] ||
            navratriFastingInformation.allowedFoods.en ||
            []
          ).map((food: string, index: number) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>

      <div className="food-list forbidden">
        <h4>
          {t("pages.fasting.foodLists.forbiddenTitle", "❌ Forbidden Foods")}
        </h4>
        <ul>
          {(
            navratriFastingInformation.forbiddenFoods[
              currentLanguage as keyof typeof navratriFastingInformation.forbiddenFoods
            ] ||
            navratriFastingInformation.forbiddenFoods.en ||
            []
          ).map((food: string, index: number) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderHealthConsiderations = () => (
    <div className="health-content">
      <div className="health-item">
        <h4>{t("pages.fasting.health.benefitsTitle", "💚 Health Benefits")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.healthConsiderations.benefits
          )}
        </p>
      </div>

      <div className="health-item">
        <h4>{t("pages.fasting.health.precautionsTitle", "⚠️ Precautions")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.healthConsiderations.precautions
          )}
        </p>
      </div>

      <div className="health-item">
        <h4>{t("pages.fasting.health.avoidTitle", "🚫 Who Should Avoid Strict Fasting")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.healthConsiderations.whoShouldAvoid
          )}
        </p>
      </div>
    </div>
  );

  const renderModernAdaptations = () => (
    <div className="adaptations-content">
      <div className="adaptation-item">
        <h4>{t("pages.fasting.adaptations.workingTitle", "💼 Working Professionals")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.modernAdaptations.workingProfessionals
          )}
        </p>
      </div>

      <div className="adaptation-item">
        <h4>{t("pages.fasting.adaptations.studentsTitle", "📚 Students")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.modernAdaptations.students
          )}
        </p>
      </div>

      <div className="adaptation-item">
        <h4>{t("pages.fasting.adaptations.elderlyTitle", "👴 Elderly")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.modernAdaptations.elderly
          )}
        </p>
      </div>

      <div className="adaptation-item">
        <h4>{t("pages.fasting.adaptations.childrenTitle", "👶 Children")}</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.modernAdaptations.children
          )}
        </p>
      </div>
    </div>
  );

  return (
    <div className="about-fast-container">
      <div className="about-fast-header">
        <h1>
          {t("pages.fasting.header.title", "Navratri Fasting")}
        </h1>
        <p className="header-subtitle">
          {t("pages.fasting.header.subtitle", "A Path to Spiritual Purity and Divine Blessings")}
        </p>
      </div>

      <div className="fasting-sections">
        {renderSection(
          t("pages.fasting.sections.reasonsTitle", "🕉️ Reasons for Fasting in Hinduism"),
          renderReasonsForFasting(),
          "reasons"
        )}

        {renderSection(
          t("pages.fasting.sections.significanceTitle", "🌟 Navratri Fasting Significance"),
          renderNavratriFastingSignificance(),
          "significance"
        )}

        {renderSection(
          t("pages.fasting.sections.scripturesTitle", "📜 Hindu Scripture References About Fasting"),
          renderScriptureReferences(),
          "scriptures"
        )}

        {renderSection(
          t("pages.fasting.sections.rulesTitle", "📋 Comprehensive Fasting Rules and Guidelines"),
          renderFastingRules(),
          "rules"
        )}

        {renderSection(
          t("pages.fasting.sections.foodsTitle", "🍎 Food Guidelines"),
          renderFoodLists(),
          "foods"
        )}

        {renderSection(
          t("pages.fasting.sections.healthTitle", "💊 Health Considerations"),
          renderHealthConsiderations(),
          "health"
        )}

        {renderSection(
          t("pages.fasting.sections.adaptationsTitle", "🏢 Modern Lifestyle Adaptations"),
          renderModernAdaptations(),
          "adaptations"
        )}
      </div>

      <div className="about-fast-footer">
        <p>
          {t("pages.fasting.footer", "In India, fasting rules vary from community to community. It is always better to check with your family members and elders before deciding the menu.")}
        </p>
      </div>
    </div>
  );
};

export default AboutFast;
