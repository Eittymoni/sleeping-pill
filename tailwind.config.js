/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shape': "url('./assets/shape.png')",
        'bg1': "url('./assets/bg1.png')",
        'bg3': "url('./assets/bg3.png')",
        'bg4': "url('./assets/bg4.png')",
        'bg5': "url('./assets/bg5.png')",
        
      },
      fontFamily: {
        'mons': ["Montserrat", "serif"],
        'pops': ["Poppins", "serif"],
       
      }
    },
  },
  plugins: [],
}