module.exports = {
  content: ["./src/**/*.{html,js}","./pages/**/*.{html,js}",
  './index.html','./404.html','./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'natural-green': '#57716c',
        'lighter-green': '#89aaae',
        'warning-coral': '#d77677',
        'ADGC-logo-blue': '#0077b2',
      },
      'animation': {
          'text':'text 5s ease infinite',
          'backgroundd' : 'backy 5s ease infinite'
      },
      'keyframes': {
          'text': {
              '0%, 100%': {
                 'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                 'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'backy': {
              '0%, 100%': {
                 'background-size':'200% 200%',
                  'background-position': 'top center'
              },
              '50%': {
                 'background-size':'200% 200%',
                  'background-position': 'bottom center'
              }
          },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}

