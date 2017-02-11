module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url"),
    require("postcss-cssnext"),
    require('postcss-normalize'),
    require("postcss-browser-reporter"),
    require("postcss-reporter")
  ]
}
