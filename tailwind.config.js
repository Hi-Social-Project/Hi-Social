/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": "Plus Jakarta Sans",
        "clash-display": "Clash Display",
      },
      width: {
        "w-custom": "31.063rem",
      },
      height: {
        "h-custom": "37.313rem",
      },
    },
  },
  plugins: [],
};
