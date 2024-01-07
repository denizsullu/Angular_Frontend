/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'system-ui', 'sans-serif']
      },
      colors:{
        'back':'#000000',
        'cardback': '#121417',
        'textColor': '#FFFFFF',
        'buttonBack1': '#2522D37',
        'buttonBack2': '#6A6D71',
        'buttonBack3': '#E68226',
        'buttonSubmit': '#D9D9D9',
        'textcolor1': '#959494'

      },
      spacing:{
        '13' : '3.25rem',
      }
    },
  },
  plugins: [],
}