/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#faf7f3",
        ink: "#101216",
        copper: {
          DEFAULT: "#b06a45",
          light: "#d99a6c",
          dark: "#8a4f31",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 24px 70px -32px rgba(16, 18, 22, 0.35)",
        lift: "0 18px 40px -24px rgba(16, 18, 22, 0.4)",
      },
    },
  },
  plugins: [],
};
