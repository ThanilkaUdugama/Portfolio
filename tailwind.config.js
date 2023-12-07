/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'mobile-s': '320px',      
      'mobile-m': '375px',
      'mobile-l' : '425px',
      'tablet': '768px',
      'laptop-s': '1024px',
      'laptop-m' : '1280px',
      'laptop-l': '1440px',
      '4k': '2560px'
    },

    extend: {
      height : {
        98 :  '27rem',
        100 : '30rem',
        120 : '60rem'
      },

      minHeight : {
        20 : '5rem',
        80: '20rem',
        98 : '27rem',
        100 : '30rem',
        120 : '60rem'
      }
    },
  },
  plugins: [],
}

