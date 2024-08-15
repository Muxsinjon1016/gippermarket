/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        6: "6px",
        12: "12px",
        20: "20px",
      },
      backgroundColor: {
        gipermart: "#feee00",
        korzinka: "#feee00",
        skidki: "#f5a523",
        iconGiper: "#2e3a59",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          sm: "680px",
          md: "808px",
          lg: "1064px",
          xl: "1450px",
        },
      },
    },
  },
  plugins: [],
};
