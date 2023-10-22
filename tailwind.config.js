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
          background: "#160a19",
          backgroundBk: "#0B111b"
        },
      },
      fontFamily: {
        alterum: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

