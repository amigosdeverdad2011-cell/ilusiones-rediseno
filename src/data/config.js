// ============================================================
//  Datos y textos editables de Ilusiones · Flores y Regalos
//  Aquí se cambian teléfonos, dirección, historia, promociones
//  y fechas especiales. El catálogo está en products.json.
// ============================================================

import promotionsData from './promotions.json';
import storyData from './story.json';

// Solo afecta al editor local (#admin con npm run dev): cambia este valor al editar products.json en la PC
// para que las ediciones antiguas de ese navegador no tapen el catálogo. La web publicada no las usa.
export const CATALOG_VERSION = '2026-10-30-panel';

export const business = {
  name: 'Ilusiones',
  fullName: 'Ilusiones · Flores y Regalos',
  tagline: 'Detalles que enamoran',
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
  // Política de adelanto confirmada por el negocio el 30/10/2026.
  advancePercent: 30,
  deliveryOffered: true,
};

// Productos que aparecen en la portada, en este orden. En escritorio se muestran los tres primeros.
// Conviene elegir fotos propias, no fotos de referencia.
export const heroProductIds = ['ilu-012', 'ilu-011', 'ilu-014', 'ilu-001'];

export const categories = ['Todos', 'Arreglos florales', 'Peluches', 'Amigurumis', 'A tu gusto'];

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
  'Flores amarillas': 'Para iluminarle el día a una persona especial.',
  'Arreglos hechos con cariño': 'Detalles que acompañan las mejores historias.',
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
