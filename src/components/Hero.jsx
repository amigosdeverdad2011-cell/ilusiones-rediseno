import React, { useMemo } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Photo from './Photo.jsx';
import { business, specialDates } from '../data/config.js';
import { daysLabel, upcomingDates } from '../lib/dates.js';
import { formatPrice, getWhatsAppLink } from '../lib/links.js';

// items son productos reales del catálogo. El precio mínimo y la próxima fecha se calculan solos.
export default function Hero({ items, minPrice }) {
  const nextDate = useMemo(() => upcomingDates(specialDates, new Date(), 1)[0], []);

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="kicker">Amigurumis personalizados en Cajamarca</p>
          <h1 id="hero-title">Detalles que <em>enamoran</em></h1>
          <p className="hero-lead">
            Amigurumis tejidos a mano por la abuela, arreglos florales y combos con peluche. {business.madeIn}.
          </p>
        </div>

        {items.length > 0 && (
          <ul className="hero-strip" aria-label="Algunos de nuestros detalles">
            {items.map((item, index) => (
              <li key={item.id || item.name} className="hero-item">
                <a href={getWhatsAppLink(item.name)} target="_blank" rel="noopener noreferrer" aria-label={`Pedir ${item.name} por WhatsApp`}>
                  <span className="hero-photo">
                    <Photo src={item.image} alt="" priority={index === 0} width={640} height={800} />
                  </span>
                  <span className="hero-item-text">
                    <span className="hero-item-name">{item.name}</span>
                    <span className="hero-item-price">{formatPrice(item.price)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="hero-foot">
          <div className="hero-actions">
            <a className="btn btn-primary" href="#catalogo">
              Ver el catálogo <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp
            </a>
          </div>
          <ul className="hero-facts">
            {minPrice != null && <li>Desde {formatPrice(minPrice)}</li>}
            {business.deliveryOffered && <li><a href="#enviar">Delivery en Cajamarca</a></li>}
            {nextDate && <li>{nextDate.name}: {daysLabel(nextDate.days).toLowerCase()}</li>}
          </ul>
        </div>
      </div>
    </section>
  );
}
