import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './SkipLink.css';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="skip-link">
      {children}
    </a>
  );
};

export const SkipToMain: React.FC = () => {
  const { t } = useLanguage();
  return (
    <SkipLink href="#main-content">
      {t('accessibility:instructions.skipToMain', 'Skip to main content')}
    </SkipLink>
  );
};

export default SkipLink;