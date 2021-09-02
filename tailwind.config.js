module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/3': '33,33333%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
       maxWidth: {
        '0': '0',
        '1/4': '25%',
        '1/3': '33,33333%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
