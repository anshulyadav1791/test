/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const accentLight = '#ff8a1c';
const accentDark = '#ff9f3c';

export const Colors = {
  light: {
    text: '#f9f4ef',
    background: '#020202',
    tint: accentLight,
    icon: '#d9b377',
    tabIconDefault: '#7a6d59',
    tabIconSelected: accentLight,
    card: '#121212',
    border: '#2b2b2b',
    success: '#22c55e',
    warning: '#fb923c',
    accent: '#ffb347',
  },
  dark: {
    text: '#f8f3ea',
    background: '#010101',
    tint: accentDark,
    icon: '#e7b96a',
    tabIconDefault: '#6b5b47',
    tabIconSelected: accentDark,
    card: '#111111',
    border: '#232323',
    success: '#22c55e',
    warning: '#fb923c',
    accent: '#ffb347',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'Avenir Next',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'sans-serif',
    serif: 'serif',
    rounded: 'sans-serif',
    mono: 'monospace',
  },
  web: {
    sans: "'Avenir Next', 'Trebuchet MS', 'Segoe UI', sans-serif",
    serif: "'Iowan Old Style', Georgia, serif",
    rounded: "'Avenir Next Rounded', 'Trebuchet MS', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
