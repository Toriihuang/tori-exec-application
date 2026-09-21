import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If you host on GitHub Pages at username.github.io/repo-name,
  // uncomment the next line and put your repo name in:
  base: '/tori-exec-application/',
})
