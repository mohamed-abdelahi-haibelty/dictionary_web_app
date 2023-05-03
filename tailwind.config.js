/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          10:'#3A3A3A',
          20:'#2D2D2D',
          30:`#1F1F1F`,
          40:'#050505'
        },    
        gray:{
          10:'#F4F4F4',
          20:'#E9E9E9',
          30:`#757575`,
        },
        primary:'#A445ED',
        secondry:'#FF5252'    
      },
      fontFamily:{
        mono:['Inconsolata', 'monospace'],
        serif: ['Lora', 'serif'],
        sansSerif:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}


