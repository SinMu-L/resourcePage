/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: "#f4f7fc"
      },
      boxShadow: {
        default_boxshadow: " 0 0 10px"
      }
    },
  },
  plugins: [require("daisyui")],
}

