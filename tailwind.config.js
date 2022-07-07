module.exports = {
  content: ["./src/**/*.{html,js}","./pages/**/*.{html,js}",
  './index.html','./404.html','./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}

