/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height : {
        98 :  '27rem',
        100 : '30rem',
        120 : '60rem'
      }
    },
  },
  plugins: [],
}

