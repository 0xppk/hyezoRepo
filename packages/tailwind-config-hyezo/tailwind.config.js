/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      transitionDuration: {
        3000: "3000ms",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        swap: {
          "50%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(-250px)", opacity: 0 },
        },
        swapReverse: {
          "0%": { transform: "translateY(150px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        swap: "swap 0.8s ease-in-out",
        swapReverse: "swapReverse 0.8s ease-in-out",
      },
      colors: {
        orange: {
          100: "#ffedcc",
          200: "#ffdb99",
          300: "#ffc966",
          400: "#ffb733",
          500: "#ffa500",
          600: "#cc8400",
          700: "#996300",
          800: "#664200",
          900: "#332100",
        },
        twitter: {
          100: "#d2ecfc",
          200: "#a5d9f9",
          300: "#78c7f7",
          400: "#4bb4f4",
          500: "#1ea1f1",
          600: "#1881c1",
          700: "#126191",
          800: "#0c4060",
          900: "#062030",
        },
        paleBlue: {
          100: "#e0ebf5",
          200: "#c2d6eb",
          300: "#a3c2e0",
          400: "#85add6",
          500: "#6699cc",
          600: "#527aa3",
          700: "#3d5c7a",
          800: "#293d52",
          900: "#141f29",
        },
        salary: {
          100: "#f4feeb",
          200: "#eafed8",
          300: "#dffdc4",
          400: "#d5fdb1",
          500: "#cafc9d",
          600: "#a2ca7e",
          700: "#79975e",
          800: "#51653f",
          900: "#28321f",
        },
        smoke: {
          100: "#fbfcfd",
          200: "#f8fafb",
          300: "#f4f7fa",
          400: "#f1f5f8",
          500: "#edf2f6",
          600: "#bec2c5",
          700: "#8e9194",
          800: "#5f6162",
          900: "#2f3031",
        },
      },
      cursor: {
        fancy: "url('/images/2022/autumm/cursor.png'), default",
        fancyHover: "url('/images/2022/autumm/cursor_hover.png'), pointer",
      },
      scrollPadding: {
        vmax: "14vmax",
      },
    },
    // overrides
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    fontSize: {
      xs: "clamp(0.78rem, calc(0.68rem + 0.40vw), 1.04rem)",
      sm: "clamp(0.88rem, calc(0.74rem + 0.56vw), 1.25rem)",
      md: "clamp(0.98rem, calc(0.80rem + 0.77vw), 1.50rem)",
      lg: "clamp(1.11rem, calc(0.86rem + 1.04vw), 1.80rem)",
      xl: "clamp(1.25rem, calc(0.92rem + 1.37vw), 2.16rem)",
      "2xl": "clamp(1.40rem, calc(0.98rem + 1.79vw), 2.59rem)",
      "3xl": "clamp(1.58rem, calc(1.04rem + 2.30vw), 3.11rem)",
    },
    minHeight: {
      content: "100vh",
    },
  },
  plugins: [],
};
