const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    fontFamily: {
      sans: ['var(--font-barlow)'],
      mono: ['var(--font-roboto-mono)'],
    },
  }
}
