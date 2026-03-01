import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

// Pages principales
import HomePage from "./pages/homepage";
import EspaceAgence from "./pages/EspaceAgence";
import EspaceClient from "./pages/EspaceClient";

// Authentification
import Connexion from "./pages/connexion";
import Inscription from "./pages/inscription";

// Gestion locative
import GestionLocative from "./pages/GestionLocative";
import GestionBiens from "./pages/GestionBiens"; 
import GestionLocataires from './pages/GestionLocataires';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages avec Header + Footer (Layout) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="espace-agence" element={<EspaceAgence />} />
          <Route path="espace-client" element={<EspaceClient />} />
        </Route>

        {/* Pages Auth (sans Layout) */}
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        {/* Gestion locative */}
        <Route path="/gestionlocative" element={<GestionLocative />} />

        {/* Gestion des biens */}
        <Route path="/gestion-biens" element={<GestionBiens />} />

        <Route path="/gestion-locataires" element={<GestionLocataires />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;