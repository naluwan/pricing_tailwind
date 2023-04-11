module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js, jsx, ts, tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4f3cc9',
        'primary-dark': '#4232aa',
        secondary: '#ffffff',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
