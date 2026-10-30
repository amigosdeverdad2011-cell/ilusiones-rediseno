# Prompt para Claude Code — Ilusiones · Flores y Regalos

Pega esto en Claude Code, con esta carpeta abierta como proyecto:

---

Trabajas como desarrollador web senior (React, UX/UI, comercio electrónico) en **Ilusiones · Flores y Regalos**, tienda familiar de Cajamarca (Perú). Eslogan: «Detalles que enamoran».

## Punto de partida
Este proyecto es un rediseño en React + Vite ya hecho en otra sesión. Antes de tocar nada lee, en este orden: `CAMBIOS_REDISENO.md`, `ESTADO_Y_LIMITACIONES.md`, `README.md`, `src/data/config.js` y `src/data/products.json`.

Es una **reconstrucción editable**, no el código original de ChatGPT Sites. No digas que es el original.

En la sesión anterior NO se pudo ejecutar `npm install` ni `npm run build` con Vite (se compiló con esbuild). Lo primero es hacerlo tú.

## Reglas
- No modifiques ni publiques nada en el sitio original ni en su dirección, proyecto o código QR.
- No inventes productos, precios, fotos, promociones, textos de la historia ni datos del negocio. Lo que falte se deja vacío o con aviso, y se me pregunta.
- Mantén los 24 productos de `products.json` con sus nombres y precios. Cada vez que cambies ese archivo, sube `CATALOG_VERSION` en `config.js`.
- El adelanto del 30 % está por confirmar: no lo des por vigente sin preguntarme.
- No expongas ningún panel de escritura público sin inicio de sesión.
- Prioridad: experiencia en celular. Comprueba siempre a 390 px de ancho.

## Tareas, en este orden
1. **Verificar:** `npm install`, `npm run dev` y `npm run build`. Corrige lo que falle y dime qué cambiaste. Revisa la consola del navegador.
2. **Fotos reales:** estarán en `public/products/` (te las dejo yo). Relaciona cada foto con su producto mirando la imagen y el nombre del archivo; si hay dudas, pregúntame antes. Actualiza `products.json` con rutas locales (`/products/archivo.jpg`), optimiza el peso de las imágenes y conserva `referencePhoto` solo donde corresponda.
3. **Historia de los abuelos:** cuando te dé la foto y el texto, ponlos en `story` de `config.js`.
4. **Panel de administración real (fase 2):** antes de construirlo pregúntame quién va a editar y desde dónde (celular o computadora). Compara las opciones (por ejemplo un CMS ligero como Decap CMS, o una base de datos con inicio de sesión como Supabase), verifica en su documentación actual cómo se configuran, y propón una. Debe permitir agregar o editar productos, precios, fotos, promociones y la historia, con usuario y contraseña. Explícame los pasos de cuentas y claves que yo deba hacer, sin pedirme claves por el chat.
5. **Publicar una copia de prueba** (GitHub Pages u otra) y dame la lista de pasos.

## Herramientas recomendadas (instálalas si faltan)
- Skills de diseño: `npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng` y `npx skills add https://github.com/emilkowalski/skills --skill mobile-native`.
- Skill de estilo: `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`.
- Playwright para capturas a 390 px y 1440 px.
- Figma (opcional): solo si tengo un diseño allí.

Al terminar cada tarea, dime en pocas líneas qué cambió y qué no pudiste comprobar.
