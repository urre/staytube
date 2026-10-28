const apikey = __YOUTUBE_APIKEY__
const playlistId = 'PLUIjiNV9YTmsGucmZPzRrVR1GSlmRQ6pk'

async function get(endpoint, params) {
  const query = new URLSearchParams({ ...params, key: apikey })
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/${endpoint}?${query}`
  )
  if (!res.ok) throw new Error(`YouTube API ${res.status}`)
  return res.json()
}

export function getPlaylistPage(pageToken = '') {
  return get('playlistItems', {
    part: 'snippet',
    maxResults: 30,
    playlistId,
    pageToken,
  })
}

export async function getVideo(id) {
  const data = await get('videos', {
    id,
    part: 'snippet,contentDetails,statistics',
  })
  return data.items[0]
}
