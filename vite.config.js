import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// La copia de prueba no debe aparecer en buscadores.
const noIndexForTestCopy = {
  name: 'noindex-copia-prueba',
  transformIndexHtml(html) {
    if (process.env.COPIA_PRUEBA !== 'true') return html;
    return html.replace('</head>', '  <meta name="robots" content="noindex, nofollow" />\n  </head>');
  },
};

export default defineConfig({
  plugins: [react(), noIndexForTestCopy],
  base: process.env.VITE_BASE_PATH || '/',
});
