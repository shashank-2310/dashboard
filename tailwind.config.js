/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "450px",
        "max-xs": { max: "450px" },
        sm: "640px",
        "max-sm": { max: "640px" },
        md: "768px",
        "max-md": { max: "768px" },
        lg: "1024px",
        "max-lg": { max: "1024px" },
        xl: "1280px",
      },
      fontFamily: {
        "pt-serif": ["PT Serif", "serif"],
        "mulish": ["Mulish", "sans-serif"],
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        "our-blue": '#2306fa',
        "-our-light-blue": '#7996FF',
      },
    },
  },
  plugins: [],
};

