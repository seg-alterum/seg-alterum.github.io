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
          background: "#29132E",
        }
      },
      fontFamily: {
        alterum: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

