import React, { useMemo } from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import Photo from './Photo.jsx';
import { campaign } from '../data/config.js';
import { isWithinYearRange } from '../lib/dates.js';
import { getWhatsAppMessageLink } from '../lib/links.js';

// Banner de temporada (config.js → campaign). Fuera de sus fechas no ocupa espacio.
export default function Campaign({ products, onShowCollection }) {
  const active = useMemo(() => campaign && isWithinYearRange(campaign.from, campaign.until), []);
  const photos = useMemo(
    () => (campaign?.productIds || []).map((id) => products.find((p) => p.id === id && p.visible !== false && p.image)).filter(Boolean),
    [products],
  );
  if (!active) return null;

  return (
    <section className={`campaign campaign-${campaign.id}`} id="temporada" aria-labelledby="temporada-title">
      <div className="container campaign-inner">
        <div className="campaign-copy">
          <p className="campaign-eyebrow"><Sparkles size={16} aria-hidden="true" /> {campaign.eyebrow}</p>
          <h2 id="temporada-title" className="section-title">{campaign.title} <em>{campaign.titleAccent}</em></h2>
          <p className="campaign-text">{campaign.text}</p>
          <div className="campaign-actions">
            <a className="btn btn-light" href="#catalogo" onClick={() => onShowCollection(campaign.collection, campaign.category)}>
              {campaign.buttonLabel} <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost-light" href={getWhatsAppMessageLink(campaign.whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Consultar
            </a>
          </div>
        </div>
        {photos.length > 0 && (
          <ul className="campaign-photos" aria-label="Algunos nacimientos y virgencitas tejidos">
            {photos.map((item) => (
              <li key={item.id}>
                <Photo src={item.image} alt={item.name} width={480} height={600} position={item.imagePosition} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
