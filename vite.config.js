import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Explicitly tell Vite to treat .jsx files as JavaScript modules
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
})