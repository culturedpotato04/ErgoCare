import { defineConfig } from 'vite'

export default defineConfig({
  // index.html at the repo root is the admin panel — keep Vite's default root
  root: '.',
  build: {
    outDir: 'dist',
    // Copy index.html (admin panel) into dist too — it's in the root so Vite handles it automatically
  },
  define: {
    // Expose VITE_API_BASE to src/ TypeScript at build time.
    // Set this in Vercel → Settings → Environment Variables → VITE_API_BASE
    // e.g. https://ergocare-backend.onrender.com
    // Falls back to localhost for local development.
    '__API_BASE__': JSON.stringify(process.env.VITE_API_BASE || 'http://127.0.0.1:8000'),
  },
})
