import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

// Activa las entradas suaves solo cuando el código ya está corriendo (sin JavaScript todo se ve normal).
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(<App />);
