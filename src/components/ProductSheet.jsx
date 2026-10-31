import React, { useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Photo from './Photo.jsx';
import { formatPrice, getWhatsAppLink } from '../lib/links.js';

// Vista ampliada de un producto: hoja que sube desde abajo en celular y ventana centrada en computadora.
export default function ProductSheet({ product, onClose }) {
  const dialog = useRef(null);

  useEffect(() => {
    const element = dialog.current;
    if (element && !element.open) element.showModal();
  }, []);

  return (
    <dialog
      ref={dialog}
      className="product-sheet"
      aria-labelledby="ficha-titulo"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current.close();
      }}
    >
      <div className="sheet-inner">
        <button type="button" className="sheet-close" aria-label="Cerrar" onClick={() => dialog.current.close()}>
          <X size={22} aria-hidden="true" />
        </button>
        <div className="sheet-photo">
          <Photo src={product.image} alt={product.name} priority width={640} height={800} />
        </div>
        <div className="sheet-body">
          <h3 id="ficha-titulo">{product.name}</h3>
          {product.description && <p className="sheet-description">{product.description}</p>}
          {product.referencePhoto && (
            <p className="sheet-note">Foto de referencia: el detalle final puede variar.</p>
          )}
          <p className="sheet-price">{formatPrice(product.price)}</p>
          <a className="btn btn-primary sheet-action" href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} aria-hidden="true" /> Pedir por WhatsApp
          </a>
        </div>
      </div>
    </dialog>
  );
}
