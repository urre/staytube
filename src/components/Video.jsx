import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getVideo } from '../youtube'
import Meta from './Meta'
import Spinner from './Spinner'
import styles from './Video.module.css'

const formatViews = (count) => count.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const Video = () => {
  const { video: id } = useParams()
  const [video, setVideo] = useState(null)

  useEffect(() => {
    let current = true
    setVideo(null)
    getVideo(id)
      .then((item) => current && setVideo(item))
      .catch((error) => console.error(error))
    return () => {
      current = false
    }
  }, [id])

  if (!video) {
    return <Spinner />
  }

  const { snippet, contentDetails, statistics } = video

  return (
    <div className={styles.page}>
      <Meta
        title={snippet.title}
        description={snippet.description.replace(/\n|\r/g, '')}
        image={snippet.thumbnails.high.url}
      />
      <div className={styles.video}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0`}
          title={snippet.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
      <h1>{snippet.title}</h1>
      <ul>
        <li>{formatViews(statistics.viewCount)} YouTube views</li>
        <li>{contentDetails.definition.toUpperCase()}</li>
      </ul>
    </div>
  )
}

export default Video
