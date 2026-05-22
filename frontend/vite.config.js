import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import frappeui from 'frappe-ui/vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    frappeui({
      lucideIcons: true,
      frappeProxy: true,
      buildConfig: false,
      jinjaBootData: false,
      frappeTypes: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: mode === 'production' ? '/assets/jinish_website/personal-site/' : '/',
  build: {
    outDir: '../jinish_website/public/personal-site',
    emptyOutDir: true,
    target: 'es2015',
  },
  server: {
    port: 8080,
    host: true,
    cors: true,
  },
}))
