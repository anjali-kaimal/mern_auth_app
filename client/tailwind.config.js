/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#F2F2F2",
        "secondary":"#6B645D",
        "third":"#FF6969",
        "fourth":"#FFCB2D"
      }
    },
    screens: {
      'lg': {'max': '1023px'},

      'sm': {'max': '820px'},
    }
  },
  plugins: [],
}

