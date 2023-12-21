/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sofia, monserrat, roboto, sans-serif"],
      },

      colors: {
        primary: "#67A98F",
        secondary: "#F9F9F9",
        tertiary: "#F9F9F9",
        "primary-text": "#000000",
        "secondary-text": "#000000",
        "tertiary-text": "#000000",
        "primary-bg": "#F9F9F9",
        "secondary-bg": "#F9F9F9",
        "tertiary-bg": "#F9F9F9",
        "primary-border": "#000000",
        "secondary-border": "#000000",
        "tertiary-border": "#000000",
      },
    },
    plugins: [],
  },
};
