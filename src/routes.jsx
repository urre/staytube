import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import LatestVideos from './components/LatestVideos'
import Video from './components/Video'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/videos/:video" component={Video} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={LatestVideos} />
    </Switch>
  </BrowserRouter>
)

export default routes
