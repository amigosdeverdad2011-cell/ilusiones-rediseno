import React, { useState } from 'react';
import { Gift, Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from './ProductCard.jsx';
import { categories, categoryInfo, collectionNotes } from '../data/config.js';
import { priceRanges } from '../lib/useCatalog.js';
import { getWhatsAppLink } from '../lib/links.js';

export default function Catalog({ catalog }) {
  const { category, setCategory, budget, setBudget, sort, setSort, query, setQuery, visible, grouped, categoryTotals, hasFilters, reset } = catalog;
  const categoryEmpty = category !== 'Todos' && !(categoryTotals[category] > 0);
  const info = categoryInfo[category] || {};
  // En celular los filtros van plegados para que los productos aparezcan antes.
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeFilters = (budget !== 'all' ? 1 : 0) + (sort !== 'original' ? 1 : 0);

  let results;
  if (categoryEmpty) {
    results = (
      <div className="empty-state" role="status">
        <Gift size={40} strokeWidth={1.3} aria-hidden="true" />
        <h3>{info.emptyTitle || 'Estamos preparando esta categoría'}</h3>
        <p>{info.emptyText || 'Aún no publicamos productos aquí. Escríbenos por WhatsApp y te contamos qué tenemos disponible.'}</p>
        <a className="btn btn-primary" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
      </div>
    );
  } else if (visible.length === 0) {
    results = (
      <div className="empty-state" role="status">
        <Gift size={40} strokeWidth={1.3} aria-hidden="true" />
        <h3>No encontramos productos con esos filtros</h3>
        <p>Prueba con otro presupuesto o escríbenos para pedir un regalo a tu gusto.</p>
        <button type="button" className="btn btn-primary" onClick={reset}>Limpiar filtros</button>
      </div>
    );
  } else if (grouped) {
    results = grouped.map((group, index) => (
      <section className="collection" key={group.name} aria-labelledby={`coleccion-${index}`}>
        <header className="collection-head">
          <h3 id={`coleccion-${index}`}>{group.name}</h3>
          {collectionNotes[group.name] && <p>{collectionNotes[group.name]}</p>}
        </header>
        <div className="product-grid">
          {group.items.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    ));
  } else {
    results = (
      <div className="product-grid">
        {visible.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    );
  }

  return (
    <section className="catalog-section" id="catalogo" aria-labelledby="catalogo-title">
      <div className="container catalog-head reveal">
        <h2 id="catalogo-title" className="section-title">Encuentra tu próximo <em>regalo favorito</em></h2>
        <p className="section-lead">Explora el catálogo y consulta cada detalle por WhatsApp.</p>
      </div>

      <div className="category-bar">
        <div className="container">
          <div className="chip-row" role="group" aria-label="Categorías">
            {categories.map((name) => (
              <button
                key={name}
                type="button"
                className={category === name ? 'chip is-active' : 'chip'}
                aria-pressed={category === name}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="toolbar">
          <div className="toolbar-top">
            <label className="search-field">
              <span className="sr-only">Buscar productos</span>
              <Search size={19} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar un detalle…"
                autoComplete="off"
                enterKeyHint="search"
              />
            </label>
            <button
              type="button"
              className={filtersOpen || activeFilters > 0 ? 'filter-toggle is-active' : 'filter-toggle'}
              aria-expanded={filtersOpen}
              aria-controls="filtros-catalogo"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <SlidersHorizontal size={18} aria-hidden="true" />
              Filtros{activeFilters > 0 && ` (${activeFilters})`}
            </button>
          </div>

          <div className={filtersOpen ? 'filter-panel is-open' : 'filter-panel'} id="filtros-catalogo">
            <div className="budget-group">
              <span className="toolbar-label" id="presupuesto-label">Presupuesto</span>
              <div className="chip-row chip-row-small" role="group" aria-labelledby="presupuesto-label">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    className={budget === range.value ? 'chip is-active' : 'chip'}
                    aria-pressed={budget === range.value}
                    onClick={() => setBudget(range.value)}
                  >
                    {range.short}
                  </button>
                ))}
              </div>
            </div>
            <label className="sort-field">
              <span className="toolbar-label">Ordenar</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="original">Orden del catálogo</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
                <option value="az">Nombre A–Z</option>
              </select>
            </label>
          </div>

          <div className="toolbar-meta">
            <p className="result-count" aria-live="polite">
              {visible.length} {visible.length === 1 ? 'producto' : 'productos'}
            </p>
            {hasFilters && (
              <button type="button" className="link-button" onClick={reset}>
                <X size={15} aria-hidden="true" /> Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {results}
      </div>
    </section>
  );
}
