/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'grayfigma': {
          DEFAULT: '#9B9B9B'
        },
        'greenfigma': {
          DEFAULT: '#22D03E'
        },
        'bluefigma1': {
          DEFAULT: '#86e9e9'
        },
        'bluefigma2': {
          DEFAULT: '#3cdad8'
        },
        'bluefigma3': {
          DEFAULT: '#38c9ee'
        },
        'bluefigma4': {
          DEFAULT: '#41a7ed'
        },
        'bluefigma5': {
          DEFAULT: '#3994cf'
        },
        'bluefigma6': {
          DEFAULT: '#15528a'
        }
      }
    },
  },
  plugins: [],
}

