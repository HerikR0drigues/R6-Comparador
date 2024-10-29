/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f1f3f4',
        secondaryBackground: '#f5f5f5',
        backgroundPurple: "rgba(15, 0, 37, 1)",
        spanHeader: "#c1095a",
        mainBackground: "",
      },
      fontFamily: {
        'pixelfy': ["Pixelify Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

