---
name: Regalos y Peluches Ilusiones
description: Detalles que enamoran · Hechos con cariño en Cajamarca
colors:
  rosa-antiguo: "#a94e66"
  rosa-antiguo-profundo: "#8f3f56"
  rosa-suave: "#efd2d8"
  rosa-palido: "#f7e6e8"
  dorado: "#c9a25f"
  dorado-profundo: "#8a6a2f"
  dorado-marca: "#94752f"
  dorado-palido: "#f4e8d0"
  crema: "#fbf6ee"
  crema-honda: "#f4ebdd"
  papel: "#fffdf9"
  blanco: "#ffffff"
  linea: "#ecdfd6"
  tinta: "#3a2f32"
  tinta-suave: "#5b4f52"
  tinta-apagada: "#6f6366"
  noche: "#382e30"
  noche-texto: "#e6d6d6"
  noche-enlace: "#f0b9c6"
  noche-linea: "#5a4d50"
  verde-whatsapp: "#2f9a68"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 11.5vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 5.2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.6rem, 4vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  brand:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  product-name:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
  price:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
  label:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  s: "12px"
  field: "14px"
  m: "18px"
  l: "28px"
  pill: "999px"
spacing:
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  section-mobile: "72px"
  section-tablet: "104px"
  section-desktop: "128px"
  container-max: "1200px"
  header-mobile: "64px"
  header-desktop: "76px"
components:
  button-primary:
    backgroundColor: "{colors.rosa-antiguo}"
    textColor: "{colors.blanco}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.rosa-antiguo-profundo}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.rosa-antiguo-profundo}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-soft:
    backgroundColor: "{colors.rosa-palido}"
    textColor: "{colors.rosa-antiguo-profundo}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "44px"
  button-soft-hover:
    backgroundColor: "{colors.rosa-antiguo}"
    textColor: "{colors.blanco}"
  button-light:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.rosa-antiguo-profundo}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  chip:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta-suave}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.rosa-antiguo}"
    textColor: "{colors.blanco}"
  search-field:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "48px"
  product-card-media:
    backgroundColor: "{colors.rosa-palido}"
    rounded: "{rounded.m}"
  date-card:
    backgroundColor: "{colors.papel}"
    rounded: "{rounded.m}"
    padding: "18px 16px"
  date-card-next:
    backgroundColor: "{colors.rosa-antiguo}"
    textColor: "{colors.blanco}"
  whatsapp-fab:
    backgroundColor: "{colors.verde-whatsapp}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
    size: "50px"
  footer:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.noche-texto}"
---

# Design System: Regalos y Peluches Ilusiones

<!-- Generado el 2026-11-10 con /impeccable document (modo scan, combinado con las reglas de marca de la familia). Fuente de verdad de los valores: src/styles/tokens.css y los CSS de src/styles/. -->

## Overview

**Creative North Star: "El taller de la abuela"**

Ilusiones se siente como una tienda pequeña hecha a mano en Cajamarca: papel crema de fondo, un rosa antiguo que aparece solo donde hay que actuar, y un dorado fino que firma los detalles. Es una boutique de regalos familiar y artesanal: elegante, romántica, cálida, delicada, moderna y profesional, nunca una plantilla de e-commerce. Las fotos reales de los productos y de la familia son las protagonistas; el diseño las enmarca con calma.

La densidad es tranquila. Las secciones respiran (de 72 px en celular a 128 px en escritorio). Los títulos van en una serif romántica, y todo lo que se lee o se toca va en una sans limpia y grande. El color de fondo cambia por bloques (crema, rosa pálido, dorado pálido y la noche del pie de página) en lugar de usar sombras. El movimiento es corto y suave: los botones se hunden al tocarlos, las fotos crecen un poco al pasar el mouse y las secciones suben despacio al aparecer. Todo se apaga con "reducir movimiento".

**The Handmade Rule.** Lo tejido a mano siempre se ve y se nombra: si una pieza la hizo la abuela, el diseño lo dice.

**The WhatsApp Rule.** Cada producto y cada sección terminan en una acción clara hacia WhatsApp.

**Key Characteristics:**
- Base crema y papel; rosa antiguo solo en acciones, precios y palabras en cursiva.
- Pareja tipográfica Playfair Display (titulares) y DM Sans (lectura y botones).
- Fotos en marco de arco: el sello visual de la portada y de la historia.
- Plano por defecto: la profundidad la dan los fondos por bloque, no las sombras.
- Botones en píldora de 44–48 px de alto, cómodos para el dedo y para personas mayores.

## Colors

Una paleta cálida y contenida: crema de base, rosa antiguo como única voz de acción y dorado como firma fina.

### Primary
- **Rosa antiguo** (#a94e66): botones principales, chip activo, la próxima fecha especial, números de "Cómo pedir", foco del teclado y las palabras en cursiva de los títulos (`em`).
- **Rosa antiguo profundo** (#8f3f56): precios, texto de botones claros y enlaces, y el hover del botón principal.
- **Rosa suave** (#efd2d8): borde del botón fantasma y hover de botones discretos.
- **Rosa pálido** (#f7e6e8): fondo de las secciones de historia y promociones, el fondo de las fotos mientras cargan, botón "Pedir" de cada tarjeta y estados vacíos.

### Secondary
- **Dorado** (#c9a25f): solo detalles finos, como los puntos de los datos de la portada. Nunca como fondo grande.
- **Dorado profundo** (#8a6a2f): textos pequeños dorados (insignia "Destacado", días que faltan, vigencia de promociones).
- **Dorado de marca** (#94752f): solo el nombre "Ilusiones" en la cabecera. Hoy está escrito directamente en `header-hero.css`, no en `tokens.css`.
- **Dorado pálido** (#f4e8d0): fondo de la sección "Fechas para regalar".

### Tertiary
- **Amarillo floral**: [por definir]. Es solo para campañas (flores amarillas el 21 de septiembre, Año Nuevo). No existe en el código todavía. Se define cuando haya una campaña real; el logo tiene un amarillo dorado (#dcc36f) como referencia, sin adoptarlo aún.

### Neutral
- **Crema** (#fbf6ee): fondo general de la página, de la portada y de la barra fija de categorías.
- **Crema honda** (#f4ebdd): fondo de la foto ampliada y de los botones discretos.
- **Papel** (#fffdf9): cabecera, tarjetas de fechas y de promociones, campos de búsqueda, chips y el menú del celular.
- **Línea** (#ecdfd6): bordes de chips, buscador y selector.
- **Tinta** (#3a2f32): texto principal. **Tinta suave** (#5b4f52): párrafos de apoyo. **Tinta apagada** (#6f6366): contadores, subtítulos y textos de ayuda.
- **Noche** (#382e30): fondo del pie de página, con texto #e6d6d6, enlaces #f0b9c6 y línea #5a4d50.
- **Verde WhatsApp** (#2f9a68): solo el botón flotante de WhatsApp.

**The Calm Base Rule.** La base es crema/blanco; los colores de marca son acentos, no fondos dominantes.

**The One Voice Rule.** El rosa antiguo sólido es la única señal de "toca aquí". Si algo no es una acción, un precio o una palabra destacada, no va en rosa sólido.

El botón de WhatsApp puede usar el verde reconocible de WhatsApp por claridad, siempre con buen contraste.

## Typography

**Display Font:** Playfair Display (con Georgia y Times New Roman de respaldo)
**Body Font:** DM Sans (con system-ui, Segoe UI, Roboto y Arial de respaldo)

**Character:** Una serif de alto contraste, romántica y un poco teatral para los titulares, junto a una sans geométrica y amable que se lee bien en el celular. Se cargan desde Google Fonts: DM Sans 400/500/600/700 y Playfair Display 500/600, más la cursiva 500.

### Hierarchy
- **Display** (500, clamp(2.6rem, 11.5vw, 5.25rem), 1.02): solo el titular de la portada, "Detalles que *enamoran*".
- **Headline** (500, clamp(1.9rem, 5.2vw, 3rem), 1.12): títulos de sección. La segunda parte va en cursiva rosa.
- **Title** (500, clamp(1.6rem, 4vw, 2.25rem), 1.12): títulos de colección del catálogo. Los pasos y la ficha ampliada usan 1.4–1.5rem.
- **Body** (400, 1rem, 1.6): texto general. Los párrafos de entrada usan 1.0625rem con un ancho máximo de 38–46ch.
- **Product name** (DM Sans 600, 0.9375rem, 1.3): el nombre en cada tarjeta, en sans y no en serif, para que se lea rápido.
- **Price** (DM Sans 700, 1.125rem, rosa antiguo profundo): el precio en la tarjeta; sube a 1.375rem en la ficha ampliada.
- **Label** (DM Sans 600, 0.875–0.95rem): botones, chips y menú. El texto más chico de la web es de 0.75rem (12 px), solo en insignias y en el subtítulo de la marca.

**The Italic Accent Rule.** Cada titular puede llevar una sola palabra o frase en cursiva rosa (`<em>`), nunca más de una por título.

**The Readable Floor Rule.** El texto que se lee o se toca nunca baja de 0.875rem, y los campos de texto usan 16 px para que el iPhone no haga zoom.

## Layout

Pensada primero para celular, sin scroll horizontal. El contenedor mide como máximo 1200 px, con márgenes laterales de 20 px en celular y 32 px desde 720 px. El espacio vertical entre secciones es de 72 / 104 / 128 px (celular / 720 px / 960 px). La cabecera mide 64 px y 76 px desde 960 px.

- **Portada:** en celular, el titular va primero y debajo una tira de fotos que se desliza con el dedo (66vw, máximo 280 px), con imanes al soltar. Desde 900 px pasa a dos columnas: texto a la izquierda, y a la derecha una foto grande en arco (520 px) más dos fotos pequeñas.
- **Catálogo:** grilla de 2 columnas en celular, 3 desde 640 px y 4 desde 1000 px (espacios de 24/12 → 32/16 → 40/24 px). La barra de categorías queda fija bajo la cabecera. En celular, los filtros de presupuesto y orden se abren con un botón; desde 900 px quedan siempre visibles.
- **Secciones de dos columnas** (fechas, historia): una columna en celular, dos desde 900 px.
- **Puntos de quiebre en uso:** 480, 640, 720, 900, 960, 1000 y 1240 px.

La dirección "al costado de Mega Plaza", el horario y el botón de WhatsApp deben estar siempre fáciles de encontrar. En celular, el botón flotante de WhatsApp reemplaza al botón de la cabecera; desde 960 px el botón vive en la cabecera y el flotante se oculta.

## Elevation & Depth

El sistema es plano y usa capas de color: la profundidad viene del cambio de fondo entre bloques (crema → rosa pálido → dorado pálido → noche), no de sombras. Las tarjetas de producto no tienen sombra ni borde; la foto con fondo rosa pálido es la tarjeta. Las pocas sombras que hay son funcionales.

### Shadow Vocabulary
- **Línea de cabecera** (`box-shadow: 0 1px 0 rgba(58, 47, 50, 0.08)`): separa la cabecera fija del contenido.
- **Menú desplegado** (`box-shadow: 0 18px 30px rgba(58, 47, 50, 0.12)`): el menú del celular, que flota sobre la página.
- **Botón flotante** (`box-shadow: 0 10px 28px rgba(47, 95, 79, 0.35)`): solo el botón de WhatsApp.
- **Velo de la ficha** (`background: rgba(29, 23, 25, 0.55)`): oscurece el fondo cuando se abre la vista ampliada de un producto.

**The Flat-By-Default Rule.** Nada tiene sombra en reposo salvo lo que flota sobre la página (cabecera, menú y botón de WhatsApp).

## Shapes

Formas suaves y delicadas. La escala de radios es de 12 px (selector), 14 px (buscador y botón de filtros), 18 px (fotos de producto y tarjetas) y 28 px (ficha ampliada y bases de los arcos). Los botones, chips e insignias son píldoras (999 px).

La forma distintiva es el **arco**: la foto principal de la portada (`border-radius: 999px 999px 28px 28px`), las fotos de la tira en celular (`999px 999px 18px 18px`) y la foto de los abuelos (`50% 50% 28px 28px / 34% 34% 28px 28px`). Recuerda una ventana o una capilla y enmarca lo hecho a mano.

**The Arch Rule.** El arco se reserva para las fotos protagonistas (portada e historia). Las fotos del catálogo usan el rectángulo de 18 px para que la grilla se lea ordenada.

## Components

Refinados y contenidos: superficies planas, píldoras amables y una respuesta táctil inmediata.

### Buttons
- **Shape:** píldora (999 px), de 48 px de alto (44 px en la versión pequeña), borde de 1.5 px.
- **Primary:** fondo rosa antiguo (#a94e66) y texto blanco, DM Sans 600 a 0.95rem, con 24 px de relleno lateral.
- **Hover / Focus:** con mouse, el fondo pasa a rosa profundo (#8f3f56) en 160 ms. Al presionar se hunde a escala 0.97. El foco del teclado es un contorno rosa de 3 px separado 3 px. Los efectos de hover solo existen donde hay mouse (`hover: hover`), para que no se queden pegados en el celular.
- **Ghost:** transparente, borde rosa suave y texto rosa profundo (WhatsApp en la portada de escritorio).
- **Soft:** fondo rosa pálido y texto rosa profundo; con hover se vuelve rosa sólido. Es el botón "Pedir" de cada tarjeta.
- **Light / Quiet:** papel sobre fondos oscuros (los teléfonos del pie de página) y crema honda para acciones secundarias.

### Chips
- **Style:** píldora de papel con borde línea (#ecdfd6), texto tinta suave, DM Sans 600 a 0.9rem y 44 px de alto. Pueden llevar un contador al 70 % de opacidad.
- **State:** el activo lleva fondo y borde rosa antiguo con texto blanco; con hover, el inactivo toma fondo rosa pálido. Se usan en las categorías (barra fija con scroll lateral) y en los presupuestos.

### Cards / Containers
- **Tarjeta de producto:** foto 4:5 con radio de 18 px sobre fondo rosa pálido, sin borde ni sombra. Abajo van el nombre, el precio en rosa profundo y el botón "Pedir". Al tocar la foto se abre la ficha ampliada; con mouse, la foto crece a 1.04 en 500 ms.
- **Insignias:** píldoras de papel al 94 % de opacidad sobre la foto: "Destacado" en dorado profundo arriba y "Foto de referencia" en tinta suave abajo.
- **Tarjetas de fecha y de promoción:** fondo papel, radio de 18 px, relleno de 18–24 px. La próxima fecha va en rosa sólido.
- **Estado vacío:** bloque rosa pálido con radio de 18 px, centrado, con título en serif y un botón a WhatsApp.

### Inputs / Fields
- **Buscador:** fondo papel, borde línea y radio de 14 px, 48 px de alto, ícono en rosa y texto a 16 px.
- **Focus:** contorno rosa de 3 px sobre todo el campo (`:focus-within`).
- **Selector de orden:** papel, borde línea, radio de 12 px y 44 px de alto.

### Navigation
- **Cabecera fija** en papel, con el logo de marca (44 px) más "Ilusiones" en Playfair dorado y el subtítulo en tinta apagada.
- **Celular:** botón de menú redondo de 44 px que despliega un panel de papel con enlaces de 52 px de alto a 1.0625rem.
- **Escritorio (960 px o más):** enlaces en fila con 28 px de separación, DM Sans 600 a 0.9rem en tinta suave, que pasan a rosa con hover, más el botón "Pedir por WhatsApp".

### Ficha ampliada del producto (componente distintivo)
En celular es una hoja que sube desde abajo (radio de 28 px arriba, 320 ms, máximo 92dvh). En computadora es una ventana centrada de hasta 860 px con dos columnas: foto completa sobre crema honda y, al lado, nombre, precio y un botón de ancho completo a WhatsApp.

### Botón flotante de WhatsApp (componente distintivo)
Círculo verde de 50 px abajo a la derecha, que respeta el notch. Se oculta mientras la grilla de productos ocupa la parte baja de la pantalla, porque cada tarjeta ya tiene su botón, y no existe desde 960 px.

## Do's and Don'ts

### Do:
- **Do** usar las fotos reales del catálogo y comprimirlas para que carguen rápido. El proyecto ya genera copias livianas cuando una foto pesa más de 300 KB o mide más de 1400 px.
- **Do** mostrar "Hechos con cariño en Cajamarca" y la historia familiar, con la foto de los abuelos en arco.
- **Do** destacar los amigurumis como producto estrella y la opción de personalizados.
- **Do** mostrar "Consultar precio" cuando un precio no esté confirmado. `formatPrice` ya lo hace cuando el precio está vacío o es 0.
- **Do** tomar los colores de `src/styles/tokens.css`. Los que hoy están escritos a mano (dorado de marca #94752f y los tonos del pie de página) deberían pasar a tokens antes de agregar más.
- **Do** mantener los objetivos táctiles de 44 px o más, y los efectos de hover solo dentro de `@media (hover: hover) and (pointer: fine)`.
- **Do** respetar "reducir movimiento": toda animación pasa por `--ease-out` (cubic-bezier(0.23, 1, 0.32, 1)) y se anula con `prefers-reduced-motion`.

### Don't:
- **Don't** verse genérica ni recargada: nada de plantillas de tienda online, sombras exageradas ni demasiados colores.
- **Don't** usar el dorado ni el amarillo como fondo de grandes superficies. El dorado pálido (#f4e8d0) es el único fondo dorado y solo para un bloque.
- **Don't** usar fotos de stock ni imágenes de personajes con marca registrada.
- **Don't** inventar reseñas, testimonios, descuentos ni cifras.
- **Don't** agregar carrito de compras ni pagos en línea: el pedido es por WhatsApp.
