import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages部署的base路径配置
  base: process.env.NODE_ENV === 'production' ? '/guide-cursor/' : '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 移除additionalData，使用@use语法替代
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保构建时生成正确的路径
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}) 