import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <nav className={styles.column}>
        <ul className={styles.links}>
          <li>
            🎹 <a href="https://twitter.com/urre">Suggest a concert</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer
