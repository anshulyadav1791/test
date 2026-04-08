/**
 * SeeCar Design Tokens
 * Central reference for all design system values
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COLORS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const COLOR = {
  // Primary Brand Colors
  Primary: {
    Light: '#ff8a1c',    // Main orange (light mode)
    Dark: '#ff9f3c',     // Main orange (dark mode)
    Desaturated: '#d97706',
    Bright: '#ffa500',
  },

  // Backgrounds
  Background: {
    Primary: '#010101',   // Deepest black
    Secondary: '#020202', // Near black
    Tertiary: '#050505',  // Charcoal
  },

  // Cards & Surface
  Surface: {
    Primary: '#111111',   // Dark card background
    Secondary: '#121212', // Alternative card
    Elevated: '#1a1a1a',  // Hover/elevated state
  },

  // Text Colors
  Text: {
    Primary: '#f8f3ea',    // Light cream (primary text)
    Secondary: '#e7b96a',  // Gold/tan (secondary)
    Tertiary: '#d9b377',   // Muted gold
    Muted: '#999999',      // Muted gray
  },

  // Accent Colors
  Accent: {
    Gold: '#ffb347',       // Light accent
    Warm: '#ffc270',       // Warm accent
    Orange: '#ff9f3c',     // Bright orange
  },

  // Semantic Colors
  Status: {
    Success: '#22c55e',    // Green
    Warning: '#fb923c',    // Orange
    Error: '#ef4444',      // Red
    Info: '#3b82f6',       // Blue
  },

  // Border & Divider
  Border: {
    Primary: '#232323',    // Dark border
    Secondary: '#2b2b2b',  // Lighter border
    Light: '#3a3a3a',      // Visible border
  },

  // Interactive
  Interactive: {
    Pressed: '#ff7a0c',    // Pressed orange
    Disabled: '#666666',   // Disabled state
    Hover: '#1f1f1f',      // Hover background
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TYPOGRAPHY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const FONT = {
  Family: {
    Sans: 'Avenir Next',
    Rounded: 'Avenir Next Rounded',
    Serif: 'Iowan Old Style',
    Mono: 'Consolas',
  },

  Size: {
    XS: 11,
    SM: 12,
    MD: 14,
    BASE: 15,
    LG: 16,
    XL: 18,
    '2XL': 20,
    '3XL': 24,
    '4XL': 28,
    '5XL': 32,
    '6XL': 36,
    '7XL': 38,
    '8XL': 42,
  },

  Weight: {
    Light: '300',
    Normal: '400',
    SemiBold: '600',
    Bold: '700',
    ExtraBold: '800',
    Black: '900',
  },

  LineHeight: {
    Tight: 1.2,
    Normal: 1.5,
    Relaxed: 1.6,
    Loose: 1.8,
  },

  LetterSpacing: {
    Tight: -0.5,
    Normal: 0,
    Wide: 0.3,
    Wider: 0.5,
    Widest: 1,
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SPACING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const SPACE = {
  0: 0,
  1: 2,
  2: 4,
  3: 6,
  4: 8,
  5: 10,
  6: 12,
  7: 14,
  8: 16,
  9: 18,
  10: 20,
  11: 22,
  12: 24,
  14: 28,
  16: 32,
  18: 36,
  20: 40,
  24: 48,
  28: 56,
  32: 64,
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BORDER RADIUS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const RADIUS = {
  NONE: 0,
  SM: 6,
  MD: 10,
  LG: 14,
  XL: 18,
  '2XL': 24,
  '3XL': 28,
  FULL: 999,
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SHADOWS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const SHADOW = {
  SM: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  MD: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  LG: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  XL: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
  '2XL': {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 32,
    elevation: 16,
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ANIMATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const DURATION = {
  Fast: 100,      // Quick feedback
  Base: 300,      // Standard animation
  Slow: 500,      // Longer transition
  VerySlow: 800,  // Slow reveal
};

export const EASING = {
  Linear: 'linear',
  In: 'ease-in',
  Out: 'ease-out',
  InOut: 'ease-in-out',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// LAYOUT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const LAYOUT = {
  Padding: {
    Screen: 18,      // Screen horizontal padding
    Section: 16,     // Section padding
    Card: 14,        // Card padding
    Icon: 10,        // Icon padding
  },

  Height: {
    Button: 48,      // Standard button height
    Input: 50,       // Input field height
    Tab: 72,         // Tab bar height
    Header: 56,      // Header height
  },

  Width: {
    MaxWidth: 480,   // Max content width
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT PRESETS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const BUTTON = {
  Primary: {
    backgroundColor: COLOR.Primary.Light,
    paddingHorizontal: SPACE[8],
    paddingVertical: SPACE[6],
    borderRadius: RADIUS.FULL,
    ...SHADOW.MD,
  },

  Secondary: {
    backgroundColor: COLOR.Surface.Primary,
    paddingHorizontal: SPACE[8],
    paddingVertical: SPACE[6],
    borderRadius: RADIUS.FULL,
    borderWidth: 1,
    borderColor: COLOR.Border.Primary,
  },

  Ghost: {
    backgroundColor: 'transparent',
    paddingHorizontal: SPACE[6],
    paddingVertical: SPACE[4],
    borderRadius: RADIUS.MD,
  },
};

export const CARD = {
  Default: {
    backgroundColor: COLOR.Surface.Primary,
    borderRadius: RADIUS.XL,
    borderWidth: 1,
    borderColor: COLOR.Border.Primary,
    padding: SPACE[4],
    ...SHADOW.SM,
  },

  Elevated: {
    backgroundColor: COLOR.Surface.Primary,
    borderRadius: RADIUS.XL,
    borderWidth: 1,
    borderColor: COLOR.Border.Primary,
    padding: SPACE[4],
    ...SHADOW.LG,
  },
};

export const INPUT = {
  Field: {
    backgroundColor: COLOR.Surface.Primary,
    borderRadius: RADIUS.MD,
    borderWidth: 1,
    borderColor: COLOR.Border.Primary,
    paddingHorizontal: SPACE[4],
    paddingVertical: SPACE[3],
    color: COLOR.Text.Primary,
    fontSize: FONT.Size.BASE,
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXPORT AS OBJECT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const DESIGN_TOKENS = {
  COLOR,
  FONT,
  SPACE,
  RADIUS,
  SHADOW,
  DURATION,
  EASING,
  LAYOUT,
  BUTTON,
  CARD,
  INPUT,
};

export default DESIGN_TOKENS;
