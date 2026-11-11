import React, { useMemo } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import Photo from './Photo.jsx';
import { campaign } from '../data/config.js';
import { daysLabel, isWithinYearRange, upcomingDates } from '../lib/dates.js';
import { getWhatsAppMessageLink } from '../lib/links.js';

// Días que faltan para el día de la campaña (por ejemplo "Faltan 45 días para Navidad").
export function campaignCountdown() {
  if (!campaign?.day) return '';
  const [next] = upcomingDates([{ rule: campaign.day }], new Date(), 1);
  if (next.days === 0) return `Hoy es ${campaign.day.name}`;
  if (next.days === 1) return `Mañana es ${campaign.day.name}`;
  return `${daysLabel(next.days)} para ${campaign.day.name}`;
}

export function isCampaignActive() {
  return Boolean(campaign) && isWithinYearRange(campaign.from, campaign.until);
}

// Banner de temporada (config.js → campaign). Fuera de sus fechas no ocupa espacio.
export default function Campaign({ products, onShowCollection }) {
  const active = useMemo(isCampaignActive, []);
  const countdown = useMemo(campaignCountdown, []);
  const photos = useMemo(
    () => (campaign?.productIds || []).map((id) => products.find((p) => p.id === id && p.visible !== false && p.image)).filter(Boolean),
    [products],
  );
  if (!active) return null;

  return (
    <section className={`campaign campaign-${campaign.id} reveal`} id="temporada" aria-labelledby="temporada-title">
      <div className="container campaign-inner">
        <div className="campaign-copy">
          <h2 id="temporada-title" className="campaign-title">
            {campaign.title}
            <span className="campaign-subtitle">{campaign.subtitle}</span>
          </h2>
          <p className="campaign-text">{campaign.text}</p>
          {countdown && <p className="campaign-countdown">{countdown}</p>}
          <div className="campaign-actions">
            <a className="btn btn-primary" href="#catalogo" onClick={() => onShowCollection(campaign.collection, campaign.category)}>
              {campaign.buttonLabel} <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={getWhatsAppMessageLink(campaign.whatsappMessage)} target="_blank" rel="noopener noreferrer">
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
