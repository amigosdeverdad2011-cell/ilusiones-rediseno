# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Personas de la ciudad de Cajamarca (Perú) que buscan un regalo: parejas y jóvenes, mamás y papás que compran para niños, oficinas y colegios que necesitan varios detalles (amigo secreto, docentes, promociones).
- Cajamarquinos que viven en Lima o en el extranjero y quieren mandar un regalo a su familia en Cajamarca.
- La mayoría entra desde el celular, muchas veces con datos móviles, llegando desde Instagram, TikTok, Facebook, Google o el QR impreso de la tienda.
- Su tarea: ver qué hay, cuánto cuesta y escribir por WhatsApp para pedir.

## Product Purpose

Catálogo web de la tienda física "Regalos y Peluches Ilusiones". La web no tiene carrito ni pagos: cada producto lleva a WhatsApp con el nombre del producto ya escrito en el mensaje. Éxito = más consultas por WhatsApp y más gente que visita la tienda.

## Positioning

Los amigurumis los teje a mano la abuela de la familia, en Cajamarca, y se pueden pedir personalizados (mascotas, personas, diseños del cliente). Las florerías vecinas (Jr. Amalia Puga) venden rosas, peluches y globos iguales entre sí; ninguna conocida ofrece amigurumis hechos a mano. Es un negocio familiar con historia propia.

## Operating Context

- Tienda física: Jr. Sor Manuela Gil 210, al costado del C. C. Mega Plaza, Cajamarca.
- Pedidos y consultas solo por WhatsApp: 966 983 881 (principal) y 993 033 389.
- Pagos por Yape, Plin, transferencia o efectivo (por confirmar con la propietaria).
- Hay un QR impreso que apunta a la web: no se cambia.
- Campañas por fechas: Navidad, Año Nuevo, San Valentín, Día de la Madre, flores amarillas (21 de septiembre), entre otras.

## Capabilities and Constraints

- Proyecto React + Vite, reconstrucción independiente del sitio original de ChatGPT Sites (https://ilusiones-cajamarca.amigosdeverdad2011.chatgpt.site/).
- Catálogo en `src/data/products.json`: 50 productos (24 flores, 25 amigurumis, 1 peluche). Categorías: Peluches, Arreglos florales, Amigurumis, A tu gusto (personalizados).
- Filtros por categoría y presupuesto; orden por precio; tarjetas con foto, nombre, precio y botón de WhatsApp.
- `AdminPanel.jsx` usa localStorage: no es una base de datos ni un panel seguro.
- Los precios se recuperaron de un Excel con un error de formato: todos deben confirmarse antes de publicarse. Un precio no confirmado se muestra como "Consultar precio".
- Adelanto para personalizados: 30 % (por confirmar).
- Producto estrella: amigurumis (listos y personalizados, 1 a 2 semanas de entrega). Flores por pedido. Peluches solo en combos.
- No cambiar URL, slug ni QR publicados. Publicación prevista: GitHub Pages.

## Brand Commitments

- Nombre: Regalos y Peluches Ilusiones.
- Frases: "Bienvenidos a Ilusiones", "Detalles que enamoran", "Hechos con cariño en Cajamarca".
- Presentación: Peluches · Flores · Amigurumis · Regalos.
- Logotipo existente en `public/logo/` (ilusiones-logo.svg, ilusiones-logo.png, ilusiones-marca.svg).
- Voz: cálida, cercana, familiar, en español de Perú. Tutear al cliente.

## Evidence on Hand

- Fotos reales de los productos en `public/Imagenes Catalogo/` y versiones livianas en `public/Imagenes Livianas/`.
- Foto de los abuelos en `public/.../historia/abuelos-ilusiones.(png|jpg)`: publicarla solo con permiso de la familia.
- No hay testimonios, reseñas ni cifras de clientes todavía: no inventarlos.

## Product Principles

1. Cada camino termina en WhatsApp: ningún producto sin botón de pedido.
2. Lo hecho a mano y la familia son el argumento de venta; se muestran, no se adornan.
3. Rápida y clara en un celular con datos móviles antes que espectacular en una pantalla grande.
4. Nunca mostrar un precio, plazo o política que la propietaria no haya confirmado.

## Accessibility & Inclusion

Público amplio, incluidas personas mayores: textos legibles, buen contraste, botones grandes y fáciles de tocar.
