import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs' // 指定打包输出目录为docs
  },
  server: {
    proxy: {
      '/apis': {
        target: 'http://192.168.60.50:8083',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/apis/, '')
      }
    }
  }
})
