/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#4fb8ee',
          light: '#8fdcf5',
        },
        leaf: {
          DEFAULT: '#6fb83a',
          dark: '#3f7d2a',
        },
        cream: '#fffae0',
        sun: '#f6b830',
        wood: {
          DEFAULT: '#b57b45',
          dark: '#7a4a22',
        },
        bark: '#4a3320',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
