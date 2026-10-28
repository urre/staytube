import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import './css/main.css'
import './css/type.css'
import './css/media.css'

createRoot(document.getElementById('main')).render(<App />)
