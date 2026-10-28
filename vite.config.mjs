import { createRequire } from 'module'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const require = createRequire(import.meta.url)
const apikey = process.env.YOUTUBE_APIKEY || require('./config.js')

export default defineConfig({
  root: 'src',
  base: process.env.BASE_PATH || '/',
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
