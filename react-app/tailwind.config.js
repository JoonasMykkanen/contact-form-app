/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        accent: '#ffe66d',
        primary: {
          '100': '#333333',
          '80': 'rgba(51, 51, 51, 0.8)',
          '60': 'rgba(51, 51, 51, 0.65)',
          '30': 'rgba(51, 51, 51, 0.3)',
        },
        secondary: {
          '100': '#FCFAF9',
          '80': 'rgba(252, 250, 249, 0.8)',
          '60': 'rgba(252, 250, 249, 0.65)',
          '30': 'rgba(252, 250, 249, 0.3)',
        },

        bar: 'rgba(26, 26, 28, 1)',
        dark: 'rgba(86, 86, 87, 1)',
      },
      backgroundImage: {
        'oldSite': "url(../resources/old.png)",
      }
    },
  },
  plugins: [],
}

