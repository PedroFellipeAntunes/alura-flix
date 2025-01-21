// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { App } from './App'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importações do React Router
import './index.css';
import { App } from './App';
import { NewCard } from './pages/NewCard'; // Página "Novo Vídeo"

const categories = [
  ["Front-End", "#68D1FF"],
  ["Back-End", "#00C86F"],
  ["Mobile", "#FFBA05"]
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App categories={categories} />} /> {/* Página principal */}
        <Route path="/new-card" element={<NewCard categories={categories}/>} /> {/* Página Novo Vídeo */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);