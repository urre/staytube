var critical = require('critical')

critical.generate({
  inline: true,
  base: './dist',
  src: 'index.html',
  dest: 'temp.html',
  width: 1300,
  height: 1200,
  minify: true,
  extract: true,
  inline: true,
  pathPrefix: '/css'
})
