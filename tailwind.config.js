/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#F7F7F7',
'background': '#090909',
'primary-button': '#b8c2b3',
'secondary-button': '#000000',
'accent': '#7a947e',
      
        
      },
      darkMode: 'class',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6849c5" ,

          "secondary": "#3D3A50",

          "accent": "#1FB2A5",

          "neutral": "#191D24",

          "base-100": "#2A303C",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  variants: {},
  plugins: [require("daisyui"),],
}