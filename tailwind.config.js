/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      a1: { max: "70rem" }, // <= 1120px
      a2: { max: "60rem" }, // <= 960px
      a3: { max: "50rem" }, // <= 800px
      a4: { max: "40rem" }, // <= 640px
      a5: { max: "30rem" }, // <= 480px
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
