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
          backgroundContrast: "#04B2D9",   
        },
      },
      fontFamily: {
        alterum: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

