# Cambios del rediseño — 30 de octubre de 2026

## Qué se conserva (sin tocar)
- Los 24 productos de `src/data/products.json`: nombres, precios, enlaces de fotos, colecciones, marcas de "foto de referencia".
- Los dos WhatsApp, la dirección y el mapa, el 30 % de adelanto, el delivery.
- La identidad: crema, rosa antiguo y dorado suave, con Playfair Display y DM Sans. El eslogan "Detalles que enamoran".
- Mensajes de WhatsApp con el nombre del producto.

## Problemas corregidos
1. **Precios desactualizados a clientes que vuelven.** Antes, cada visita guardaba una copia del catálogo en el navegador y esa copia tapaba `products.json`. Ahora una visita normal no guarda nada; solo se guarda si alguien edita desde `#admin`, y con un número de versión (`CATALOG_VERSION`) para que las copias viejas se ignoren.
2. **El editor era visible para todos.** Ahora solo se abre escribiendo `#admin` en la dirección.
3. **Categorías vacías.** Peluches, Amigurumis y A tu gusto muestran un aviso claro con botón de WhatsApp, en lugar de "no encontramos productos con esos filtros". No se inventó ningún producto.
4. **Segundo WhatsApp.** Antes era solo texto; ahora ambos números son botones.
5. **Campo "destacado".** Antes no se usaba; ahora marca las tarjetas destacadas y elige las fotos de la portada.
6. **Accesibilidad:** enlace "Saltar al contenido", foco visible, botones de filtro con estado para lectores de pantalla, menú con `aria-expanded`, texto mínimo de 12 px, objetivos táctiles de 44 px o más, respeto de "reducir movimiento".
7. **Rendimiento:** foto principal con prioridad de carga, fotos con tamaño reservado (sin saltos de diseño), una fuente menos pesada, CSS dividido en archivos.
8. **Celular:** sin destello gris al tocar, efectos de "mouse encima" solo donde hay mouse, campo de búsqueda de 16 px (iPhone no hace zoom), botones con respuesta inmediata al presionar, márgenes seguros para notch en el botón de WhatsApp.
9. **Código mantenible:** `App.jsx` pasó de 120 líneas densas a componentes separados; el CSS ya no está en una sola línea.
10. **Buscadores:** descripción, datos de negocio (nombre, dirección, teléfonos) en formato estándar.

## Qué es nuevo
- Portada con foto grande en arco, dos botones claros y datos calculados del catálogo (cantidad, precio mínimo).
- Tarjetas de categoría.
- Catálogo con buscador, presupuesto en botones, orden, contador y barra de categorías que queda fija al bajar.
- Tarjetas de producto más grandes, con botón "Pedir por WhatsApp".
- Sección **Fechas para regalar**: calcula sola las próximas fechas (Navidad, San Valentín, Día de la Mujer, Día de la Madre, Día del Padre) y los días que faltan.
- Sección **Promociones**: preparada, y oculta mientras no haya promociones reales.
- Sección **Cómo pedir** en tres pasos.
- Historia familiar lista para la foto real (`config.js` → `story`).

## Qué se probó
- El proyecto se **compiló con esbuild + React** (mismo JSX y mismos imports) sin errores.
- Se abrió en un navegador real (Chromium) en **celular 390 px, tablet 768 px y escritorio 1440 px**: 40 comprobaciones automáticas correctas (sin errores de consola, sin desplazamiento horizontal, 24 productos, filtros, búsqueda, orden, categorías vacías, menú móvil, enlaces de WhatsApp, panel `#admin`, persistencia, barra fija, movimiento reducido, fotos que no cargan).

## Verificación con Vite (hecha después del rediseño)
- `npm install`, `npm run dev` y `npm run build` funcionan con Node 26 y Vite 6, sin errores en la consola del navegador.
- Comprobado a 390 px y 1440 px con las fotos del sitio original y las tipografías de Google Fonts cargando.
- El editor `#admin`, que no tiene contraseña, ya solo existe con `npm run dev`; no se incluye en `npm run build`.

## Qué NO se pudo probar (hazlo en tu PC)
- **Un teléfono real**: sin el aparato no se pueden confirmar al 100 % el tacto, el teclado ni la barra de direcciones.

## Datos que faltan o hay que confirmar
- Precios de septiembre de los 26 productos recuperados del repositorio `ilusiones-cajamarca`: 12 están en S/ 75 y conviene confirmarlos.
- Fotos a reemplazar: capturas de pantalla y la «Sagrada Familia tejida a color», que muestra la marca de otra cuenta.
- Las 19 fotos de `amigurumis/` sin código `ilu-` y la foto de girasoles con rosas rojas: faltan nombre y precio.
- Si existen promociones reales (para llenar `promotions`).
- Redes sociales y horario: no hay datos verificados, por eso no aparecen.
