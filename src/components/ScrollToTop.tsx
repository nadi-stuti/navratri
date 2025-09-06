import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * whenever the route changes. This ensures users start reading from the top
 * when navigating to a new page.
 * 
 * Features:
 * - Smooth scrolling animation for better UX
 * - Handles both desktop and mobile scenarios
 * - Resets scroll position for all route changes
 */
const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Small delay to ensure the new page content is rendered
        const scrollToTop = () => {
            // Try smooth scrolling first
            try {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } catch (error) {
                // Fallback for older browsers that don't support smooth scrolling
                window.scrollTo(0, 0);
            }
        };

        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
            scrollToTop();
        });
    }, [pathname]);

    // This component doesn't render anything
    return null;
};

export default ScrollToTop;