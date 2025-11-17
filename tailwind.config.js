module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0066FF",
          dark: "#0B0F19",
          accent: "#E94560",
          light: "#F5F5F5",
          white: "#FFFFFF",
        },
      },

      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0B0F19 0%, #101522 40%, #16203A 100%)",
      },

      borderRadius: {
        soft: "1.25rem",
      },

      boxShadow: {
        card: "0 18px 45px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
