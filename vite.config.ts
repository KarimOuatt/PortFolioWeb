import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PortFolioWeb/', // <--- C'est ici ! Ça doit être le NOM EXACT de ton repo
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});