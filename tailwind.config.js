/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js,jsx,png,svg}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./src/images/hero.png')",
        'footer-pattern': "url('./src/svg/wave-background.svg')",
      }
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
