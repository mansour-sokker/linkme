/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ← أهم سطر حتى يشتغل الوضع الداكن
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "snow-white": "#FFFFFF",
        "sky-navy": "#4C5D82",
        "soft-blue": "#7487B0",
        "frost-lilac": "#A6A3C2",
        "misty-lavender": "#C3AED6",
        "cloudy-lilac": "#D6C3E6",
      },
      backgroundImage: {
        "calm-gradient":
          "linear-gradient(135deg, #FFFFFF 0%, #D6C3E6 40%, #C3AED6 100%)",
      },
    },
  },
  plugins: [],
};
