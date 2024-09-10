/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./assets/*.liquid",
    "./snippets/*.liquid",
    "./config/*.json",
    "./templates/**/*.{liquid,json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
