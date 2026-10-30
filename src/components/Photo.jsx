import React, { useEffect, useState } from 'react';
import { Flower2 } from 'lucide-react';
import { resolveImage } from '../lib/links.js';

// Foto con respaldo: si falta la imagen o no carga, se muestra un recuadro suave en lugar de una imagen rota.
// alt="" marca la foto como decorativa. priority=true es para la foto principal (carga primero).
export default function Photo({ src, alt, className = '', priority = false, width, height, fallbackLabel = 'Foto próximamente' }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (!src || failed) {
    return (
      <div className={`photo-fallback ${className}`} role={alt ? 'img' : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
        <Flower2 size={34} strokeWidth={1.3} aria-hidden="true" />
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={resolveImage(src)}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      ref={(el) => {
        if (el && priority) el.setAttribute('fetchpriority', 'high');
      }}
      onError={() => setFailed(true)}
    />
  );
}
