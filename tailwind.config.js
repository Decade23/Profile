/** @type {import('tailwindcss').Config} */
const defaulTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["Raleway", ...defaulTheme.fontFamily.sans],
      },
      colors: {
        main: "#d946ef",
        ig: "#E4405F",
        fb: "#1877F2",
        linkedin: "#0A66C2",
        twitter: "#1DA1F2",
        github: "#181717",
        gitlab: "#FC6D26",
        bitbucket: "#0052CC",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
