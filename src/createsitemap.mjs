import fs from 'fs'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

let token = ''
const apikey = process.env.YOUTUBE_APIKEY || require('./../config.js')
const siteUrl = process.env.SITE_URL || 'https://urre.github.io/staytube'

fs.writeFile(
  '../dist/sitemap.xml',
  "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>",
  function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('Saved sitemap.xml')
  }
)

// Loop playlist, recursively
function saveItems(token) {
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&pageToken=${token}&playlistId=PLUIjiNV9YTmsGucmZPzRrVR1GSlmRQ6pk&key=${apikey}&alt=json`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.nextPageToken !== 'undefined') {
        token = data.nextPageToken
      }
      saveItem(data.items)
    })
    .then((res) => {
      saveItems(token)
    })
    .catch((error) => {})
}

// Save items as <loc> element in the sitemap
function saveItem(data) {
  return data.map((video, index) => {
    if (video.snippet.thumbnails) {
      fs.appendFileSync(
        '../dist/sitemap.xml',
        '\n\t<url>\n\t\t<loc>' +
          siteUrl +
          '/videos/' +
          video.snippet.resourceId.videoId +
          '</loc>\n</url>'
      )
    }
  })
}

// Save items
saveItems(token)

// Note to self: Sloppy, dumb and just silly
setTimeout(function () {
  fs.appendFileSync('../dist/sitemap.xml', '\n</urlset>')
}, 3000)
