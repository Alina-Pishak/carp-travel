import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        45: "180px",
        50: "220px",
        70: "280px",
      },
      fontFamily: {
        primary: ["var(--font-inter)"],
        secondary: ["var(--font-karantina)"],
      },
      colors: {
        primary: "#fff",
        btn: "rgba(255, 255, 255, 0.1)",
        btnTablet: " rgba(255, 255, 255, 0.05)",
        error: "#ff5757",
        bgPrimaryLight: "rgba(2, 15, 8, 0.5)",
        bgPrimaryDark: " rgba(2, 15, 8, 0.85)",
        bgPrimary: " rgba(2, 15, 8, 0.75)",
        bgMobileMenu: "rgba(1, 10, 5, 0.75)",
        bgInputs: "rgba(255, 255, 255, 0.05);",
        bgHoverInputs: "rgba(255, 255, 255, 0.1);",
        bgHeaderBtnHover: "rgba(255, 255, 255, 0.2);",
      },
      letterSpacing: {
        "1": "-0.04em",
        "2": "0.2em",
      },
      fontSize: {
        xxs: ["10px", "1.6"],
        l: ["40px", "1.4"],
        "5xl": "43px",
        "6xl": ["67px", "1"],
        "8xl": ["98px", "1"],
      },
      boxShadow: {
        image: "0 0 15px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
