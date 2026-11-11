import React from 'react';
import { ArrowUpRight, Truck } from 'lucide-react';
import { business } from '../data/config.js';
import { getWhatsAppLink } from '../lib/links.js';

export default function HowToOrder() {
  const steps = [
    { title: 'Elige tu detalle', text: 'Explora el catálogo o cuéntanos la idea que tienes en mente.' },
    { title: 'Escríbenos por WhatsApp', text: 'Cada producto abre el chat con su nombre ya escrito.' },
    {
      title: 'Coordina y separa tu pedido',
      text: `Separa tu pedido con el ${business.advancePercent} % de adelanto y coordinamos fecha, dirección y costo de envío.`,
    },
  ];
  return (
    <section className="section order-section reveal" id="como-pedir" aria-labelledby="pedir-title">
      <div className="container">
        <h2 id="pedir-title" className="section-title">Pedir es <em>muy sencillo</em></h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.title} className="step">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="order-foot">
          {business.deliveryOffered && (
            <a className="order-delivery" href="#enviar"><Truck size={22} strokeWidth={1.6} aria-hidden="true" /> También hacemos delivery: mira las zonas</a>
          )}
          <a className="btn btn-primary" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            Coordinar mi pedido <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
