import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../lib/links.js';

export default function WhatsAppFab() {
  return (
    <a className="whatsapp-fab" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Pedir por WhatsApp">
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
