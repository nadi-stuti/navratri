import { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const useAccessibilityAnnouncements = () => {
  const { t } = useLanguage();

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Create a live region for screen reader announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('class', 'sr-only');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    
    document.body.appendChild(liveRegion);
    
    // Add the message
    liveRegion.textContent = message;
    
    // Remove after announcement
    setTimeout(() => {
      if (document.body.contains(liveRegion)) {
        document.body.removeChild(liveRegion);
      }
    }, 1000);
  }, []);

  const announceLoading = useCallback((type: 'recipes' | 'translations' | 'page' | 'search' | 'filters') => {
    const message = t(`accessibility:loadingStates.loading${type.charAt(0).toUpperCase() + type.slice(1)}`, `Loading ${type}...`);
    announce(message);
  }, [t, announce]);

  const announceError = useCallback((type: 'recipeNotFound' | 'translationError' | 'networkError' | 'searchError' | 'filterError' | 'generalError') => {
    const message = t(`accessibility:errorAnnouncements.${type}`, 'An error occurred');
    announce(message, 'assertive');
  }, [t, announce]);

  const announceStatus = useCallback((type: 'recipeLoaded' | 'searchCompleted' | 'filtersApplied' | 'languageChanged' | 'themeChanged' | 'pageLoaded', params?: Record<string, any>) => {
    const message = t(`accessibility:statusAnnouncements.${type}`, '', params);
    announce(message);
  }, [t, announce]);

  return {
    announce,
    announceLoading,
    announceError,
    announceStatus
  };
};