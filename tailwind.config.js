const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      gray: "#878B98",
      lightGray: "#E8E8E8",
      fadeGray: "#FBFBFB",
      black: "#110F24",
      green: "#00BA76",
    },
    customForms: theme => ({
      default: {
        input: {
          checkbox: {
            width: theme('spacing.6'),
            height: theme('spacing.6'),
            borderRadius: theme('borderRadius.lg'),
            boxShadow: theme('boxShadow.default'),
            color: theme("colors.green")
          },
        },
      }
    }),
    extends: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
