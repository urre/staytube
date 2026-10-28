import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getPlaylistPage } from '../youtube'
import Meta from './Meta'
import Spinner from './Spinner'
import button from './Button.module.css'
import styles from './LatestVideos.module.css'

const hidden = ['Deleted video', 'Private video']

const LatestVideos = () => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState({ items: [] })

  const load = useCallback((token) => {
    setLoading(true)
    getPlaylistPage(token)
      .then(setPage)
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => load(''), [load])

  const videos = page.items.filter(
    (video) => !hidden.includes(video.snippet.title)
  )

  return (
    <div className={styles.grid}>
      <Meta
        title="Latest videos | Staytube"
        ogTitle="Latest videos"
        description="Latest videos from Staytube"
      />

      {loading ? (
        <Spinner />
      ) : (
        videos.map(({ snippet }) => {
          const id = snippet.resourceId.videoId
          return (
            <div key={id} className={styles.item}>
              <Link to={`/videos/${id}`} className={styles.link}>
                <img
                  className={styles.thumbnail}
                  src={`https://res.cloudinary.com/urre/image/youtube/w_480,h_360,c_fill,q_40/${id}.jpg`}
                  alt={snippet.title}
                />
                <p>{snippet.title}</p>
              </Link>
            </div>
          )
        })
      )}

      <nav className={styles.pager}>
        <ul>
          <li>
            <button
              type="button"
              className={button.button}
              onClick={() => load(page.prevPageToken ?? '')}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              type="button"
              className={button.button}
              onClick={() => load(page.nextPageToken ?? '')}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LatestVideos
