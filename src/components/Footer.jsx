import React from 'react';
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import { business } from '../data/config.js';
import { getWhatsAppLink, resolveImage } from '../lib/links.js';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="#inicio">
            <img src={resolveImage('/logo/ilusiones-logo.svg')} alt="Ilusiones. Peluches, flores, regalos. Detalles que enamoran." width="160" height="157" loading="lazy" />
          </a>
          <p>{business.tagline}. Preparados con cariño en Cajamarca.</p>
        </div>

        <div className="footer-col">
          <h2>Visítanos</h2>
          <p><MapPin size={17} aria-hidden="true" /> {business.address}<br />{business.addressNote}</p>
          <a className="footer-link" href={business.mapUrl} target="_blank" rel="noopener noreferrer">
            Ver ubicación <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-col">
          <h2>Hablemos por WhatsApp</h2>
          <ul className="footer-phones">
            {business.whatsappNumbers.map((item, index) => (
              <li key={item.number}>
                <a className="btn btn-light btn-sm" href={getWhatsAppLink('', index)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={17} aria-hidden="true" /> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ilusiones · Cajamarca</span>
      </div>
    </footer>
  );
}
