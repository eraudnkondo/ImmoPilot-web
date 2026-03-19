import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import HomePage from "./pages/homepage";
import EspaceAgence from "./pages/EspaceAgence";
import EspaceClient from "./pages/EspaceClient";
import Connexion from "./pages/connexion";
import Inscription from "./pages/inscription";
import GestionLocative from "./pages/GestionLocative";
import GestionBiens from "./pages/GestionBiens"; 
import GestionLocataires from './pages/GestionLocataires';
import AjouterBien from "./pages/AjouterBien";
import SuiviFinancier from "./pages/SuiviFinancier";
import CaracteristiquesTechniques from "./pages/CaracteristiquesTechniques";
import HistoriqueTravaux from "./pages/HistoriqueTravaux";
import FicheLocataire from "./pages/FicheLocataire";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="espace-agence" element={<EspaceAgence />} />
          <Route path="espace-client" element={<EspaceClient />} />
        </Route>

        
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

      
        <Route path="/gestionlocative" element={<GestionLocative />} />

      
        <Route path="/gestion-biens" element={<GestionBiens />} />

        <Route path="/gestion-locataires" element={<GestionLocataires />} />

        <Route path="/ajouter-bien" element={<AjouterBien />} />

        <Route path="/suivi-financier" element={<SuiviFinancier />} />

        <Route path="/caractéristiques-techniques" element={<CaracteristiquesTechniques />} />

      <Route path="/historique-travaux" element={< HistoriqueTravaux />} />
      <Route path="/fichelocataires" element={<FicheLocataire />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;