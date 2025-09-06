import { useEffect } from 'react';

/**
 * Custom hook that provides scroll-to-top functionality
 * Can be used in individual components for more granular control
 * 
 * @param trigger - Optional dependency that triggers scroll when changed
 * @param behavior - Scroll behavior: 'smooth' | 'instant' | 'auto'
 * @param delay - Optional delay in milliseconds before scrolling
 */
export const useScrollToTop = (
  trigger?: any,
  behavior: 'smooth' | 'instant' | 'auto' = 'smooth',
  delay: number = 0
) => {
  useEffect(() => {
    const scrollToTop = () => {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior
        });
      } catch (error) {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      requestAnimationFrame(scrollToTop);
    }
  }, [trigger, behavior, delay]);

  // Return a function to manually trigger scroll to top
  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return scrollToTop;
};

/**
 * Hook specifically for scrolling to top on component mount
 * Useful for pages that should always start at the top
 */
export const useScrollToTopOnMount = (behavior: 'smooth' | 'instant' | 'auto' = 'smooth') => {
  useEffect(() => {
    const scrollToTop = () => {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(scrollToTop);
  }, [behavior]);
};