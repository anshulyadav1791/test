# SeeCar - Smart Bike Riding App

A premium black and orange themed React Native/Expo application for smart bicycle tracking, route discovery, and ride management.

## 🎨 Design System

**Colors:**
- **Primary Orange:** `#ff8a1c` (light) / `#ff9f3c` (dark)
- **Dark Background:** `#010101` / `#020202`
- **Card Background:** `#111111` / `#121212`
- **Text:** `#f8f3ea` (light) / `#f9f4ef` (dark)
- **Accent Gold:** `#ffb347` / `#d9b377`

**Typography:**
- **Headline:** Avenir Next / sans-serif (900 weight)
- **Body:** Avenir Next / sans-serif
- **Rounded:** Avenir Next Rounded
- **Mono:** Consolas / monospace

## 📁 Updated Folder Structure

```
seecar/
├── app/
│   ├── _layout.tsx                 # Root navigation layout
│   ├── login.tsx                   # Login screen (entry point)
│   ├── register.tsx                # Registration screen
│   ├── modal.tsx                   # Modal example
│   └── (tabs)/
│       ├── _layout.tsx             # Tab navigation layout
│       ├── index.tsx               # Home/Ride screen
│       └── explore.tsx             # Routes/Explore screen
├── components/
│   ├── bicycle.tsx                 # Animated bicycle component
│   ├── themed-text.tsx             # Themed text component
│   ├── themed-view.tsx             # Themed view component
│   ├── haptic-tab.tsx              # Tab haptic feedback
│   └── ui/
│       └── icon-symbol.tsx         # Icon symbols
├── constants/
│   └── theme.ts                    # Color and font definitions
├── hooks/
│   ├── use-color-scheme.ts         # Color scheme hook
│   └── use-theme-color.ts          # Theme color hook
├── utils/
│   ├── validation.ts               # Form & data validation
│   └── constants.ts                # App constants
├── types/
│   └── index.ts                    # TypeScript definitions
├── assets/
│   └── images/                     # Image assets
├── package.json
├── tailwind.config.js              # Tailwind CSS config
└── tsconfig.json
```

## 🔐 Authentication Flow

1. **Login Screen** - Email/password authentication with social login options
2. **Register Screen** - User registration with validation
3. **Main App** - Tab-based navigation with home and explore screens

## 🚀 Quick Start

```bash
npm install
npm start

# Or run directly:
npm run ios
npm run android
npm run web
```

## 📦 Key Dependencies

- **expo-router** - File-based routing
- **react-native-reanimated** - Smooth animations
- **@expo/vector-icons** - Icon library
- **nativewind** - Tailwind CSS for React Native
- **tailwindcss** - Utility-first CSS

## ✨ Features

✅ Black & orange theme design  
✅ Login/Register screens  
✅ Animated components  
✅ Dark mode by default  
✅ Tailwind CSS support  
✅ TypeScript support  
✅ Responsive layouts  
✅ Route discovery  
✅ Ride statistics  

## 🎨 Customization

Edit colors in `constants/theme.ts` and fonts in the `Fonts` configuration.

---

**Built with React Native, Expo, and TypeScript**
