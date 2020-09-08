const defaultTheme = require('tailwindcss/defaultTheme');

const systemColors = {
  darkblue: '#343D4B',
  lightblue: 'rgba(133, 137, 160, 0.3)',
  lightgrey: '#F5F6FC',
};

module.exports = {
  theme: {
    extend: {
      colors: {
        ex: {
          ...systemColors
        }
      },
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        xxl: '1410px'
      },
      height: {
        '96': '24rem',
        '128': '32rem',
        '256': '64rem'
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover']
  },
  plugins: [require('@tailwindcss/custom-forms')]
};
