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
        }
      }
    },
  },
  plugins: [],
}

