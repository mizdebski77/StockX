/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    colors: {
      'green': "#006340",
      'darkGreen': "#2D473E",
      'red': '#B2232B',
      grey: '#f56651',
      white: '#f7f7f7',
    },
  },
  plugins: [],
}

