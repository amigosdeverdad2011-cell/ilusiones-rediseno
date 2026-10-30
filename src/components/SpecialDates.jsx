import React, { useMemo } from 'react';
import { specialDates } from '../data/config.js';
import { daysLabel, formatDay, upcomingDates } from '../lib/dates.js';
import { getWhatsAppLink } from '../lib/links.js';

export default function SpecialDates() {
  const items = useMemo(() => upcomingDates(specialDates, new Date(), 4), []);
  if (items.length === 0) return null;
  return (
    <section className="section dates-section reveal" id="fechas" aria-labelledby="fechas-title">
      <div className="container dates-inner">
        <div className="dates-copy">
          <h2 id="fechas-title" className="section-title">Fechas para <em>regalar con cariño</em></h2>
          <p className="section-lead">Escríbenos con tiempo y conversemos tu detalle.</p>
          <a className="btn btn-primary" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
        </div>
        <ol className="dates-list">
          {items.map((item) => (
            <li key={item.id} className="date-card">
              <span className="date-day">{formatDay(item.date)}</span>
              <span className="date-name">{item.name}</span>
              <span className="date-left">{daysLabel(item.days)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
