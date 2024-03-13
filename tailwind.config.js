module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"', 'Helvetica', 'Arial', 'Verdana', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia']
    },
    extend: {
      colors: {
        'psa': {
          50: '#fcf7f8',
          100: '#418fde',
          200: '#005eb8',
          300: '#003594',
          400: '#202a25',
          500: '#FF8C43'
        }
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    container: {
      screens: {
         sm: "100%",
         md: "1024px",
         lg: "1280px",
         xl: "1600px"
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
};
