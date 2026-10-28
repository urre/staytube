import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import LatestVideos from './LatestVideos'
import Video from './Video'
import About from './About'
import NotFound from './NotFound'
import styles from './App.module.css'

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <div className={styles.container}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LatestVideos />} />
          <Route path="/videos/:video" element={<Video />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
    <Footer />
  </BrowserRouter>
)

export default App
