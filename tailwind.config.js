/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js,jsx,png,svg}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./src/images/hero.png')",
        'footer-pattern': "url('./src/svg/wave-background.svg')",
      }
    }
    // screens: {
    //   // 'mobile': '320px',
    //   // => @media (min-width: 320px) { ... }

    //   // 'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   // 'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   // 'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
}
