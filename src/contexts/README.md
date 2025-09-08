# Contexts

This directory contains React Context providers used for global state management.

## Available Contexts

### `LanguageContext`

Manages application language settings.

- Current language
- Language switching
- Translation loading

### `ThemeContext`

Handles theme-related state.

- Light/dark mode
- Theme switching
- System preference sync

### `UserPreferencesContext`

Stores user preferences.

- Language preference
- Theme preference
- Other settings

## Implementation Guidelines

1. **Structure**

   - Provider component
   - Context hook
   - TypeScript types

2. **State Management**

   - Initial state
   - Update functions
   - Local storage sync

3. **Performance**
   - Memoization
   - Selective updates
   - Optimized re-renders

## Best Practices

1. **Usage**

   - Clear documentation
   - Type safety
   - Error boundaries

2. **Testing**

   - Provider testing
   - Hook testing
   - Integration tests

3. **Maintenance**
   - Regular audits
   - Performance monitoring
   - Code cleanup
