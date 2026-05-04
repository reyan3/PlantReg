import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // This tells the browser to allow the popup to communicate back to the parent window
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      // Helps with security isolation in modern browsers
      "Cross-Origin-Embedder-Policy": "unsafe-none", 
    },
  },
})
