module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: '#253E45',
          secondary: '#31395a',
          accent: '#31395a',
          neutral: '#5c607e',
          'base-100': '#13232C',
        },
      },
      'pastel',
      'dracula',
    ],
  },
};
