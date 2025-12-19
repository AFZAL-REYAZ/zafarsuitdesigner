/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        gold: {
          100: "#F9F1D8",
          200: "#F0DEAA",
          300: "#E6CB7D",
          400: "#D4AF37", // Classic Gold
          500: "#C5A028",
          600: "#A3841F",
          700: "#856B18",
        },
        royal: {
          800: "#1A202C", // Dark Slate
          900: "#0F172A", // Deep Navy
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
};
