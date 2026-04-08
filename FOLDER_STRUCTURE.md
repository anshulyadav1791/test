# SeeCar Project Structure

## Detailed Folder Organization

### `/app` - Application Routes & Screens
Contains all route files using Expo Router's file-based routing system.

```
app/
├── _layout.tsx           # Root layout - navigation config, theme provider
├── login.tsx             # Login screen (initialRouteName)
├── register.tsx          # User registration screen
├── modal.tsx             # Modal example screen
└── (tabs)/               # Tab-based navigation group
    ├── _layout.tsx       # Tab layout - configures bottom tabs
    ├── index.tsx         # Home screen - ride stats, quick actions
    └── explore.tsx       # Routes screen - discover and explore
```

**Key Features:**
- File-based routing (no navigation config needed)
- Group routes with parentheses (e.g., `(tabs)`)
- Login is the entry point, directs to `(tabs)` on auth

---

### `/components` - Reusable UI Components
Shared, reusable components used across screens.

```
components/
├── bicycle.tsx              # Animated bicycle illustration
├── external-link.tsx        # External link component
├── haptic-tab.tsx          # Tab with haptic feedback
├── hello-wave.tsx          # Welcome wave component
├── parallax-scroll-view.tsx # Parallax scroll container
├── themed-text.tsx         # Text with theme support
├── themed-view.tsx         # View with theme support
└── ui/
    ├── icon-symbol.ios.tsx # iOS-specific icons
    ├── icon-symbol.tsx     # Icon symbol component
    └── collapsible.tsx     # Collapsible component
```

**Best Practices:**
- Keep components small and focused
- Use `ThemedText` and `ThemedView` for consistent styling
- Export types alongside components

---

### `/constants` - App Constants & Configuration
Static values, theme definitions, and app configuration.

```
constants/
└── theme.ts  # Color palettes and font definitions
```

**Content:**
```typescript
export const Colors = {
  light: { /* light mode colors */ },
  dark: { /* dark mode colors */ }
}

export const Fonts = {
  sans: 'Avenir Next',
  rounded: 'Avenir Next Rounded',
  // ...
}
```

---

### `/hooks` - Custom React Hooks
Reusable logic and state management hooks.

```
hooks/
├── use-color-scheme.ts      # Get current color scheme
├── use-color-scheme.web.ts  # Web-specific color scheme
└── use-theme-color.ts       # Get themed color value
```

**Usage:**
```typescript
const palette = Colors.dark;
const color = useThemeColor({ light: '#000', dark: '#fff' }, 'text');
```

---

### `/utils` - Utility Functions
Helper functions for data processing, validation, and API calls.

```
utils/
├── validation.ts  # Email, password, input validation
├── constants.ts   # API endpoints, error messages
└── (future: auth, storage, etc.)
```

**Functions:**
- `validateEmail()` - Validate email format
- `validatePassword()` - Check password requirements
- `formatDistance()` - Format km/m distances
- `sanitizeInput()` - Clean user input

---

### `/types` - TypeScript Type Definitions
Centralized types and interfaces for the app.

```
types/
└── index.ts  # All type definitions exported
```

**Common Types:**
- `User` - User profile data
- `AuthState` - Auth status
- `RouteItem` - Route/track data
- `MaintenanceTask` - Bike maintenance
- `RideStats` - Ride statistics

---

### `/assets` - Static Resources
Images, fonts, videos, and other media files.

```
assets/
├── images/              # App images and illustrations
└── (potentially: fonts, videos, etc.)
```

---

### `/screens` - Screen Components (Optional)
Alternative location for screen-specific components.

```
screens/
├── auth/
│   ├── LoginScreen.tsx
│   └── RegisterScreen.tsx
└── app/
    ├── HomeScreen.tsx
    └── ExploreScreen.tsx
```

**Note:** Currently, screens are in `/app` using file-based routing. This folder can be used for shared screen components.

---

## Routing Structure

### Navigation Flow

```
Login Screen (/app/login.tsx)
    ↓
Register Screen (/app/register.tsx)
    ↓
App Tabs (/app/(tabs)/)
├── Home Tab (index.tsx)
└── Explore Tab (explore.tsx)
```

### Stack Navigation
- **Root Stack:** Handles auth/non-auth flow
- **Tab Stack:** Main app navigation

---

## Styling Strategy

### 1. **Theme System**
All colors defined in `constants/theme.ts`:
```typescript
const palette = Colors.dark; // Use dark theme
<Text style={{ color: palette.text }}>Hello</Text>
```

### 2. **Dynamic Styles**
Styles adapt based on theme:
```typescript
<View style={[styles.card, { backgroundColor: palette.card, borderColor: palette.border }]}>
```

### 3. **Tailwind CSS (Optional)**
Configured in `tailwind.config.js` with nativewind.

### 4. **StyleSheet Optimization**
Use `StyleSheet.create()` for optimized style objects.

---

## Color Palette

### Dark Mode (Default)
```
Background:     #010101 / #020202
Card:           #111111 / #121212
Text:           #f8f3ea / #ddfbf8
Primary:        #ff8a1c (orange)
Accent:         #ffb347 (gold)
Border:         #232323 / #2b2b2b
Icons:          #e7b96a / #d9b377
```

### Semantic Colors
```
Success:  #22c55e (green)
Warning:  #fb923c (orange)
Error:    #ef4444 (red)
```

---

## File Naming Conventions

- **Components:** `PascalCase.tsx` (e.g., `LoginButton.tsx`)
- **Screens:** `snake-case.tsx` (e.g., `login.tsx`, `home-screen.tsx`)
- **Utilities:** `snake-case.ts` (e.g., `validation.ts`)
- **Types:** `PascalCase.ts` (e.g., `User.ts`)
- **Hooks:** `use-[name].ts` (e.g., `use-auth.ts`)

---

## Module Imports

### Absolute Imports (Using `@`)
```typescript
import { Colors } from '@/constants/theme';
import { validateEmail } from '@/utils/validation';
import { ThemedText } from '@/components/themed-text';
```

**Configuration:** `tsconfig.json` / `package.json` baseUrl setting

### Relative Imports
```typescript
import { useColorScheme } from '../hooks/use-color-scheme';
```

---

## Best Practices

1. **Keep Components Focused** - One responsibility per component
2. **Use TypeScript** - Type all props and returns
3. **Centralize Colors** - Always use theme constants
4. **Consistent Naming** - Follow conventions strictly
5. **Optimize Re-renders** - Memoize expensive components
6. **Comment Complex Logic** - Document non-obvious code
7. **Test Early** - Build screens incrementally
8. **Follow DRY** - Don't repeat code, create utilities

---

## Adding New Screens

1. Create file in `/app` or `/app/(tabs)`
2. Follow naming conventions
3. Import theme from `@/constants/theme`
4. Extend existing components
5. Add TypeScript types from `@/types`

---

## Next Steps

- [ ] Implement authentication service
- [ ] Add state management (Redux/Context)
- [ ] Create API service layer
- [ ] Build custom hooks for data fetching
- [ ] Add form validation utilities
- [ ] Create theme switcher (light/dark)
- [ ] Build responsive breakpoints
- [ ] Add error boundaries
- [ ] Implement analytics

---

**Last Updated:** April 2026
**Version:** 1.0.0
