# Ilusiones · Flores y Regalos — web rediseñada (React + Vite)

Versión mejorada de la tienda familiar de Cajamarca. Es una **copia de desarrollo**: no modifica ni publica nada en la página original.

> Este proyecto sigue siendo una **reconstrucción editable**, no el código fuente original de ChatGPT Sites. Lee `CAMBIOS_REDISENO.md` (qué cambió, qué se probó y qué falta) y `ESTADO_Y_LIMITACIONES.md`.

## 1. Abrirla en Windows

1. Instala **Node.js LTS** desde https://nodejs.org (una sola vez).
2. Descomprime la carpeta y haz doble clic en `INICIAR_EN_WINDOWS.bat`
   (o abre una terminal en la carpeta y ejecuta `npm install` y luego `npm run dev`).
3. Abre la dirección que muestre la terminal, normalmente `http://localhost:5173/`.
4. Para la versión final: `npm run build`. El resultado queda en la carpeta `dist/`.

## 2. Qué editar y dónde

| Quiero cambiar… | Archivo |
| --- | --- |
| Productos, precios, fotos, destacados | `src/data/products.json` (después sube `CATALOG_VERSION` en `config.js`) |
| Teléfonos, dirección, % de adelanto, mapa | `src/data/config.js` → `business` |
| Textos de categorías vacías y colecciones | `src/data/config.js` → `categoryInfo`, `collectionNotes` |
| **Promociones** (solo se muestran si hay alguna) | `src/data/config.js` → `promotions` |
| Fechas especiales | `src/data/config.js` → `specialDates` |
| Fotos de la portada | `src/data/config.js` → `heroProductIds` |
| **Historia y foto de los abuelos** | `src/data/config.js` → `story` |
| Colores y tipografías de toda la página | `src/styles/tokens.css` |
| Aspecto de cada bloque | `src/styles/*.css` (un archivo por zona de la página) |

## 3. Estructura

```text
Ilusiones/
├── index.html                  # Título, descripción, datos para buscadores
├── src/
│   ├── main.jsx · App.jsx      # Arranque y armado de la página
│   ├── components/             # Header, Hero, Catalog, ProductCard,
│   │                           # Promotions, SpecialDates, HowToOrder, Story, Footer,
│   │                           # WhatsAppFab, Photo, AdminPanel
│   ├── lib/                    # links (WhatsApp), storage, dates, useCatalog, useReveal
│   ├── data/                   # products.json y config.js
│   └── styles/                 # tokens, base, header-hero, catalog, sections, footer, admin
├── public/                     # flor.svg y products/ (fotos locales)
├── scripts/descargar_imagenes.py
└── catalogo_24_productos_verificados.csv
```

## 4. Fotos reales

La carpeta oficial de fotos propias es `public/Imagenes Catalogo/` (subcarpetas `arreglos florales`, `peluches` y `amigurumis`).
Si una foto no carga, la tarjeta muestra un recuadro "Foto próximamente" en lugar de una imagen rota.

Las 24 fotos del catálogo ya se guardaron en `public/Imagenes Catalogo/arreglos florales/`. Las que eran grandes se muestran desde su copia en `public/Imagenes Livianas/`.

**Para agregar una foto nueva o un producto nuevo:**

1. Copia la foto a su subcarpeta. El nombre puede tener espacios y tildes.
2. Abre una terminal en `Ilusiones/` y ejecuta `npm run fotos`. Te muestra las fotos que aún no tienen producto, con la línea `"image"` lista para copiar.
3. En `src/data/products.json`, pega esa línea en el producto. Si es un producto nuevo, copia uno existente y cambia `id`, `name`, `price`, `category` y `collection`.
4. Sube `CATALOG_VERSION` en `src/data/config.js` y revisa con `npm run dev`.

Las copias livianas se crean solas al abrir o publicar la web, si una foto pesa más de 300 KB o mide más de 1400 px; el original no se toca. Solo se publican las fotos que usa algún producto o la historia.

## 4.1 Editar desde el celular (Pages CMS)

Entra en https://app.pagescms.org con tu cuenta de GitHub y elige este repositorio. Allí están **Productos**, **Promociones** e **Historia**. Al guardar, GitHub reconstruye y publica la web sola; tarda unos minutos. La configuración del panel está en `.pages.yml`.

## 5. Editar el catálogo desde el navegador

Con `npm run dev` abierto, escribe `#admin` al final de la dirección (por ejemplo `http://localhost:5173/#admin`). Ya no hay ningún botón visible para los clientes.
Los cambios se guardan **solo en ese navegador**; para llevarlos al proyecto usa *Exportar JSON* y copia el contenido a `src/data/products.json`.
Este panel no tiene contraseña: no es un administrador real. Por eso **no se incluye en `npm run build`**: en la página publicada `#admin` no abre nada. Para uno público hace falta un servidor con inicio de sesión.

## 6. Publicar una copia

Sube la carpeta a un repositorio nuevo y activa **Settings → Pages → Source: GitHub Actions**. El flujo de `.github/workflows` publica una copia; la tienda original no se toca.
