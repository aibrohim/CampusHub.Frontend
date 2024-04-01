import { gray, primary } from "./src/app/providers/Theme/config/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xl": ["22px", "25px"],
        xl: ["20px", "23px"],
        lg: ["18px", "21px"],
        base: ["16px", "19px"],
        sm: ["14px", "16px"],
      },
      colors: {
        appBg: "#fcfdfd",
        secondary: "#656766",
        gray: gray,
        primary: primary,
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-15": "span 15 / span 15",
        "span-24": "span 24 / span 24",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
