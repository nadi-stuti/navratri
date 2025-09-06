---
inclusion: always
---

# Green Theme Guidelines

This application follows a **green/green-yellow color theme** throughout all components and pages. This theme was established based on the RecipeCategories component design and should be consistently applied across the entire application.

## Primary Color Palette

### Light Theme
- **Primary Accent**: `#22c55e` (Green 500)
- **Secondary Accent**: `#16a34a` (Green 600) 
- **Link Colors**: `rgb(64, 78, 1)` (Dark olive green)
- **Link Hover**: `green`
- **Button Background**: `#e0e0e0` (Light gray)
- **Button Hover**: `#d0d0d0` (Slightly darker gray)

### Dark Theme  
- **Primary Accent**: `#adff2f` (Green-yellow)
- **Secondary Accent**: `#9acd32` (Yellow-green)
- **Button Background**: `#2d5016` (Dark green)
- **Button Hover**: `#3d6b1f` (Lighter dark green)
- **Link Colors**: `greenyellow`
- **Link Hover**: `green`

## Implementation Rules

1. **Never use blue, violet, or purple colors** - These have been replaced with green variants
2. **Use CSS custom properties** - All colors should reference the CSS variables defined in `src/index.css`
3. **Maintain accessibility** - Ensure sufficient contrast ratios with green color choices
4. **Consistent accent usage** - Use `var(--accent-color)` for interactive elements, focus states, and highlights
5. **Theme-aware components** - All components should work seamlessly in both light and dark themes

## Component-Specific Guidelines

### Buttons and Interactive Elements
- Use `var(--accent-color)` for focus states and active states
- Use `var(--button-bg)` and `var(--button-hover)` for button backgrounds

### Links
- Use `var(--link-color)` for default link color
- Use `var(--link-hover)` for hover states

### Borders and Highlights
- Use green (`green`) or `var(--accent-color)` for borders that need emphasis
- Example: RecipeCategories uses `border: 2px solid green`

### Form Elements
- Active/selected states should use `var(--accent-color)`
- Focus outlines should use `var(--accent-color)`

## Examples of Correct Usage

```css
/* Good - Uses theme variables */
.my-component {
  border: 2px solid var(--accent-color);
  background-color: var(--button-bg);
}

.my-component:hover {
  background-color: var(--button-hover);
  border-color: var(--accent-color);
}

/* Good - Direct green usage for emphasis */
.filter.active {
  background-color: green;
  color: white;
}
```

## What NOT to Use

```css
/* Bad - Blue/purple colors */
.component {
  color: #646cff; /* Old blue accent */
  border: 1px solid blue;
  background: purple;
  accent-color: violet;
}
```

## Future Development

When adding new components or features:
1. Always reference this theme guide
2. Use the established CSS custom properties
3. Test in both light and dark themes
4. Ensure the green theme is consistently applied
5. Avoid introducing any blue, violet, or purple colors

This green theme creates a cohesive, nature-inspired visual identity that aligns with the recipe/food context of the application.

## Implementation Status

✅ **COMPLETED**: The entire application has been converted from blue/violet/purple colors to the green/green-yellow theme:

### Updated Components:
- **Main CSS Variables** (`src/index.css`): Updated accent colors from `#646cff` to green variants
- **ThemeToggle Component**: Updated gradient colors to use green instead of blue/yellow
- **EnhancedRecipeList**: Updated tag colors and primary colors to green theme
- **RecipeSearch**: Updated primary and secondary colors from orange/blue to green
- **RandomRecipe**: Updated focus outline from blue to green
- **More Page**: Updated tip icons and borders from orange to green
- **RecipeNotFound**: Updated button colors from blue to green
- **RecipeCategories**: Already using green theme (reference component)
- **FilterSelector**: Already using green theme
- **DurgaFormsDisplay**: Already using green theme
- **Dates Page**: Already using green theme
- **AboutFast Page**: Already using green theme

### Color Mapping:
- **Light Theme Accent**: `#646cff` → `#22c55e` (Green 500)
- **Dark Theme Accent**: `#646cff` → `#adff2f` (Green-yellow)
- **Dark Theme Buttons**: `chocolate` → `#2d5016` (Dark green)
- **All focus states, active states, and interactive elements** now use green variants

The application now consistently follows the green/green-yellow color theme established by the RecipeCategories component across all pages and components.