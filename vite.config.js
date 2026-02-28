import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for React app.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': path.resolve(__dirname, 'src/lib/react-router-dom.jsx'),
      'react-helmet-async': path.resolve(__dirname, 'src/lib/react-helmet-async.jsx'),
      'framer-motion': path.resolve(__dirname, 'src/lib/framer-motion.jsx'),
    },
  },
});
