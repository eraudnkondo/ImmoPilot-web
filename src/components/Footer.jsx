import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 mt-28" >
      
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-10">

        
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold">IMMOPILOT</h2>
          <p className="mt-4 text-gray-600">
            Plateforme moderne de gestion immobilière pour optimiser
            le suivi des paiements et piloter vos performances.
          </p>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Produits</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">Gestion des loyers</a></li>
            <li><a href="#" className="hover:text-black">Tableau de bord</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div>
          <h3 className="font-semibold mb-3">Entreprise</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">Contact</a></li>
            <li><a href="#" className="hover:text-black">Tarification</a></li>
          </ul>
        </div>

        {/* Colonne 4 */}
        <div className="text-gray-600">
          <h3 className="font-semibold mb-3 text-gray-800">Contact</h3>
          <p>Téléphone : +33 6 00 00 00 00</p>
          <p>Email : contact@locagestion.com</p>
        </div>

      </div>


      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} IMMOPILOT — Tous droits réservés.
      </div>

    </footer>
  );
};

export default Footer;