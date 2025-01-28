/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ban': "url('./assets/banner.jpg')",
       
        
      },
      fontFamily: {
        'mons': ["Montserrat", "serif"],
        'pops': ["Poppins", "serif"],
       
      }
    },
  },
  plugins: [],
}