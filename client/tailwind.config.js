module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'scarlet': '#bb0000'
      },
      backgroundColor: {
        'scarlet': '#bb0000',
        'dark-scarlet': '#aa0000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
