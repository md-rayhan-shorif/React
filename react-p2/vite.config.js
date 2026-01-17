import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tailwindAnimate from 'tailwindcss-animate' // ১. প্লাগিনটি ইমপোর্ট করো

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // ২. টেইলউইন্ডের ভেতরে প্লাগিনটি যোগ করো
      config: {
        plugins: [tailwindAnimate],
      },
    }),
  ],
})