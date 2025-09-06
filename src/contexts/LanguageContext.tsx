import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, defaultLanguage, type Language } from '../locales/languages';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => Promise<void>;
  availableLanguages: Language[];
  t: (key: string, defaultValue?: string, interpolation?: Record<string, any>) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { t: i18nT, i18n } = useTranslation(['common', 'pages', 'recipes', 'festival', 'accessibility']);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || defaultLanguage);

  // Wrapper function to match our expected signature
  const t = (key: string, defaultValue?: string, interpolation?: Record<string, any>): string => {
    // Handle namespace-prefixed keys (e.g., "pages.location.title" or "accessibility:ariaLabels.themeToggle.switchTo")
    if (key.includes(':') || key.includes('.')) {
      let namespace: string;
      let namespaceKey: string;
      
      if (key.includes(':')) {
        // Handle colon-separated namespace (e.g., "accessibility:ariaLabels.themeToggle.switchTo")
        [namespace, namespaceKey] = key.split(':', 2);
      } else {
        // Handle dot-separated namespace (e.g., "pages.location.title")
        const parts = key.split('.');
        const potentialNamespace = parts[0];
        
        // Check if the first part is a known namespace
        if (['common', 'pages', 'recipes', 'festival', 'accessibility'].includes(potentialNamespace)) {
          namespace = potentialNamespace;
          namespaceKey = parts.slice(1).join('.');
        } else {
          // Fallback to original behavior
          return i18nT(key, { defaultValue: defaultValue || key, ...interpolation });
        }
      }
      
      return i18nT(namespaceKey, { 
        ns: namespace, 
        defaultValue: defaultValue || key,
        ...interpolation
      });
    }
    
    // Fallback to original behavior for keys without namespace prefix
    return i18nT(key, { defaultValue: defaultValue || key, ...interpolation });
  };

  useEffect(() => {
    // Update current language when i18n language changes
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = async (lang: string): Promise<void> => {
    if (lang === currentLanguage) return;
    
    setIsLoading(true);
    try {
      await i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    availableLanguages: supportedLanguages,
    t,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};