import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: ["./views/**/*.{ts,tsx}", "./shared/components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        black: "#1B1B1B",
        white: "#FFFFFF",
        gray_01: "#EEEEEE",
        gray_02: "#D8D8D8",
        gray_03: "#B4B4B4",
        gray_04: "#929292",
        gray_05: "#696969",
        gray_06: "#454545",
        navy: "#1A3260",
        sky: "#CFE5FF",
        red: "#E12B55",
        green: "#4DA764",
        yellow: "#FFDE75",

        kakaoLogo: "#381E1F",
        kakaoBg: "#FCE84D",
        naverBg: "#63C33D",
        googleBg: "#D0533F",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".title": {
          fontSize: "48px",
          lineHeight: "auto",
          fontWeight: "bold",
        },
        ".heading1": {
          fontSize: "24px",
          lineHeight: "29px",
          fontWeight: "bold",
        },
        ".heading2": {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "bold",
        },
        ".body1": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "600",
        },
        ".body2": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "medium",
        },
        ".body3": {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: "medium",
        },
        ".caption": {
          fontSize: "12px",
          lineHeight: "14px",
          fontWeight: "regular",
        },
        ".placeholder": {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: "regular",
        },
        ".button": {
          fontSize: "16px",
          lineHeight: "19px",
          fontWeight: "600",
        },
        ".popup": {
          fontSize: "18px",
          lineHeight: "21px",
          fontWeight: "bold",
        },
      });
    }),
  ],
};

export default config;
