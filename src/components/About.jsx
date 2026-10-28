import { FaGithub } from 'react-icons/fa'
import Meta from './Meta'
import styles from './About.module.css'

const description =
  'Dedicated to great full length concerts. Exploring the concept of using Youtube as a CMS. Made by Urban Sandén (@urre)'

const About = () => (
  <div className={styles.row}>
    <div className={styles.column}>
      <Meta
        title="About | Staytube"
        ogTitle="About"
        description={description}
      />
      <h1>About</h1>
      <p>
        Dedicated to great full length concerts. Exploring the concept of using
        Youtube as a CMS. Made by{' '}
        <a href="https://twitter.com/urre">Urban Sandén (@urre) in 2014.</a>
      </p>
      <p>
        Updated on October 28, 2026 with a modernized codebase: React 19, React
        Router 8, Vite 8 and CSS modules.
      </p>
      <p>
        <FaGithub size={30} color="white" className={styles.icon} />{' '}
        <a href="https://github.com/urre/staytube">Source code on Github</a>
      </p>
    </div>
  </div>
)

export default About
