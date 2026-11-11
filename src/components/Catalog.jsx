import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Gift, Search, SlidersHorizontal, X } from 'lucide-react';
import CustomOrderCard from './CustomOrderCard.jsx';
import ProductCard from './ProductCard.jsx';
import ProductSheet from './ProductSheet.jsx';
import { categories, categoryInfo, collectionNotes, customOrder, featured, religiousCollection } from '../data/config.js';
import { FEATURED, priceRanges } from '../lib/useCatalog.js';
import { getWhatsAppLink } from '../lib/links.js';

// Cuántos productos se ven antes de "Ver más", y cuántos más aparecen con cada toque.
const PAGE = 8;

// Grilla con "Ver más": empieza corta y crece de a PAGE productos.
function ProductList({ items, onOpen, label }) {
  const [count, setCount] = useState(PAGE);
  const shown = items.slice(0, count);
  const left = items.length - shown.length;
  return (
    <>
      <div className="product-grid">
        {shown.map((product, index) => (
          <ProductCard key={product.id || product.name} product={product} onOpen={onOpen} style={{ '--i': index % PAGE }} />
        ))}
      </div>
      {left > 0 && (
        <button type="button" className="btn btn-ghost show-more" onClick={() => setCount(count + PAGE)}>
          Ver más {label} ({left}) <ChevronDown size={18} aria-hidden="true" />
        </button>
      )}
    </>
  );
}

export default function Catalog({ catalog }) {
  const { category, setCategory, budget, setBudget, sort, setSort, query, setQuery, searching, visible, religious, categoryTotals, hasFilters, reset } = catalog;
  const categoryEmpty = !searching && category !== FEATURED && !(categoryTotals[category] > 0);
  const info = categoryInfo[category] || {};
  // En celular los filtros van plegados para que los productos aparezcan antes.
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeFilters = (budget !== 'all' ? 1 : 0) + (sort !== 'original' ? 1 : 0);
  const [openedProduct, setOpenedProduct] = useState(null);
  const toolbarRef = useRef(null);

  // El botón "Atrás" del celular cierra la vista ampliada en lugar de salir de la página.
  useEffect(() => {
    const onBack = () => setOpenedProduct(null);
    window.addEventListener('popstate', onBack);
    return () => window.removeEventListener('popstate', onBack);
  }, []);

  function openProduct(product) {
    window.history.pushState({ ficha: true }, '');
    setOpenedProduct(product);
  }

  function closeProduct() {
    setOpenedProduct(null);
    if (window.history.state && window.history.state.ficha) window.history.back();
  }

  // Al cambiar de categoría estando más abajo, vuelve al inicio de los resultados.
  function chooseCategory(name) {
    setCategory(name);
    setQuery('');
    const target = toolbarRef.current;
    if (target && target.getBoundingClientRect().top < 0) {
      const bar = document.querySelector('.category-bar');
      const offset = bar ? bar.getBoundingClientRect().bottom + 8 : 0;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - offset, behavior: reduce ? 'auto' : 'smooth' });
    }
  }

  const viewTitle = searching ? 'Resultados de tu búsqueda' : category === FEATURED ? featured.title : category;
  const viewNote = searching ? '' : category === FEATURED ? featured.note : '';
  const showCustom = customOrder && !searching && (category === FEATURED || category === customOrder.category);
  // La clave hace que la lista vuelva a empezar corta (y se anime) cada vez que cambia lo que se está viendo.
  const viewKey = [category, budget, sort, query.trim()].join('|');

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
  } else {
    results = (
      <section className="collection" aria-labelledby="vista-titulo">
        <header className="collection-head">
          <h3 id="vista-titulo">{viewTitle}</h3>
          {viewNote && <p>{viewNote}</p>}
        </header>
        <ProductList key={viewKey} items={visible} onOpen={openProduct} label={searching ? 'resultados' : category === FEATURED ? 'personajes' : category.toLocaleLowerCase('es')} />
      </section>
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
                className={category === name && !searching ? 'chip is-active' : 'chip'}
                aria-pressed={category === name && !searching}
                onClick={() => chooseCategory(name)}
              >
                {name}
                {categoryTotals[name] > 0 && <span className="chip-count">{categoryTotals[name]}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="toolbar" ref={toolbarRef}>
          <div className="toolbar-top">
            <label className="search-field">
              <span className="sr-only">Buscar en todo el catálogo</span>
              <Search size={19} aria-hidden="true" />
              <input
                type="search"
                name="buscar"
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
                <X size={15} aria-hidden="true" /> Volver a destacados
              </button>
            )}
          </div>
        </div>

        <div id="catalogo-productos">{results}</div>
        {showCustom && <CustomOrderCard />}

        {!searching && religious.length > 0 && (
          <section className="collection religious-block" id="religiosos" aria-labelledby="religiosos-titulo">
            <header className="collection-head">
              <h3 id="religiosos-titulo">{religiousCollection}</h3>
              {collectionNotes[religiousCollection] && <p>{collectionNotes[religiousCollection]}</p>}
            </header>
            <ProductList items={religious} onOpen={openProduct} label="religiosos" />
          </section>
        )}
      </div>
      {openedProduct && <ProductSheet product={openedProduct} onClose={closeProduct} />}
    </section>
  );
}
