import fs from 'fs'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const apikey = process.env.YOUTUBE_APIKEY || require('./../config.js')
const siteUrl = process.env.SITE_URL || 'https://urre.github.io/staytube'
const playlistId = 'PLUIjiNV9YTmsGucmZPzRrVR1GSlmRQ6pk'

// Walk every page of the playlist and collect the video ids
async function getVideoIds() {
  const ids = []
  let pageToken = ''
  do {
    const query = new URLSearchParams({
      part: 'snippet',
      maxResults: 50,
      playlistId,
      pageToken,
      key: apikey,
    })
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?${query}`
    )
    if (!res.ok) throw new Error(`YouTube API ${res.status}`)
    const data = await res.json()
    for (const video of data.items) {
      if (video.snippet.thumbnails) ids.push(video.snippet.resourceId.videoId)
    }
    pageToken = data.nextPageToken
  } while (pageToken)
  return ids
}

const urls = (await getVideoIds())
  .map((id) => `\t<url>\n\t\t<loc>${siteUrl}/videos/${id}</loc>\n\t</url>`)
  .join('\n')

fs.writeFileSync(
  '../dist/sitemap.xml',
  `<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>\n${urls}\n</urlset>\n`
)
console.log('Saved sitemap.xml')
