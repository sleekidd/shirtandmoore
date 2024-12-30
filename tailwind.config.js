/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Syne', 'serif'], // For Google Fonts example
      },
    },
  },
  plugins: [],
}

