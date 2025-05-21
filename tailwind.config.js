/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customYellow:'yellow',
        bgdark: 'rgb(40, 47, 97)',

      },
      boxShadow: {
        customShadow: '0px 4px 15px 10px rgba(255, 255, 0, 0.5)', // Custom shadow
      },
    },
  },
  plugins: [],
}