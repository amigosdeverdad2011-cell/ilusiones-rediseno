import { useMemo, useState } from 'react';
import { collectionOrder } from '../data/config.js';

export const priceRanges = [
  { value: 'all', label: 'Todos los precios', short: 'Todos', test: () => true },
  { value: '0-30', label: 'Hasta S/ 30', short: 'Hasta S/ 30', test: (p) => p <= 30 },
  { value: '31-60', label: 'S/ 31 a S/ 60', short: 'S/ 31 – 60', test: (p) => p > 30 && p <= 60 },
  { value: '61-100', label: 'S/ 61 a S/ 100', short: 'S/ 61 – 100', test: (p) => p > 60 && p <= 100 },
  { value: '100+', label: 'Más de S/ 100', short: 'Más de S/ 100', test: (p) => p > 100 },
];

// Estado y cálculo de los filtros del catálogo: categoría, presupuesto, orden y búsqueda.
export default function useCatalog(products) {
  const [category, setCategory] = useState('Todos');
  const [budget, setBudget] = useState('all');
  const [sort, setSort] = useState('original');
  const [query, setQuery] = useState('');
  // Colección elegida desde un banner (por ejemplo Religiosos en Navidad). null = todas.
  const [collection, setCollection] = useState(null);

  const published = useMemo(() => products.filter((p) => p.visible !== false), [products]);

  const categoryTotals = useMemo(() => {
    const totals = {};
    published.forEach((p) => {
      totals[p.category] = (totals[p.category] || 0) + 1;
    });
    return totals;
  }, [published]);

  const visible = useMemo(() => {
    const range = priceRanges.find((r) => r.value === budget) || priceRanges[0];
    const text = query.trim().toLocaleLowerCase('es');
    const result = published.filter(
      (p) =>
        (category === 'Todos' || p.category === category) &&
        (!collection || p.collection === collection) &&
        range.test(Number(p.price)) &&
        (!text || `${p.name} ${p.description || ''}`.toLocaleLowerCase('es').includes(text)),
    );
    if (sort === 'price-asc') result.sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === 'price-desc') result.sort((a, b) => Number(b.price) - Number(a.price));
    if (sort === 'az') result.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    return result;
  }, [published, category, collection, budget, sort, query]);

  // Con el orden original y sin búsqueda, los productos se agrupan por colección.
  const grouped = useMemo(() => {
    if (sort !== 'original' || query.trim()) return null;
    const groups = new Map();
    visible.forEach((p) => {
      const name = p.collection || 'Más detalles';
      if (!groups.has(name)) groups.set(name, []);
      groups.get(name).push(p);
    });
    const rank = (name) => {
      const index = collectionOrder.indexOf(name);
      return index === -1 ? collectionOrder.length : index;
    };
    return [...groups].map(([name, items]) => ({ name, items })).sort((a, b) => rank(a.name) - rank(b.name));
  }, [visible, sort, query]);

  const minPrice = useMemo(() => {
    const prices = published.map((p) => Number(p.price)).filter((n) => Number.isFinite(n) && n > 0);
    return prices.length ? Math.min(...prices) : null;
  }, [published]);

  const hasFilters = category !== 'Todos' || collection !== null || budget !== 'all' || query.trim() !== '';

  // Muestra solo una colección (desde un banner): limpia los demás filtros para que se vea completa.
  function showCollection(name, categoryName = 'Todos') {
    setCategory(categoryName);
    setCollection(name);
    setBudget('all');
    setQuery('');
    setSort('original');
  }

  function chooseCategory(name) {
    setCategory(name);
    setCollection(null);
  }

  function reset() {
    setCategory('Todos');
    setCollection(null);
    setBudget('all');
    setQuery('');
    setSort('original');
  }

  return {
    category, setCategory: chooseCategory, collection, setCollection, showCollection,
    budget, setBudget, sort, setSort, query, setQuery,
    published, categoryTotals, visible, grouped, minPrice, hasFilters, reset,
  };
}
