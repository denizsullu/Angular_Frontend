/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "*.{html,js,svg}, ./images/icons/*.svg"],
  theme: {
    container: {
        center: true,
    },
    extend: {
      colors:{
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883"
        }
      }
    },
  },
  plugins: [],
}