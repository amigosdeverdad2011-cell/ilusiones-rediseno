import React, { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, resolveImage } from '../lib/links.js';

export default function Header({ hasPromotions }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: '#catalogo', label: 'Catálogo' },
    ...(hasPromotions ? [{ href: '#promociones', label: 'Promociones' }] : []),
    { href: '#fechas', label: 'Fechas especiales' },
    { href: '#como-pedir', label: 'Cómo pedir' },
    { href: '#historia', label: 'Nuestra historia' },
    { href: '#contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" onClick={close}>
          <img className="brand-mark" src={resolveImage('/logo/ilusiones-marca.svg')} alt="" width="44" height="44" />
          <span className="brand-text">
            <span className="brand-name">Ilusiones</span>
            <span className="brand-sub">Peluches · Flores · Regalos</span>
          </span>
        </a>

        <nav id="menu-principal" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-sm header-cta" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="Pedir por WhatsApp">
            <MessageCircle size={18} aria-hidden="true" />
            <span>Pedir<span className="only-wide"> por WhatsApp</span></span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
