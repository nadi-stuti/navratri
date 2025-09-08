# Components

This directory contains reusable React components used throughout the application.

## Core Components

### Navigation and Layout

- `BackToTopButton`: Scrolls page back to top
- `SkipLink`: Accessibility component for keyboard navigation
- `ScrollToTop`: Manages scroll position during navigation

### Festival Information

- `DurgaFormsDisplay`: Displays information about nine forms of Durga
- `NavratriDatePopup`: Shows important Navratri dates

### Recipe Management

- `RecipeCard`: Display individual recipe information
- `RecipeSearch`: Recipe search functionality
- `RecipeRecommendations`: Suggests relevant recipes
- `RandomRecipe`: Shows random recipe suggestions
- `EnhancedRecipeList`: Advanced recipe listing (currently disabled)

### UI Components

- `FilterSelector`: Filter interface for recipes
- `LanguageSelector`: Language selection dropdown
- `ThemeToggle`: Light/dark theme switcher

## Component Guidelines

1. **Accessibility**

   - All components must include proper ARIA labels
   - Support keyboard navigation
   - Use semantic HTML elements

2. **Internationalization**

   - Use translation keys from i18n system
   - Avoid hardcoded strings
   - Support RTL languages where applicable

3. **State Management**

   - Use React hooks for local state
   - Leverage context for global state
   - Implement proper loading states

4. **Styling**
   - Each component has its own CSS module
   - Follow responsive design principles
   - Support both light and dark themes

## Enhancement Areas

Some components require review and optimization:

1. **EnhancedRecipeList**

   - Currently disabled
   - Needs performance optimization
   - Search functionality needs refinement

2. **Recipe Components**

   - Consider unifying recipe-related components
   - Improve search algorithm
   - Add filtering capabilities

3. **Festival Information**
   - Add more interactive elements
   - Improve mobile responsiveness
   - Enhance visual presentation
