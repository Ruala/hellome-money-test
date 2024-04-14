/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        sans: ['"Clash Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#195399",
        secondary: "#444",
        logoText: "#f0f0f0",
        buttonColor: "#121212",
        footerBg: "#292d32",
      },
    },
  },
  plugins: [],
};
