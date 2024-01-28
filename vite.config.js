// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...commonjs({
        namedExports: {
          'redux-thunk': ['default'], // Specify the named export for redux-thunk
        },
      }),
      enforce: 'pre',
    },
  ],
});
