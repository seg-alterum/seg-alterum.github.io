/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './build/**/*.html',
    './build/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        alterum: {
          background: "#031326",
          // backgroundContrast: "#04B2D9",
          blue: "#04B2D9",
          backgroundContrast: "#39114d",
          purple1: "#ae34eb",
        },
      },
      fontFamily: {
        alterum: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mainpage': "url('../images/mainpage.png')"
      },
    },
  },
  plugins: [],
}

