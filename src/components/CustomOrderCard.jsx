import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { customOrder } from '../data/config.js';
import { getWhatsAppMessageLink } from '../lib/links.js';

// Tarjeta "Pídelo personalizado" dentro de la grilla de amigurumis (config.js → customOrder).
export default function CustomOrderCard() {
  return (
    <article className="custom-card">
      <Sparkles size={30} strokeWidth={1.4} aria-hidden="true" />
      <h3>{customOrder.title}</h3>
      <p>{customOrder.text}</p>
      <a className="btn btn-primary custom-card-action" href={getWhatsAppMessageLink(customOrder.whatsappMessage)} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={16} aria-hidden="true" /> {customOrder.buttonLabel}
      </a>
    </article>
  );
}
