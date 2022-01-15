import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4200,
    proxy: {
      "/server": {
        "target": "http://nestchat:3000",
        "secure": false,
        "changeOrigin": true
      }
    },
  },
});


