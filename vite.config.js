import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/project-final-unit-1-ben-j/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    }
  }
})
