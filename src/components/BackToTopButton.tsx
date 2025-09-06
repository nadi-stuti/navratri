import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./BackToTopButton.css";

interface BackToTopButtonProps {
  /** Threshold in pixels after which the button becomes visible */
  threshold?: number;
  /** Scroll behavior when button is clicked */
  behavior?: "smooth" | "instant" | "auto";
  /** Custom className for styling */
  className?: string;
  /** Custom text or icon for the button */
  children?: React.ReactNode;
}

/**
 * BackToTopButton component that appears when user scrolls down
 * and allows them to quickly return to the top of the page
 */
const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  threshold = 300,
  behavior = "smooth",
  className = "",
  children = "↑",
}) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [threshold]);

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: behavior as ScrollBehavior,
      });
    } catch (error) {
      // Fallback for older browsers - use console.debug to avoid unused variable lint
      console.debug(error);
      window.scrollTo(0, 0);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className={`back-to-top-button ${className}`}
      onClick={scrollToTop}
      aria-label={t(
        "accessibility.ariaLabels.viewControls.scrollToTop",
        "Scroll to top"
      )}
      title={t("common.actions.backToTop", "Back to top")}
    >
      {children}
    </button>
  );
};

export default BackToTopButton;
