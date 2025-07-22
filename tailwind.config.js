module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        activeTab: "#3b82f6", // Синий цвет для активной кнопки
      },
      fontFamily: {
        anticva: ["var(--font-anticva)"], // Используем CSS-переменную
        sans: ["var(--font-gotham-pro)"],
        love: ["var(--font-love)"],
      },
      animation: {
        carousel: "carousel 20s linear infinite",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
