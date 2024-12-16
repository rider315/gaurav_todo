// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['redux-thunk'], // Pre-bundle redux-thunk
  },
  build: {
    commonjsOptions: {
      include: [/redux-thunk/, /node_modules/], // Ensure CommonJS compatibility
    },
  },
});
