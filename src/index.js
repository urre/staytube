import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import routes from './routes'

import './css/main.css'
import './css/type.css'
import './css/media.css'

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('main'))
