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
        {currentLanguage === "hi"
          ? "नवरात्रि व्रत के नियम और दिशानिर्देश:"
          : currentLanguage === "ta"
          ? "நவராத்திரி விரத விதிகள் மற்றும் வழிகாட்டுதல்கள்:"
          : currentLanguage === "mr"
          ? "नवरात्री व्रताचे नियम आणि मार्गदर्शन:"
          : "Navratri fasting rules and guidelines:"}
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
                  ? currentLanguage === "hi"
                    ? "अनिवार्य"
                    : currentLanguage === "ta"
                    ? "கட்டாயம்"
                    : currentLanguage === "mr"
                    ? "अनिवार्य"
                    : "MANDATORY"
                  : rule.importance === "recommended"
                  ? currentLanguage === "hi"
                    ? "सुझावित"
                    : currentLanguage === "ta"
                    ? "பரிந்துரைக்கப்பட்டது"
                    : currentLanguage === "mr"
                    ? "शिफारसीत"
                    : "RECOMMENDED"
                  : currentLanguage === "hi"
                  ? "वैकल्पिक"
                  : currentLanguage === "ta"
                  ? "விருப்பமானது"
                  : currentLanguage === "mr"
                  ? "पर्यायी"
                  : "OPTIONAL"}
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
          ✅{" "}
          {currentLanguage === "hi"
            ? "अनुमतित खाद्य पदार्थ"
            : currentLanguage === "ta"
            ? "அனுமதிக்கப்பட்ட உணவுகள்"
            : currentLanguage === "mr"
            ? "परवानगी असलेले पदार्थ"
            : "Allowed Foods"}
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
          ❌{" "}
          {currentLanguage === "hi"
            ? "निषिद्ध खाद्य पदार्थ"
            : currentLanguage === "ta"
            ? "தடைசெய்யப்பட்ட உணவுகள்"
            : currentLanguage === "mr"
            ? "निषिद्ध पदार्थ"
            : "Forbidden Foods"}
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
        <h4>💚 Health Benefits</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.healthConsiderations.benefits
          )}
        </p>
      </div>

      <div className="health-item">
        <h4>⚠️ Precautions</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.healthConsiderations.precautions
          )}
        </p>
      </div>

      <div className="health-item">
        <h4>🚫 Who Should Avoid Strict Fasting</h4>
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
        <h4>💼 Working Professionals</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.modernAdaptations.workingProfessionals
          )}
        </p>
      </div>

      <div className="adaptation-item">
        <h4>📚 Students</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.modernAdaptations.students
          )}
        </p>
      </div>

      <div className="adaptation-item">
        <h4>👴 Elderly</h4>
        <p>
          {getTranslatedContent(
            navratriFastingInformation.modernAdaptations.elderly
          )}
        </p>
      </div>

      <div className="adaptation-item">
        <h4>👶 Children</h4>
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
          {currentLanguage === "hi"
            ? "नवरात्रि उपवास"
            : currentLanguage === "ta"
            ? "நவராத்திரி விரதம்"
            : currentLanguage === "mr"
            ? "नवरात्री उपवास"
            : "Navratri Fasting"}
        </h1>
        <p className="header-subtitle">
          {currentLanguage === "hi"
            ? "आध्यात्मिक शुद्धता और दैवीय आशीर्वाद का मार्ग"
            : currentLanguage === "ta"
            ? "ஆன்மீக தூய்மை மற்றும் தெய்வீக ஆசீர்வாதத்தின் பாதை"
            : currentLanguage === "mr"
            ? "आध्यात्मिक शुद्धता आणि दैवी आशीर्वादाचा मार्ग"
            : "A Path to Spiritual Purity and Divine Blessings"}
        </p>
      </div>

      <div className="fasting-sections">
        {renderSection(
          currentLanguage === "hi"
            ? "🕉️ हिंदू धर्म में उपवास के कारण"
            : currentLanguage === "ta"
            ? "🕉️ இந்து மதத்தில் விரதத்தின் காரணங்கள்"
            : currentLanguage === "mr"
            ? "🕉️ हिंदू धर्मात उपवासाची कारणे"
            : "🕉️ Reasons for Fasting in Hinduism",
          renderReasonsForFasting(),
          "reasons"
        )}

        {renderSection(
          currentLanguage === "hi"
            ? "🌟 नवरात्रि उपवास का महत्व"
            : currentLanguage === "ta"
            ? "🌟 நவராத்திரி விரதத்தின் முக்கியத்துவம்"
            : currentLanguage === "mr"
            ? "🌟 नवरात्री उपवासाचे महत्त्व"
            : "🌟 Navratri Fasting Significance",
          renderNavratriFastingSignificance(),
          "significance"
        )}

        {renderSection(
          currentLanguage === "hi"
            ? "📜 हिंदू शास्त्रों में उपवास के संदर्भ"
            : currentLanguage === "ta"
            ? "📜 இந்து சாஸ்திரங்களில் விரதம் பற்றிய குறிப்புகள்"
            : currentLanguage === "mr"
            ? "📜 हिंदू शास्त्रांमधील उपवासाचे संदर्भ"
            : "📜 Hindu Scripture References About Fasting",
          renderScriptureReferences(),
          "scriptures"
        )}

        {renderSection(
          currentLanguage === "hi"
            ? "📋 नवरात्रि उपवास के नियम और दिशानिर्देश"
            : currentLanguage === "ta"
            ? "📋 நவராத்திரி விரத விதிகள் மற்றும் வழிகாட்டுதல்கள்"
            : currentLanguage === "mr"
            ? "📋 नवरात्री उपवासाचे नियम आणि मार्गदर्शन"
            : "📋 Comprehensive Fasting Rules and Guidelines",
          renderFastingRules(),
          "rules"
        )}

        {renderSection(
          currentLanguage === "hi"
            ? "🍎 खाद्य पदार्थों की सूची"
            : currentLanguage === "ta"
            ? "🍎 உணவுப் பொருட்களின் பட்டியல்"
            : currentLanguage === "mr"
            ? "🍎 खाद्यपदार्थांची यादी"
            : "🍎 Food Guidelines",
          renderFoodLists(),
          "foods"
        )}

        {renderSection(
          currentLanguage === "hi"
            ? "💊 स्वास्थ्य संबंधी विचार"
            : currentLanguage === "ta"
            ? "💊 சுகாதார பரிசீலனைகள்"
            : currentLanguage === "mr"
            ? "💊 आरोग्य संबंधी विचार"
            : "💊 Health Considerations",
          renderHealthConsiderations(),
          "health"
        )}

        {renderSection(
          currentLanguage === "hi"
            ? "🏢 आधुनिक जीवनशैली के लिए अनुकूलन"
            : currentLanguage === "ta"
            ? "🏢 நவீன வாழ்க்கை முறைக்கான தழுவல்கள்"
            : currentLanguage === "mr"
            ? "🏢 आधुनिक जीवनशैलीसाठी अनुकूलन"
            : "🏢 Modern Lifestyle Adaptations",
          renderModernAdaptations(),
          "adaptations"
        )}
      </div>

      <div className="about-fast-footer">
        <p>
          {currentLanguage === "hi"
            ? "भारत में उपवास के नियम समुदाय से समुदाय में भिन्न होते हैं। मेनू तय करने से पहले अपने परिवार के सदस्यों और बुजुर्गों से सलाह लेना हमेशा बेहतर होता है।"
            : currentLanguage === "ta"
            ? "இந்தியாவில் விரத விதிகள் சமூகத்திற்கு சமூகம் மாறுபடும். மெனுவை முடிவு செய்வதற்கு முன் உங்கள் குடும்ப உறுப்பினர்கள் மற்றும் பெரியவர்களுடன் ஆலோசிப்பது எப்போதும் நல்லது."
            : currentLanguage === "mr"
            ? "भारतात उपवासाचे नियम समुदायानुसार बदलतात. मेनू ठरवण्यापूर्वी आपल्या कुटुंबातील सदस्यांशी आणि वडिलधाऱ्यांशी सल्लामसलत करणे नेहमीच चांगले असते."
            : "In India, fasting rules vary from community to community. It is always better to check with your family members and elders before deciding the menu."}
        </p>
      </div>
    </div>
  );
};

export default AboutFast;
