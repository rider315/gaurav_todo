// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['redux-thunk'], // Ensure redux-thunk is pre-bundled
  },
  build: {
    commonjsOptions: {
      include: [/redux-thunk/, /node_modules/], // Ensure CommonJS modules are resolved
    },
    rollupOptions: {
      external: ['redux-devtools-extension'], // Externalize redux-devtools-extension
    },
  },
});
