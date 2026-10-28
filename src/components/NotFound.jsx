import Meta from './Meta'
import styles from './NotFound.module.css'

const NotFound = () => (
  <div className={styles.notFound}>
    <Meta
      title="Not found | Staytube"
      ogTitle="Oh! 404 error"
      description="It could be you, or it could be us, but theres no video here."
    />
    <p>Hi friend. This link does not exist.</p>
  </div>
)

export default NotFound
