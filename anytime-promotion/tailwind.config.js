/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        darkGray: '#F6F6F6',
        darkerGray: '#333333',
        darkRed: '#610000',
        offWhite: '#F5F5F5',
        darkBlue: '#2C3E50'
      },
    },
  },
  plugins: [],
}
