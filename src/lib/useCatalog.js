import { useMemo, useState } from 'react';
import { categories, collectionOrder, featured, religiousCollection } from '../data/config.js';

export const priceRanges = [
  { value: 'all', label: 'Todos los precios', short: 'Todos', test: () => true },
  { value: '0-30', label: 'Hasta S/ 30', short: 'Hasta S/ 30', test: (p) => p <= 30 },
  { value: '31-60', label: 'S/ 31 a S/ 60', short: 'S/ 31 – 60', test: (p) => p > 30 && p <= 60 },
  { value: '61-100', label: 'S/ 61 a S/ 100', short: 'S/ 61 – 100', test: (p) => p > 60 && p <= 100 },
  { value: '100+', label: 'Más de S/ 100', short: 'Más de S/ 100', test: (p) => p > 100 },
];

// La primera categoría ("Destacados") no es una categoría de products.json: muestra la selección de config.js → featured.
export const FEATURED = categories[0];

const rank = (name) => {
  const index = collectionOrder.indexOf(name);
  return index === -1 ? collectionOrder.length : index;
};

// Estado y cálculo de los filtros del catálogo: categoría, presupuesto, orden y búsqueda.
// Los religiosos tienen su propio bloque al final del catálogo, así que no se repiten en las categorías;
// la búsqueda sí los incluye, porque busca en todo.
export default function useCatalog(products) {
  const [category, setCategory] = useState(FEATURED);
  const [budget, setBudget] = useState('all');
  const [sort, setSort] = useState('original');
  const [query, setQuery] = useState('');

  const published = useMemo(
    () => products.filter((p) => p.visible !== false).map((p, index) => ({ ...p, order: index })),
    [products],
  );
  const religious = useMemo(() => published.filter((p) => p.collection === religiousCollection), [published]);
  const browsable = useMemo(() => published.filter((p) => p.collection !== religiousCollection), [published]);

  const inCategory = (p, name) => (name === FEATURED ? featured.test(p) : p.category === name);

  const categoryTotals = useMemo(() => {
    const totals = {};
    categories.forEach((name) => {
      totals[name] = browsable.filter((p) => inCategory(p, name)).length;
    });
    return totals;
  }, [browsable]);

  const searching = query.trim() !== '';

  const visible = useMemo(() => {
    const range = priceRanges.find((r) => r.value === budget) || priceRanges[0];
    const text = query.trim().toLocaleLowerCase('es');
    const pool = text ? published : browsable;
    const result = pool.filter(
      (p) =>
        (text || inCategory(p, category)) &&
        range.test(Number(p.price)) &&
        (!text || `${p.name} ${p.description || ''}`.toLocaleLowerCase('es').includes(text)),
    );
    // Orden del catálogo: por grupo (config.js → collectionOrder) y, dentro del grupo, como en products.json.
    if (sort === 'original') result.sort((a, b) => rank(a.collection) - rank(b.collection) || a.order - b.order);
    if (sort === 'price-asc') result.sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === 'price-desc') result.sort((a, b) => Number(b.price) - Number(a.price));
    if (sort === 'az') result.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    return result;
  }, [published, browsable, category, budget, sort, query]);

  const minPrice = useMemo(() => {
    const prices = published.map((p) => Number(p.price)).filter((n) => Number.isFinite(n) && n > 0);
    return prices.length ? Math.min(...prices) : null;
  }, [published]);

  const hasFilters = category !== FEATURED || budget !== 'all' || searching;

  function reset() {
    setCategory(FEATURED);
    setBudget('all');
    setQuery('');
    setSort('original');
  }

  return {
    category, setCategory, budget, setBudget, sort, setSort, query, setQuery, searching,
    published, religious, categoryTotals, visible, minPrice, hasFilters, reset,
  };
}
