/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const customSpacing = {
  ...defaultTheme.spacing,
  13: "3.188rem", // 51px
  29: "7.125rem", // 114px
  37: "9.063rem" // 145px
};
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      pailred: "#F41D50",
      neutral400: { DEFAULT: "#F9F9F9", border: "#A9A9B2" }
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      "4xl": "2rem", // 32px
      "3.2xl": "1.688rem", // 27px
      xxl: "0.875rem", // 14px
      xl: "0.75rem", // 12px
      llg: "0.625rem", // 10px
      half: "50%",
      xxxl: "1.0625rem",
      "2.5xl": "1.0625rem" //17px
    },

    spacing: {
      ...customSpacing
    },

    extend: {}
  },
  plugins: []
};
