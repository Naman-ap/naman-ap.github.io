import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Naman-ap/Portfolio/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
