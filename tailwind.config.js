/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,ejs,css}",
    "./src/**/*.{html,js,ejs,css}",
    "./views/**/*.{html,js,ejs,css}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

