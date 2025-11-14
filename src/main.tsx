import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Importez votre composant App principal
import './index.css'; // Assurez-vous que vos styles globaux (Tailwind) sont importés ici

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
);