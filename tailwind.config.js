/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        black: "satoshi-black",
        bold: "satoshi-bold",
        light: "satoshi-light",
        medium: "satoshi-medium",
        regular: "satoshi-regular",
        variable: "satoshi-variable",
      },
      colors: {
        bg: "#f8fafc",
        card: "#f3f4f6",
        bgBoard: "#0b0e11",
        button: "#059669",
      },
    },
  },
  plugins: [],
};
