/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["TT Commons", "sans-serif"],
    },
    extend: {
      colors: {
        neutral: {
          900: "#101010",
          700: "#232323",
          500: "#E8E8E8",
          300: "#F3F3F3",
          100: "#FFFFFF",
        },
        secondary: {
          900: "#7941A7",
          500: "#E2BEFF",
        },
      },
    },
  },
  plugins: [],
};
