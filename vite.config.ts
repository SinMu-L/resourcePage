import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/v1': {
        target: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-vshbe/endpoint/data',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/v1/, ''),
      },
    }
  }
  
})
