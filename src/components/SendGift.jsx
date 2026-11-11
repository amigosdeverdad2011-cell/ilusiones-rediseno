import React from 'react';
import { Camera, MapPin, MessageCircle, Wallet } from 'lucide-react';
import { business, giftDelivery } from '../data/config.js';
import { getWhatsAppMessageLink } from '../lib/links.js';

// "Envía un regalo a Cajamarca": para quienes viven en Lima o en el extranjero. Datos en config.js → giftDelivery.
export default function SendGift() {
  const { zones, payments, whatsappMessage } = giftDelivery;
  const steps = [
    {
      icon: MessageCircle,
      title: 'Escríbenos desde donde estés',
      text: 'Elige un detalle del catálogo o cuéntanos tu idea, y dinos para quién es, la fecha y la dirección.',
    },
    {
      icon: Wallet,
      title: `Separa con el ${business.advancePercent} % de adelanto`,
      text: `Paga por ${payments.map((p) => p.name).join(', ').replace(/, ([^,]*)$/, ' o $1')}.`,
    },
    {
      icon: Camera,
      title: 'Lo entregamos por ti',
      text: 'Llevamos tu regalo a la puerta y te enviamos una foto de la entrega.',
    },
  ];

  return (
    <section className="section gift-section reveal" id="enviar" aria-labelledby="enviar-title">
      <div className="container gift-inner">
        <div className="gift-copy">
          <p className="kicker">Flores y peluches a domicilio en Cajamarca</p>
          <h2 id="enviar-title" className="section-title">Envía un regalo <em>a Cajamarca</em></h2>
          <p className="section-lead">¿Vives en Lima o en el extranjero? Sorprende a tu familia con un detalle hecho con cariño. Nosotros lo preparamos y lo entregamos.</p>

          <dl className="gift-facts">
            <div>
              <dt><MapPin size={18} aria-hidden="true" /> Entregamos en</dt>
              <dd>{zones.join(' y ')}. El costo del envío depende de la zona y te lo confirmamos por WhatsApp.</dd>
            </div>
            <div>
              <dt><Wallet size={18} aria-hidden="true" /> Formas de pago</dt>
              <dd>
                <ul className="gift-payments">
                  {payments.map((p) => (
                    <li key={p.name}><strong>{p.name}</strong> {p.detail}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <a className="btn btn-primary" href={getWhatsAppMessageLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} aria-hidden="true" /> Quiero enviar un regalo
          </a>
        </div>

        <ol className="gift-steps">
          {steps.map((step) => (
            <li key={step.title} className="gift-step">
              <span className="gift-step-icon"><step.icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
