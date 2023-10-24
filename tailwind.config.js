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
          background: "#221027",
          backgroundContrast: "#160a19",   
        },
      },
      fontFamily: {
        alterum: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

