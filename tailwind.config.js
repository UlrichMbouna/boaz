/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        appbg: '#F5F6FA', // tu donnes un nom à ta couleur
      },
    },
  },
  plugins: [],
}
