import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Campaign from './components/Campaign.jsx';
import CampaignPopup from './components/CampaignPopup.jsx';
import Catalog from './components/Catalog.jsx';
import Promotions from './components/Promotions.jsx';
import SendGift from './components/SendGift.jsx';
import Story from './components/Story.jsx';
import Visit from './components/Visit.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import originalProducts from './data/products.json';
import { CATALOG_VERSION, heroProductIds, promotions } from './data/config.js';
import { clearProducts, loadProducts, saveProducts } from './lib/storage.js';
import useCatalog from './lib/useCatalog.js';
import useReveal from './lib/useReveal.js';

// Fotos de la portada: las elegidas en config.js que sigan publicadas; si faltan, se completa con destacados.
function pickHeroProducts(products) {
  const withImage = products.filter((p) => p.visible !== false && p.image);
  const chosen = heroProductIds.map((id) => withImage.find((p) => p.id === id)).filter(Boolean);
  const extra = withImage.filter((p) => p.featured && !chosen.includes(p));
  return [...chosen, ...extra].slice(0, 5);
}

export default function App() {
  const [products, setProducts] = useState(() => (import.meta.env.DEV ? loadProducts(originalProducts, CATALOG_VERSION) : originalProducts));
  const [adminOpen, setAdminOpen] = useState(() => window.location.hash === '#admin');
  const catalog = useCatalog(products);
  useReveal();

  useEffect(() => {
    const onHash = () => setAdminOpen(window.location.hash === '#admin');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const hero = useMemo(() => pickHeroProducts(products), [products]);

  function updateProducts(next) {
    setProducts(next);
    saveProducts(next, CATALOG_VERSION);
  }

  function resetProducts() {
    clearProducts();
    setProducts(originalProducts);
  }

  function closeAdmin() {
    setAdminOpen(false);
    if (window.location.hash === '#admin') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header hasPromotions={promotions.length > 0} />
      <main id="contenido">
        <Hero items={hero} minPrice={catalog.minPrice} />
        <Campaign products={products} />
        <Catalog catalog={catalog} />
        <Promotions items={promotions} />
        <SendGift />
        <Story />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFab />
      {!adminOpen && <CampaignPopup products={products} />}
      {/* El editor no tiene contraseña: solo existe con npm run dev, nunca en la página publicada. */}
      {import.meta.env.DEV && adminOpen && <AdminPanel products={products} onChange={updateProducts} onReset={resetProducts} onClose={closeAdmin} />}
    </>
  );
}
