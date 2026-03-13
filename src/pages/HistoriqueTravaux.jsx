import React, { useState, useEffect } from "react";
import { FiPlus, FiEdit, FiTrash2, FiDollarSign } from "react-icons/fi";
import HeaderGestionBiens from "../components/HeaderGestionBiens";
import Footer from "../components/Footer";

const HistoriqueTravaux = () => {
  const [historique, setHistorique] = useState([]);

  useEffect(() => {
    const mockHistorique = [
      { id: 1, type: "travaux", description: "Rénovation salle de bain", cout: 4500 },
      { id: 2, type: "entretien", description: "Nettoyage chaudière", cout: 120 },
      { id: 3, type: "diagnostic", description: "Diagnostic électrique", cout: 150 },
      { id: 4, type: "evenement", description: "Changement de locataire", cout: null },
    ];

    setHistorique(mockHistorique);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Supprimer cet élément ?")) {
      setHistorique(historique.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <HeaderGestionBiens />

      <main className="container mx-auto grow px-4 py-10">
        {/* bouton ajouter */}
        <div className="mb-8 flex justify-end">
          <button className="flex items-center rounded-lg bg-amber-600 px-4 py-2 text-white transition hover:bg-amber-700">
            <FiPlus className="mr-2" /> Ajouter
          </button>
        </div>

        {/* cartes */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {historique.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                {item.type}
              </span>

              <p className="mb-4 text-gray-800">{item.description}</p>

              {item.cout && (
                <p className="mb-4 flex items-center text-sm text-gray-600">
                  <FiDollarSign className="mr-1" /> {item.cout} €
                </p>
              )}

              <div className="flex space-x-3">
                <button className="p-2 text-gray-500 hover:text-amber-600">
                  <FiEdit />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-gray-500 hover:text-red-600"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HistoriqueTravaux;