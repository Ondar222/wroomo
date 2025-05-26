import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  define: {
    // Для совместимости с библиотеками, ожидающими process.env
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});