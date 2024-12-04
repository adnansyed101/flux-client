import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        midnightBlue: "#2C3E50",
        goldenYellow: "#F39C12",
        // Secondary Colors
        slateGray: "#95A5A6",
        rubyRed: "#E74C3C",
        emeraldGreen: "#2ECC71",
        // Neutral Colors
        lightGray: "#ECF0F1",
      },
    },
  },
  plugins: [daisyui],
};
