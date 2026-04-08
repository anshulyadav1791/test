/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8a1c',
        'primary-dark': '#ff9f3c',
        'dark-bg': '#010101',
        'dark-card': '#111111',
        'dark-border': '#232323',
        accent: '#ffb347',
        text: '#f8f3ea',
        'text-secondary': '#e7b96a',
      },
      fontFamily: {
        sans: ['Avenir Next', 'Trebuchet MS', 'Segoe UI', 'sans-serif'],
        rounded: ['Avenir Next Rounded', 'sans-serif'],
        serif: ['Iowan Old Style', 'Georgia', 'serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
