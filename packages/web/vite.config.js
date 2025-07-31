import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

const SRC_DIR = import.meta.dirname + '/src'

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '#': SRC_DIR
    }
  }
})
