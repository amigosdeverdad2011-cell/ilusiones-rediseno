import React from 'react';
import { getWhatsAppLink } from '../lib/links.js';

// Solo se muestra si config.js tiene promociones reales. Con la lista vacía no ocupa espacio.
export default function Promotions({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="section promo-section reveal" id="promociones" aria-labelledby="promo-title">
      <div className="container">
        <h2 id="promo-title" className="section-title">Promociones <em>del momento</em></h2>
        <ul className="promo-grid">
          {items.map((promo, index) => (
            <li key={promo.id || index} className="promo-card">
              <h3>{promo.title}</h3>
              {promo.text && <p>{promo.text}</p>}
              {promo.until && <p className="promo-until">{promo.until}</p>}
              <a className="btn btn-primary btn-sm" href={getWhatsAppLink(promo.title)} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
