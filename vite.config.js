import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'

// Get all HTML files in the root directory
const htmlFiles = readdirSync('.').filter(file => file.endsWith('.html'))

// Create input object for multi-page setup
const input = {
  main: resolve(__dirname, 'index.html')
}

// Add other HTML files
htmlFiles.forEach(file => {
  if (file !== 'index.html') {
    const name = file.replace('.html', '')
    const key = name.replace(/[^a-zA-Z0-9]/g, '_')
    input[key] = resolve(__dirname, file)
  }
})

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input
    },
    assetsDir: 'assets'
  },
  server: {
    open: '/index.html'
  },
  publicDir: 'public'
})
