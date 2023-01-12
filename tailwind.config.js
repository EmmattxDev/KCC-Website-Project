/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js,jsx,png,svg}', './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
