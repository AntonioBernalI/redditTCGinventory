import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renameSync, unlinkSync, existsSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'post-build-tasks',
      closeBundle: () => {
        // Renombrar index.html a indexInv.html
        const indexPath = join(__dirname, 'dist', 'index.html')
        const newIndexPath = join(__dirname, 'dist', 'indexInv.html')
        if (existsSync(indexPath)) {
          renameSync(indexPath, newIndexPath)
          console.log('✅ Renamed index.html to indexInv.html')
        }

        // Eliminar bg.png si existe en dist/
        const bgPath = join(__dirname, 'dist', 'bg.png')
        if (existsSync(bgPath)) {
          unlinkSync(bgPath)
          console.log('🗑️ Removed bg.png from dist/')
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assetsInv/[name].[hash][extname]',
        chunkFileNames: 'assetsInv/[name].[hash].js',
        entryFileNames: 'assetsInv/[name].[hash].js'
      }
    }
  }
})
