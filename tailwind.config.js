/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ], theme: {
    colors: {
      green: "#006340",
      black: "#2D473E",
      grey: '#f56651',
      white: '#f7f7f7',
    },
  },
  plugins: [],
}

