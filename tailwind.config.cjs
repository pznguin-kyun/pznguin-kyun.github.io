const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      
    },
    colors: {
      emerald: colors.emerald,
      teal: colors.teal,
      gray: colors.neutral,
      ceil: {
        50: "#F4F5FC",
        100: "#EAEBF9",
        200: "#DFE0F5",
        300: "#D5D6F2",
        400: "#CACCEF",
        500: "#BFC2EC",
        600: "#B5B8E9",
        700: "#AAADE5",
        800: "#A0A3E2",
        900: "#9599DF"
      }
    }
  },
  plugins: [],
}
