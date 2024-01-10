/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        accent: '#ffe66d',
        primary: '#333333',
        secondary: '#FCFAF9',
      },
      backgroundImage: {
        'oldSite': "url(../resources/old.png)",
      }
    },
  },
  plugins: [],
}

