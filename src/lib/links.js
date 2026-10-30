import { business } from '../data/config.js';
import lightPhotos from '../data/fotos-livianas.generated.json';

// Enlace de WhatsApp con el mensaje ya escrito. numberIndex 0 = número principal, 1 = segundo número.
export function getWhatsAppLink(productName = '', numberIndex = 0) {
  const target = business.whatsappNumbers[numberIndex] || business.whatsappNumbers[0];
  const message = productName
    ? `¡Hola, Ilusiones! 🌸 Quisiera consultar por: ${productName}. ¿Está disponible?`
    : '¡Hola, Ilusiones! 🌸 Quisiera consultar por un detalle o hacer un pedido.';
  return `https://wa.me/${target.number}?text=${encodeURIComponent(message)}`;
}

function decodePath(path) {
  try {
    return decodeURI(path);
  } catch {
    return path;
  }
}

// Las rutas que empiezan con / son fotos locales de public/: respetan la ruta base de la publicación,
// admiten espacios y tildes, y usan la copia liviana cuando scripts/fotos.mjs creó una.
export function resolveImage(path) {
  if (!path) return '';
  if (!path.startsWith('/')) return path;
  const clean = decodePath(path);
  const file = lightPhotos[clean] || clean;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${file.split('/').map(encodeURIComponent).join('/')}`;
}

export function formatPrice(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return 'Consultar precio';
  return Number.isInteger(number) ? `S/ ${number}` : `S/ ${number.toFixed(2)}`;
}
