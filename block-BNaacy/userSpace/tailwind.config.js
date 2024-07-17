/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './views/**/*.{html,js,ejs}',
    './public/css/**/*.{html,js,ejs}'
  ],
  theme: {
    extend: {
      colors: {
          rose: colors.rose,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

