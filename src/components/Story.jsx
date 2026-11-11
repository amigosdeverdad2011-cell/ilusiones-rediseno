import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Photo from './Photo.jsx';
import { story } from '../data/config.js';
import { getWhatsAppLink, resolveImage } from '../lib/links.js';

export default function Story() {
  return (
    <section className="section story-section reveal" id="historia" aria-labelledby="historia-title">
      <div className="container story-inner">
        <div className="story-visual">
          {story.photo ? (
            <div className="story-photo"><Photo src={story.photo} alt={story.photoAlt} width={640} height={800} /></div>
          ) : (
            <div className="story-photo story-placeholder">
              <img src={resolveImage('/logo/ilusiones-logo.svg')} alt={story.caption} width="300" height="294" loading="lazy" />
            </div>
          )}
        </div>
        <div className="story-copy">
          <h2 id="historia-title" className="section-title">{story.title} <em>{story.titleAccent}</em></h2>
          {story.paragraphs.map((text) => <p key={text}>{text}</p>)}
          <a className="text-link" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            Conoce nuestros detalles <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
