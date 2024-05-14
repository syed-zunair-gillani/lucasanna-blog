/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#202121',
        'yellow': '#FEBF2F'
      },
      fontFamily: {
        sohne_400: ["sohne_400", "sans-serif"],
        sohne_500: ["sohne_500", "sans-serif"],
        sohne_700: ["sohne_700", "sans-serif"],
        source_serif_700: ["source_serif_700", "sans-serif"],
        rubik_light: ["rubik_light", "sans-serif"],
        rubik_regular: ["rubik_regular", "sans-serif"],
        rubik_medium: ["rubik_medium", "sans-serif"],
        'canelaDeck': ['canelaDeck', "sans-serif"]
      },
      
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
    // require('tailwind-scrollbar-hide'),
  ],
}