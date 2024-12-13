import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';


export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      'components': path.resolve('src/components'),
      'pages': path.resolve('src/pages'),
      'assets': path.resolve('src/assets'),
      'UI': path.resolve('src/components/UI'),
            },
  },
});

