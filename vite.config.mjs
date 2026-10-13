import { createRequire } from 'module'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const require = createRequire(import.meta.url)
const apikey = require('./config.js')

export default defineConfig({
  root: 'src',
  publicDir: false,
  plugins: [react()],
  define: {
    __YOUTUBE_APIKEY__: JSON.stringify(apikey),
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 8080,
  },
})
