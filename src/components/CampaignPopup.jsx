import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Star, X } from 'lucide-react';
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
export default function CampaignPopup({ products }) {
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
          <a className="btn btn-primary announce-action" href="#religiosos" onClick={() => dialog.current.close()}>
            {campaign.popupButton} <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        <FestiveTicker items={campaign.ticker} />
      </div>
    </dialog>
  );
}

// Copos de nieve: posición horizontal, tamaño, duración y retraso, fijos para que no cambien en cada pintado.
const FLAKES = [
  [4, 5, 9, 0], [14, 3, 11, 3], [23, 6, 10, 6], [33, 4, 12, 1.5], [44, 5, 9.5, 4.5], [55, 3, 11.5, 0.8],
  [64, 6, 10.5, 5.5], [73, 4, 9, 2.5], [82, 5, 12, 7], [91, 3, 10, 3.8], [97, 4, 11, 1],
];

// Cinta navideña: el texto se desliza despacio y sin cortes, con nieve, estrellas y fuegos artificiales suaves.
// Las dos mitades son idénticas: al llegar a la mitad, la animación vuelve al inicio sin que se note.
function FestiveTicker({ items }) {
  const group = (copy) => (
    <ul className="ticker-group" aria-hidden={copy === 1 || undefined}>
      {items.map((text) => (
        <li key={text}>
          <span>{text}</span>
          <Star className="ticker-star" size={14} strokeWidth={2.2} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="announce-ticker" aria-hidden="true">
      <div className="ticker-sky">
        {FLAKES.map(([left, size, duration, delay]) => (
          <span key={left} className="flake" style={{ left: `${left}%`, width: size, height: size, animationDuration: `${duration}s`, animationDelay: `-${delay}s` }} />
        ))}
        <span className="burst burst-a" />
        <span className="burst burst-b" />
        <Sparkles className="ticker-spark ticker-spark-a" size={16} />
        <Sparkles className="ticker-spark ticker-spark-b" size={12} />
      </div>
      <div className="ticker-track">
        {group(0)}
        {group(1)}
      </div>
    </div>
  );
}
