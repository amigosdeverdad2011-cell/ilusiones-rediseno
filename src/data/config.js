// ============================================================
//  Datos y textos editables de Ilusiones · Flores y Regalos
//  Aquí se cambian teléfonos, dirección, historia, promociones
//  y fechas especiales. El catálogo está en products.json.
// ============================================================

import promotionsData from './promotions.json';
import storyData from './story.json';

// Solo afecta al editor local (#admin con npm run dev): cambia este valor al editar products.json en la PC
// para que las ediciones antiguas de ese navegador no tapen el catálogo. La web publicada no las usa.
export const CATALOG_VERSION = '2026-10-30-grupos';

export const business = {
  name: 'Ilusiones',
  fullName: 'Regalos y Peluches Ilusiones',
  tagline: 'Detalles que enamoran',
  madeIn: 'Hechos con cariño en Cajamarca',
  subtitle: 'Flores, peluches, amigurumis y regalos',
  city: 'Cajamarca, Perú',
  address: 'Jr. Sor Manuela Gil 210, Cajamarca',
  addressNote: 'Al costado del C. C. Mega Plaza',
  // El primer número recibe los pedidos de los botones. El segundo aparece en el pie de página.
  whatsappNumbers: [
    { number: '51966983881', label: '966 983 881' },
    { number: '51993033389', label: '993 033 389' },
  ],
  originalWebsite: 'https://ilusiones-cajamarca.amigosdeverdad2011.chatgpt.site/',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jr.+Sor+Manuela+Gil+210%2C+Cajamarca%2C+Peru',
  mapEmbedUrl: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sJr.+Sor+Manuela+Gil+210,+Cajamarca,+Peru!6i17',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Jr.+Sor+Manuela+Gil+210%2C+Cajamarca%2C+Peru',
  // Horario confirmado por el negocio el 10/11/2026. Con la lista vacía no se muestra.
  hours: [{ days: 'Lunes a sábado', time: '9:00 a. m. – 8:00 p. m.' }],
  // Política de adelanto confirmada por el negocio el 30/10/2026.
  advancePercent: 30,
  deliveryOffered: true,
};

// Bloque "Envía un regalo a Cajamarca". Zonas y pagos confirmados por el negocio el 10/11/2026.
// No hay cuenta bancaria publicada: los datos de transferencia se envían por WhatsApp.
export const giftDelivery = {
  zones: ['Cajamarca ciudad', 'Baños del Inca'],
  payments: [
    { name: 'Yape', detail: '966 983 881' },
    { name: 'Plin', detail: '966 983 881' },
    { name: 'Transferencia', detail: 'Te enviamos los datos por WhatsApp' },
  ],
  whatsappMessage: '¡Hola, Ilusiones! 🌸 Vivo fuera de Cajamarca y quiero enviar un regalo. ¿Me ayudan a coordinarlo?',
};

// Campaña de temporada: se muestra sola entre "from" y "until" (mes y día, ambos incluidos) y luego desaparece.
// productIds son fotos propias del catálogo; "collection" es el grupo que abre el botón del banner.
export const campaign = {
  id: 'navidad',
  from: { month: 11, day: 1 },
  until: { month: 12, day: 25 },
  eyebrow: 'Navidad',
  title: 'Nacimientos y virgencitas',
  titleAccent: 'tejidos a mano',
  text: 'Los teje la abuela de la familia, punto por punto, aquí en Cajamarca. Pide el tuyo con tiempo para tu Nochebuena o para regalar.',
  productIds: ['ilu-041', 'ilu-033', 'ilu-044'],
  collection: 'Religiosos',
  category: 'Amigurumis',
  buttonLabel: 'Ver nacimientos y virgencitas',
  whatsappMessage: '¡Hola, Ilusiones! 🌸 Quisiera consultar por un nacimiento o una virgencita tejida para Navidad.',
};

// Productos que aparecen en la portada, en este orden. En escritorio se muestran los tres primeros.
// Conviene elegir fotos propias, no fotos de referencia.
export const heroProductIds = ['ilu-026', 'ilu-032', 'ilu-030', 'ilu-037'];

export const categories = ['Todos', 'Amigurumis', 'Arreglos florales', 'Peluches', 'A tu gusto'];

// Texto de cada categoría. "emptyNote" se muestra mientras la categoría no tiene productos verificados.
export const categoryInfo = {
  'Arreglos florales': {},
  Peluches: {
    emptyNote: 'Muy pronto',
    emptyTitle: 'Estamos preparando los peluches',
    emptyText: 'Aún no publicamos productos en esta categoría. Escríbenos por WhatsApp y te contamos qué tenemos disponible.',
  },
  Amigurumis: {
    emptyNote: 'Muy pronto',
    emptyTitle: 'Estamos preparando los amigurumis',
    emptyText: 'Aún no publicamos productos en esta categoría. Escríbenos por WhatsApp y te contamos qué tenemos disponible.',
  },
  'A tu gusto': {
    emptyNote: 'Cuéntanos tu idea',
    emptyTitle: 'Hacemos detalles a tu gusto',
    emptyText: 'Cuéntanos lo que imaginas y conversemos sobre un detalle pensado para esa persona especial.',
  },
};

// Frase bajo el título de cada colección del catálogo (se usa el nombre de "collection" de products.json).
export const collectionNotes = {
  Religiosos: 'Nacimientos, virgencitas y santitos tejidos a mano para Navidad.',
  'Muñecas, animalitos y detalles': 'Tejidos a mano por la abuela, uno por uno.',
  Personajes: 'Tus personajes favoritos, tejidos a mano.',
  'Flores amarillas': 'Para iluminarle el día a una persona especial.',
  'Arreglos hechos con cariño': 'Detalles que acompañan las mejores historias.',
};

// Orden de los grupos en el catálogo. Los que no estén aquí van al final, en el orden de products.json.
// En Navidad van primero los religiosos; las flores amarillas (campaña de septiembre) van al final.
export const collectionOrder = [
  'Religiosos',
  'Muñecas, animalitos y detalles',
  'Personajes',
  'Arreglos hechos con cariño',
  'Peluches',
  'Flores amarillas',
];

// Tarjeta "Pídelo personalizado": aparece dentro del primer grupo de amigurumis del catálogo.
export const customOrder = {
  category: 'Amigurumis',
  title: 'Pídelo personalizado',
  text: 'Tu mascota, una persona o el diseño que imagines, tejido a mano por la abuela.',
  buttonLabel: 'Pedir por WhatsApp',
  whatsappMessage: '¡Hola, Ilusiones! 🌸 Quisiera un amigurumi personalizado. Les cuento mi idea:',
};

// Promociones: se editan en promotions.json o desde el panel. Con la lista vacía, la sección NO se muestra.
export const promotions = promotionsData;

// Fechas especiales: se muestran las próximas según el día en que se abre la página.
// month = mes (1-12). Usa "day" para una fecha fija o "nthWeekday" para "el n-ésimo domingo" (weekday 0 = domingo).
export const specialDates = [
  { id: 'san-valentin', name: 'San Valentín', rule: { month: 2, day: 14 } },
  { id: 'dia-mujer', name: 'Día de la Mujer', rule: { month: 3, day: 8 } },
  { id: 'dia-madre', name: 'Día de la Madre', rule: { month: 5, nthWeekday: { n: 2, weekday: 0 } } },
  { id: 'dia-padre', name: 'Día del Padre', rule: { month: 6, nthWeekday: { n: 3, weekday: 0 } } },
  { id: 'navidad', name: 'Navidad', rule: { month: 12, day: 25 } },
];

// Historia familiar: se edita en story.json o desde el panel.
export const story = storyData;
