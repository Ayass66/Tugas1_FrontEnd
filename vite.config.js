// import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
 plugins: [vue()],
 resolve: {
 alias: {
 // '@' mengarah ke folder src/
 // Sehingga import '@/components/ui/Button.vue' bekerja
 '@': path.resolve(__dirname, './src'),
 },
 },
})
// Jika muncul error 'path is not defined', install:
// npm install -D @types/node
