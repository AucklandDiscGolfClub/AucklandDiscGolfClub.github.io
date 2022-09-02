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
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}

