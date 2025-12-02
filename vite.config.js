// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [
//     laravel({
//       input: ['resources/css/app.css', 'resources/js/app.jsx'],
//       refresh: true,
//     }),
//     react(),
//     tailwindcss(),
//   ],
// });
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),

    react({
      jsxRuntime: 'automatic',
      fastRefresh: true,
    }),

    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      '@css': path.resolve(__dirname, 'resources/css'),
      '@components': path.resolve(__dirname, 'resources/js/Components'),
      '@pages': path.resolve(__dirname, 'resources/js/Pages'),
      '@utils': path.resolve(__dirname, 'resources/js/utils'),
    },
  },

  build: {
    target: 'esnext',
    minify: 'esbuild',

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },

    chunkSizeWarningLimit: 900,
  },

  server: {
    host: true,
    strictPort: true,
    port: 5173,
    hmr: { host: 'localhost' },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', '@inertiajs/react'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
});
