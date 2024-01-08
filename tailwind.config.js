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
          DEFAULT: '#FF9B50',
          light: '#FFBB5C',
          dark: '#E25E3E'
        },
        "darker": '#C63D2F',
      }
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
  ],
}