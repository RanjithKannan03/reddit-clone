/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {},
    fontFamily:{
      'roboto':['Roboto'],
      'roboto-condensed':['Roboto Condensed'],
      'ubuntu':['Ubuntu'],
      'ubuntu-condensed':['Ubuntu Condensed']
    }
  },
  plugins: [
    require('preline/plugin')
  ],
}

