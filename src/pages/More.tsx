import { useState } from 'react';
import { getMoreContentData, MoreSection, MoreContent } from '../model/more-content-data';
import { useLanguage } from '../contexts/LanguageContext';
import './More.css';

const More = () => {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Get translated content data
  const moreContentData = getMoreContentData(t);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderContent = (content: MoreContent, index: number) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p key={index} className="content-paragraph">
            {content.content}
          </p>
        );

      case 'list':
        return (
          <div key={index} className="content-list">
            {content.subtitle && <h4>{content.subtitle}</h4>}
            <ul>
              {Array.isArray(content.content) && content.content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case 'subsection':
        return (
          <div key={index} className="content-subsection">
            {content.subtitle && <h4>{content.subtitle}</h4>}
            <p className="content-subsection-text">{content.content}</p>
          </div>
        );

      case 'tip':
        return (
          <div key={index} className="content-tip">
            <div className="tip-header">
              <span className="tip-icon">💡</span>
              <span className="tip-label">{t('common:ui.tip')}</span>
            </div>
            <p className="tip-content">{content.content}</p>
          </div>
        );

      case 'quote':
        return (
          <blockquote key={index} className="content-quote">
            {content.content}
          </blockquote>
        );

      default:
        return null;
    }
  };

  const renderSection = (title: string, content: React.ReactNode, sectionKey: string) => (
    <div className="more-section">
      <button
        onClick={() => toggleSection(sectionKey)}
        className={`section-header ${expandedSection === sectionKey ? 'expanded' : ''}`}
      >
        <span className="section-title">{title}</span>
        <span className="section-toggle">
          {expandedSection === sectionKey ? t('common:ui.collapse') : t('common:ui.expand')}
        </span>
      </button>
      {expandedSection === sectionKey && (
        <div className="section-content">
          {content}
        </div>
      )}
    </div>
  );

  const renderSectionContent = (section: MoreSection) => (
    <div>
      {section.content.map((content, index) => renderContent(content, index))}

      {/* Traditional North Indian Fasting Ingredients for fasting-traditions section */}
      {section.id === 'fasting-traditions' && (
        <div className="original-fasting-info">
          <h3>{t('pages:more.fastingTraditions.traditionalIngredients.title')}</h3>
          <p>
            {t('pages:more.fastingTraditions.traditionalIngredients.introduction')}
          </p>
          <p>
            {t('pages:more.fastingTraditions.traditionalIngredients.northIndianNote')}
          </p>
          <ul>
            <li>
              {t('pages:more.fastingTraditions.traditionalIngredients.ingredients.floursAndGrains')}
            </li>
            <li>{t('pages:more.fastingTraditions.traditionalIngredients.ingredients.sabudana')}</li>
            <li>{t('pages:more.fastingTraditions.traditionalIngredients.ingredients.peanuts')}</li>
            <li>{t('pages:more.fastingTraditions.traditionalIngredients.ingredients.nutsAndDryFruits')}</li>
            <li>{t('pages:more.fastingTraditions.traditionalIngredients.ingredients.rockSalt')}</li>
            <li>
              {t('pages:more.fastingTraditions.traditionalIngredients.ingredients.spicesAndHerbs')}
            </li>
          </ul>
          <p>
            {t('pages:more.fastingTraditions.traditionalIngredients.conclusion')}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="more-container">
      <div className="more-header">
        <h1>{t('pages:more.title')}</h1>
        <p className="header-subtitle">
          {t('pages:more.headerSubtitle')}
        </p>
      </div>

      <div className="more-sections">
        {moreContentData.map((section) =>
          renderSection(
            section.title,
            renderSectionContent(section),
            section.id
          )
        )}
      </div>
    </div>
  );
};

export default More;
