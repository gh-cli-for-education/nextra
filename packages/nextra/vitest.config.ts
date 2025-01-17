import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 9_000
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**', '**/generated-*']
    }
  }
})
