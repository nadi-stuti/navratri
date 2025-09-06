# Scroll to Top Implementation

This app includes comprehensive scroll-to-top functionality to improve user experience when navigating between pages.

## Components

### 1. ScrollToTop Component
- **Location**: `src/components/ScrollToTop.tsx`
- **Purpose**: Automatically scrolls to top when route changes
- **Usage**: Already integrated in `Router.tsx` - works automatically
- **Features**:
  - Smooth scrolling animation
  - Fallback for older browsers
  - Works on all route changes

### 2. BackToTopButton Component
- **Location**: `src/components/BackToTopButton.tsx`
- **Purpose**: Floating button that appears when user scrolls down
- **Usage**: Already integrated in `Router.tsx` - appears automatically
- **Features**:
  - Only visible after scrolling 300px down
  - Smooth scroll animation
  - Green theme consistent with app design
  - Mobile responsive
  - Accessible with proper ARIA labels

### 3. Custom Hooks
- **Location**: `src/hooks/useScrollToTop.ts`
- **Purpose**: Programmatic scroll-to-top functionality
- **Usage**: Import and use in individual components if needed

## How It Works

1. **Automatic Route Scrolling**: When user navigates to any page (recipes, about pages, etc.), the page automatically scrolls to top
2. **Manual Scroll Button**: On long pages, a floating button appears in the bottom-right corner allowing users to quickly return to top
3. **Smooth Animation**: Both automatic and manual scrolling use smooth animations for better UX

## Customization

### BackToTopButton Props
```tsx
<BackToTopButton 
  threshold={300}        // Show button after 300px scroll
  behavior="smooth"      // Scroll behavior
  className="custom"     // Custom CSS class
>
  ↑                     // Custom button content
</BackToTopButton>
```

### Custom Hook Usage
```tsx
import { useScrollToTop } from '../hooks/useScrollToTop';

const MyComponent = () => {
  const scrollToTop = useScrollToTop();
  
  // Manual trigger
  const handleClick = () => {
    scrollToTop();
  };
  
  return <button onClick={handleClick}>Go to Top</button>;
};
```

## Browser Support
- Modern browsers: Full smooth scrolling support
- Older browsers: Instant scroll fallback
- Mobile: Fully responsive and touch-friendly

## Accessibility
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators for accessibility compliance