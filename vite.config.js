import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:process.env.VITE_PASE_PATH || '/deploy_react_app_github_pages_vercel'
})
