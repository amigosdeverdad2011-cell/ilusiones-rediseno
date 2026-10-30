# INSTRUCCIONES PARA ENTREGAR A CLAUDE CODE, CODEX O ANTIGRAVITY

Te comparto la carpeta completa `Ilusiones_Cajamarca_Proyecto_Editable/`. Necesito mejorar la interfaz de la web de la tienda familiar **Ilusiones · Flores y Regalos**, en Cajamarca (Perú). El sitio principal original es:

https://ilusiones-cajamarca.amigosdeverdad2011.chatgpt.site/

**Muy importante:** el ZIP contiene una **reconstrucción editable React + Vite**, NO el código fuente original de ChatGPT Sites. No digas que has recuperado la versión fuente original. No cambies el sitio publicado ni su URL, proyecto o código QR.

## Objetivo inmediato

1. Lee `README.md`, `ESTADO_Y_LIMITACIONES.md`, `src/data/products.json` y `src/data/config.js`.
2. Instala dependencias con `npm install` y ejecuta `npm run dev`; primero verifica que funcione sin errores.
3. Mejora la interfaz y experiencia (móvil primero, desktop impecable) con una estética elegante, romántica, moderna, de calidad profesional, cálida y delicada. Mantén la identidad crema + rosa antiguo + dorado, pero moderniza composición, tipografía, tarjetas, fotografías, filtros, microinteracciones, usabilidad, accesibilidad y rendimiento.
4. Preserva la información exacta del catálogo recuperado: 24 productos con nombres, precios y enlaces de imágenes; no inventes precios ni reemplaces imágenes reales por otras sin indicarlo.
5. Deja preparadas las categorías Peluches, Arreglos florales, Amigurumis y A tu gusto; las categorías sin datos verificados deben mostrarse vacías o con aviso, nunca llenarse con contenido ficticio.
6. Preserva ambos contactos de WhatsApp, la dirección, la política del 30 % de adelanto (a confirmar antes de publicar), filtros por presupuesto y pedidos precargados con nombre del producto.
7. La historia/foto de los abuelos aún no fue incluida: deja la estructura preparada y solicita los archivos reales solo si son imprescindibles para completarla.
8. El panel `AdminPanel.jsx` usa solo `localStorage`, no un backend real. Si se crea administración pública, proponer autenticación, almacenamiento y permisos seguros; no exponer panel de escritura público.
9. Respeta el proyecto original: ID `appgprj_6aa6c191fcd48191ab57d0e28b8a10e6`, slug `ilusiones-cajamarca`. No crear otro sitio pensando que es el mismo; si deseas desplegar una copia de demostración, indícalo.
10. Conserva los archivos de datos y documenta lo que se modifica; verifica `npm run build` antes de entregar.

## Entregables esperados

- Diseño mejorado, implementado y funcional, no solo un mockup.
- Proyecto completo con estructura ordenada, CSS/componentes editables y responsive.
- Lista clara de cambios, pruebas y pasos de publicación de una copia.
- Ningún cambio ni publicación en el sitio original sin aprobación explícita.

Comienza con una auditoría corta del estado actual y luego implementa mejoras concretas, sin rehacer toda la base de productos.
