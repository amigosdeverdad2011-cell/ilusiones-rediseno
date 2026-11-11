import React from 'react';
import { ArrowUpRight, Clock, MapPin, MessageCircle } from 'lucide-react';
import { business } from '../data/config.js';
import { getWhatsAppLink } from '../lib/links.js';

// Ubicación de la tienda: dirección, "al costado de Mega Plaza", horario y mapa de Google.
// El mapa carga solo cuando la persona baja hasta aquí (loading="lazy"), para cuidar los datos del celular.
export default function Visit() {
  return (
    <section className="section visit-section reveal" id="ubicacion" aria-labelledby="ubicacion-title">
      <div className="container visit-inner">
        <div className="visit-copy">
          <p className="kicker">Florería en Cajamarca</p>
          <h2 id="ubicacion-title" className="section-title">Visítanos <em>al costado de Mega Plaza</em></h2>

          <ul className="visit-facts">
            <li>
              <MapPin size={20} aria-hidden="true" />
              <span><strong>{business.address}</strong><br />{business.addressNote}</span>
            </li>
            {business.hours.length > 0 && (
              <li>
                <Clock size={20} aria-hidden="true" />
                <span>
                  {business.hours.map((h) => (
                    <span key={h.days} className="visit-hours"><strong>{h.days}</strong> {h.time}</span>
                  ))}
                </span>
              </li>
            )}
          </ul>

          <div className="visit-actions">
            <a className="btn btn-primary" href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
              Cómo llegar <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Escríbenos
            </a>
          </div>
        </div>

        <div className="visit-map">
          <iframe
            title="Mapa: Regalos y Peluches Ilusiones, Jr. Sor Manuela Gil 210, Cajamarca"
            src={business.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
