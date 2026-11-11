import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, Sparkles, X } from 'lucide-react';
import Photo from './Photo.jsx';
import { campaign } from '../data/config.js';
import { campaignCountdown, isCampaignActive } from './Campaign.jsx';

const SEEN_KEY = 'ilusiones-anuncio-visto';

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === campaign.id;
  } catch {
    return false;
  }
}

// Anuncio de temporada que aparece al entrar. Se muestra una vez por visita y se cierra con la X,
// con la tecla Escape o tocando fuera.
export default function CampaignPopup({ products, onShowCollection }) {
  const dialog = useRef(null);
  const [open, setOpen] = useState(false);
  const countdown = useMemo(campaignCountdown, []);
  const photo = useMemo(
    () => (campaign?.productIds || []).map((id) => products.find((p) => p.id === id && p.visible !== false && p.image)).find(Boolean),
    [products],
  );

  // Espera un momento para que primero se vea la portada.
  useEffect(() => {
    if (!isCampaignActive() || alreadySeen()) return undefined;
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (open && element && !element.open) element.showModal();
  }, [open]);

  function remember() {
    setOpen(false);
    try {
      sessionStorage.setItem(SEEN_KEY, campaign.id);
    } catch {
      /* sin almacenamiento: el anuncio volverá a salir al recargar */
    }
  }

  if (!open) return null;
  // El texto se repite dos veces para que el deslizamiento no tenga cortes.
  const ticker = [...campaign.ticker, ...campaign.ticker];

  return (
    <dialog
      ref={dialog}
      className="announce"
      aria-labelledby="anuncio-titulo"
      onClose={remember}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current.close();
      }}
    >
      <div className="announce-inner">
        <button type="button" className="sheet-close" aria-label="Cerrar anuncio" onClick={() => dialog.current.close()}>
          <X size={22} aria-hidden="true" />
        </button>
        {photo && (
          <div className="announce-photo">
            <Photo src={photo.image} alt={photo.name} width={480} height={600} position={photo.imagePosition} priority />
            <Sparkles className="announce-spark announce-spark-a" size={26} aria-hidden="true" />
            <Sparkles className="announce-spark announce-spark-b" size={18} aria-hidden="true" />
          </div>
        )}
        <div className="announce-body">
          <p className="announce-lead">{campaign.popupTitle}</p>
          <h2 className="announce-title" id="anuncio-titulo">
            {campaign.title}
            <span className="campaign-subtitle">{campaign.subtitle}</span>
          </h2>
          <p className="announce-note">
            <strong>{campaign.popupNote}</strong>
            {countdown && <span> · {countdown}</span>}
          </p>
          <a
            className="btn btn-primary announce-action"
            href="#catalogo"
            onClick={() => {
              onShowCollection(campaign.collection, campaign.category);
              dialog.current.close();
            }}
          >
            {campaign.popupButton} <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="announce-ticker" aria-hidden="true">
          <ul>
            {ticker.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  );
}
