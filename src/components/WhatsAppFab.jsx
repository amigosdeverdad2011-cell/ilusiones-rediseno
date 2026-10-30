import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../lib/links.js';

// Dentro del catálogo se oculta: cada producto ya tiene su botón "Pedir" y así no lo tapa.
export default function WhatsAppFab() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const catalog = document.getElementById('catalogo');
    if (!catalog || !('IntersectionObserver' in window)) return undefined;
    // Cuenta como "dentro" cuando el catálogo ocupa la parte baja de la pantalla, donde va el botón.
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { rootMargin: '-85% 0px 0px 0px' });
    observer.observe(catalog);
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
