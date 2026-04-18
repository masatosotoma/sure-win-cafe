/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          darkGreen: '#064e3b',   // Emerald 900
          lightGreen: '#d1fae5',  // Emerald 100
          jade: '#10b981',        // Emerald 500
          gold: '#d97706',        // Amber 600
          lightGold: '#fef3c7',   // Amber 100
          bgLight: '#fafafa'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
