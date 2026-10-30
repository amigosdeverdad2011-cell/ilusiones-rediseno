import React from 'react';
import { MessageCircle } from 'lucide-react';
import Photo from './Photo.jsx';
import { formatPrice, getWhatsAppLink } from '../lib/links.js';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-media">
        <Photo src={product.image} alt={product.name} width={640} height={800} position={product.imagePosition} fallbackLabel="Foto próximamente" />
        {product.featured && <span className="badge badge-featured">Destacado</span>}
        {product.referencePhoto && <span className="badge badge-ref">Foto de referencia</span>}
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        {product.description && <p className="product-description">{product.description}</p>}
        <div className="product-foot">
          <p className="product-price">{formatPrice(product.price)}</p>
          <a
            className="btn btn-soft btn-sm product-action"
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${product.name} por WhatsApp`}
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Pedir</span>
          </a>
        </div>
      </div>
    </article>
  );
}
