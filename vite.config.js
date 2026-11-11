import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// La tienda oficial (Cloudflare Pages) sí aparece en Google. La copia de GitHub Pages, que se publica en una
// subcarpeta (VITE_BASE_PATH), queda oculta para que Google no vea la tienda duplicada.
// Aprobado por el negocio el 10/11/2026; COPIA_PRUEBA en Cloudflare ya no oculta la tienda oficial.
const noIndexForTestCopy = {
  name: 'noindex-copia-prueba',
  transformIndexHtml(html) {
    if (process.env.COPIA_PRUEBA !== 'true' || !process.env.VITE_BASE_PATH) return html;
    return html.replace('</head>', '  <meta name="robots" content="noindex, nofollow" />\n  </head>');
  },
};

export default defineConfig({
  plugins: [react(), noIndexForTestCopy],
  base: process.env.VITE_BASE_PATH || '/',
});
