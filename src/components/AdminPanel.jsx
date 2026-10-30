import React, { useEffect, useState } from 'react';
import { Download, Plus, Trash2, Upload, X } from 'lucide-react';
import { categories } from '../data/config.js';

const OPTIONS = categories.filter((name) => name !== 'Todos');
const BLANK = {
  id: '', name: '', price: 0, category: OPTIONS[0], collection: 'Arreglos hechos con cariño',
  image: '', referencePhoto: false, description: '', featured: false, visible: true,
};

// Editor LOCAL del catálogo: guarda en el navegador de quien lo usa, no en un servidor.
// Se abre solo escribiendo #admin al final de la dirección. No está protegido con contraseña.
export default function AdminPanel({ products, onChange, onClose, onReset }) {
  const [draft, setDraft] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        if (draft) setDraft(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [draft, onClose]);

  function updateField(key, value) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function saveDraft(event) {
    event.preventDefault();
    if (!draft.name.trim()) {
      setError('Indica el nombre del producto.');
      return;
    }
    const normalized = { ...draft, id: draft.id || `ilu-custom-${Date.now()}`, name: draft.name.trim(), price: Number(draft.price) || 0 };
    const updated = products.some((p) => p.id === normalized.id)
      ? products.map((p) => (p.id === normalized.id ? normalized : p))
      : [...products, normalized];
    onChange(updated);
    setDraft(null);
    setError('');
  }

  function removeProduct(id) {
    if (window.confirm('¿Quitar este producto del catálogo local?')) onChange(products.filter((p) => p.id !== id));
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(products, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ilusiones-catalogo-editado.json';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function importJson(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!Array.isArray(parsed) || !parsed.every((p) => p && typeof p.id === 'string' && typeof p.name === 'string')) {
          throw new Error('Formato de catálogo incorrecto');
        }
        if (window.confirm(`¿Reemplazar el catálogo local con ${parsed.length} productos?`)) onChange(parsed);
        setError('');
      } catch (err) {
        setError(`No se pudo importar: ${err.message}`);
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  return (
    <div className="admin-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="admin-panel" role="dialog" aria-modal="true" aria-label="Editar catálogo local">
        <header className="admin-header">
          <div>
            <p className="admin-kicker">Edición local</p>
            <h2>Administrar catálogo</h2>
            <p className="admin-note">Los cambios se guardan solo en este navegador. No modifican la web publicada ni se ven en otros dispositivos.</p>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Cerrar panel"><X /></button>
        </header>

        <div className="admin-toolbar">
          <button className="btn btn-primary btn-sm" type="button" onClick={() => { setDraft({ ...BLANK }); setError(''); }}>
            <Plus size={16} aria-hidden="true" /> Nuevo producto
          </button>
          <button className="btn btn-quiet btn-sm" type="button" onClick={exportJson}>
            <Download size={16} aria-hidden="true" /> Exportar JSON
          </button>
          <label className="btn btn-quiet btn-sm file-button">
            <Upload size={16} aria-hidden="true" /> Importar JSON
            <input type="file" accept=".json,application/json" onChange={importJson} hidden />
          </label>
        </div>

        {error && <p className="admin-error" role="alert">{error}</p>}

        <div className="admin-list">
          {products.map((p) => (
            <div className="admin-item" key={p.id}>
              <span className="admin-product-name">
                {p.name}
                <small>{p.category} · S/ {Number(p.price).toFixed(2)} · {p.visible === false ? 'Oculto' : 'Visible'}</small>
              </span>
              <button type="button" onClick={() => { setDraft({ ...p }); setError(''); }}>Editar</button>
              <button type="button" className="delete" aria-label={`Eliminar ${p.name}`} onClick={() => removeProduct(p.id)}>
                <Trash2 size={17} aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>

        <div className="admin-footer">
          <button
            className="text-button"
            type="button"
            onClick={() => { if (window.confirm('¿Restaurar el catálogo del proyecto? Esto elimina los cambios locales.')) onReset(); }}
          >
            Restablecer catálogo del proyecto
          </button>
        </div>

        {draft && (
          <div className="editor-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setDraft(null); }}>
            <form className="editor-form" onSubmit={saveDraft}>
              <div className="editor-heading">
                <h3>{draft.id ? 'Editar producto' : 'Nuevo producto'}</h3>
                <button type="button" className="icon-button" onClick={() => setDraft(null)} aria-label="Cerrar"><X size={20} /></button>
              </div>
              <label>Nombre<input value={draft.name} required onChange={(e) => updateField('name', e.target.value)} /></label>
              <div className="editor-grid">
                <label>Precio (S/)<input type="number" step="0.01" min="0" value={draft.price} onChange={(e) => updateField('price', e.target.value)} /></label>
                <label>Categoría
                  <select value={draft.category} onChange={(e) => updateField('category', e.target.value)}>
                    {OPTIONS.map((name) => <option key={name}>{name}</option>)}
                  </select>
                </label>
              </div>
              <label>Colección / sección<input value={draft.collection} onChange={(e) => updateField('collection', e.target.value)} /></label>
              <label>URL de la imagen o ruta local<input value={draft.image} onChange={(e) => updateField('image', e.target.value)} placeholder="https://... o /products/foto.jpg" /></label>
              <label>Descripción<textarea rows="3" value={draft.description} onChange={(e) => updateField('description', e.target.value)} /></label>
              <div className="editor-checks">
                <label><input type="checkbox" checked={Boolean(draft.referencePhoto)} onChange={(e) => updateField('referencePhoto', e.target.checked)} /> Foto de referencia</label>
                <label><input type="checkbox" checked={draft.visible !== false} onChange={(e) => updateField('visible', e.target.checked)} /> Visible</label>
                <label><input type="checkbox" checked={Boolean(draft.featured)} onChange={(e) => updateField('featured', e.target.checked)} /> Destacado</label>
              </div>
              {error && <p className="admin-error" role="alert">{error}</p>}
              <button type="submit" className="btn btn-primary">Guardar producto</button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
