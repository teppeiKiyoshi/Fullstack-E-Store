/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#86A789',
          light: '#D2E3C8',
          dark: '#739072',
          darker: '#4F6F52'
        },
        "darker": '#C63D2F',
      },
      height: {
        "overall-container" : "calc(100vh - 104px)",
      }
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/forms'
  ],
}