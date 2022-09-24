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
    borderRadius: {
      ...defaultTheme.borderRadius,
      "4xl": "2rem", // 32px
      "3.2xl": "1.688rem", // 27px
      xxl: "0.875rem", // 14px
      xl: "0.75rem", // 12px
      llg: "0.625rem", // 10px
      half: "50%",
      "2.5xl": "1.0625rem" //17px
    },

    spacing: {
      ...customSpacing
    },
    fontFamily: {
      sans: ["IranSans", ...defaultTheme.fontFamily.sans]
    },

    extend: {
      boxShadow: {
        customLg: "0px 1px 8px 1px rgba(188, 183, 183, 0.25)",
        customXl: "1px 1px 5px 1px rgba(60, 78, 78, 0.25)"
      },
      scale: {
        101: "1.01"
      },
      colors: {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        pailred: "#F41D50",
        tableGray: "#EEEEEE",
        neutral400: { DEFAULT: "#F9F9F9", border: "#A9A9B2" },
        borderColor: "#9499C5",
        ticketResponse: "#FFF2F2",
        ticketReply: "#F5F5F5",
        linkColor: "#0E5FCC"
      }
    }
  },
  plugins: []
};
