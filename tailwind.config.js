/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      colors: {
        primary: "#23bff6", //#0a8ffc", 
        secondary: "#f5e936",
        tertiary1: "#02222a",
        tertiary2: "#08384a",
        
        "primary-text": "#000000",
        "secondary-text": "#000000",
        "tertiary-text": "#12bfd6",
        "primary-bg": "#F9F9F9",
        "secondary-bg": "#F9F9F9",
        "tertiary-bg": "#F9F9F9",
      },
      fontFamily: {
        sans: [ "fira code", "Overpass","work sans", "manrope"],
      },
      boxShadow: {
        primary: "0 4px 15px 0 rgba(18, 159, 182, 0.39)",
        text: "0 1px 3px #23bff6",
      },
      backgroundImage: (theme) => ({
        "border-gradient":
          "linear-gradient(to bottom, var(--color-tertiary1), var(--color-primary))",
      }),
      borderColors: (theme) => ({
        gradient: "transparent",
      }),
    },
    plugins: [],
  },
};
