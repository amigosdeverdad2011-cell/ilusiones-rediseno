// Edición LOCAL del catálogo (solo en este navegador).
// Importante: solo se guarda cuando alguien edita desde el panel (#admin).
// Una visita normal nunca escribe nada, así los precios nuevos de products.json siempre llegan a los clientes.

const KEY = 'ilusiones-catalogo-local';
const OLD_KEY = 'ilusiones-cajamarca-catalogo-replica-v1'; // versión anterior, que guardaba una copia para todos

export function loadProducts(baseProducts, version) {
  try {
    localStorage.removeItem(OLD_KEY);
    const stored = JSON.parse(localStorage.getItem(KEY));
    if (stored && stored.version === version && Array.isArray(stored.products)) return stored.products;
  } catch {
    /* sin acceso al almacenamiento: se usa el catálogo del proyecto */
  }
  return baseProducts;
}

export function saveProducts(products, version) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ version, products }));
  } catch {
    /* modo privado o almacenamiento lleno */
  }
}

export function clearProducts() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nada que limpiar */
  }
}
