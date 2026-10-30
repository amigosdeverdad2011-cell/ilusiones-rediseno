import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../lib/links.js';

// Sobre los productos se oculta: cada uno ya tiene su botón "Pedir" y así no lo tapa.
export default function WhatsAppFab() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const list = document.getElementById('catalogo-productos');
    if (!list || !('IntersectionObserver' in window)) return undefined;
    // Cuenta como "encima" cuando los productos ocupan la parte baja de la pantalla, donde va el botón.
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { rootMargin: '-85% 0px 0px 0px' });
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={hidden ? 'whatsapp-fab is-hidden' : 'whatsapp-fab'}
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
