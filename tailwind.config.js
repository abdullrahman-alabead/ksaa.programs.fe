/*eslint-env node*/

import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",
      gray: "#292A2A",
      lightGray: "#EAEAEA",
      none: "transparent",
      green: "#024E28",
      navy: "#0F2340",
      cyan: "#449AA7",
    },
    fontFamily: {
      cairo: ["Cairo Variable", ...fontFamily.sans],
      kufi: ["Noto Kufi Arabic Variable"],
    },
    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },

      desc: { max: "992px" },

      tab: { max: "768px" },

      mob: { max: "576px" },
    },
    extend: {
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      boxShadow: {
        normal: "2px 3px 6px 0 #00000030",
      },
      keyframes: {
        fadeInBottomCentered: {
          from: {
            opacity: 0,
            transform: "translate(-50%, 2rem)",
          },
          to: {
            opacity: 1,
            transform: "translate(-50%, 0)",
          },
        },
      },
      animation: {
        fadeInBottomCentered: "fadeInBottomCentered 300ms ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
