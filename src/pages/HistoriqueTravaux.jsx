import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";
import HeaderGestionBiens from "../components/HeaderGestionBiens";
import Footer from "../components/Footer";

// Modal amélioré avec animation et style moderne
const TravailModal = ({ isOpen, onClose, onSave, travail, bienNom }) => {
  const [formData, setFormData] = useState({
    date: "",
    type: "travaux",
    description: "",
    cout: "",
  });

  useEffect(() => {
    if (travail) setFormData(travail);
    else
      setFormData({
        date: new Date().toISOString().split("T")[0],
        type: "travaux",
        description: "",
        cout: "",
      });
  }, [travail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full animate-fadeIn">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">
            {travail ? "Modifier" : "Ajouter"} un événement / travail
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              >
                <option value="travaux">Travaux</option>
                <option value="entretien">Entretien</option>
                <option value="diagnostic">Diagnostic</option>
                <option value="evenement">Événement</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                placeholder="Décrivez le travail ou l'événement..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coût (€) - optionnel</label>
              <input
                type="number"
                name="cout"
                value={formData.cout}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                placeholder="0.00"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
              >
                {travail ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const HistoriqueTravaux = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [bienNom, setBienNom] = useState("");
  const [historique, setHistorique] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTravail, setEditingTravail] = useState(null);

  useEffect(() => {
    const mockHistorique = [
      { id: 1, date: "2025-02-15", type: "travaux", description: "Rénovation salle de bain", cout: 4500 },
      { id: 2, date: "2024-11-10", type: "entretien", description: "Nettoyage chaudière", cout: 120 },
      { id: 3, date: "2024-08-22", type: "diagnostic", description: "Diagnostic électrique", cout: 150 },
      { id: 4, date: "2024-05-05", type: "evenement", description: "Changement de locataire", cout: null },
    ];
    setHistorique(mockHistorique);
    setBienNom("Appartement Centre-ville");
    setLoading(false);
  }, [id]);

  const handleAdd = (nouveauTravail) => {
    const newId = Date.now();
    setHistorique([...historique, { id: newId, ...nouveauTravail }]);
    setModalOpen(false);
  };

  const handleEdit = (travailModifie) => {
    setHistorique(
      historique.map((t) => (t.id === editingTravail.id ? { ...t, ...travailModifie } : t))
    );
    setEditingTravail(null);
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Supprimer cet élément ?")) {
      setHistorique(historique.filter((t) => t.id !== id));
    }
  };

  const openAddModal = () => {
    setEditingTravail(null);
    setModalOpen(true);
  };

  const openEditModal = (travail) => {
    setEditingTravail(travail);
    setModalOpen(true);
  };

  if (loading)
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <HeaderGestionBiens />
        <main className="flex-grow flex items-center justify-center text-gray-600 text-xl">
          Chargement...
        </main>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderGestionBiens />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(`/bien/${id}`)}
            className="flex items-center text-gray-600 hover:text-amber-600 transition mr-4"
          >
            <FiArrowLeft className="mr-1" /> Retour
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Historique et travaux : {bienNom}
          </h1>
          <button
            onClick={openAddModal}
            className="ml-auto flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
          >
            <FiPlus className="mr-2" /> Ajouter
          </button>
        </div>

        {/* Liste des événements */}
        {historique.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <FiClock className="mx-auto text-6xl text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Aucun historique pour ce bien.</p>
            <button
              onClick={openAddModal}
              className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition inline-flex items-center"
            >
              <FiPlus className="mr-2" /> Ajouter le premier élément
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historique
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition relative"
                >
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      item.type === "travaux"
                        ? "bg-amber-100 text-amber-800"
                        : item.type === "entretien"
                        ? "bg-blue-100 text-blue-800"
                        : item.type === "diagnostic"
                        ? "bg-green-100 text-green-800"
                        : item.type === "evenement"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.type}
                  </span>
                  <p className="text-gray-600 text-sm flex items-center mb-2">
                    <FiClock className="mr-1" />{" "}
                    {new Date(item.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-800 mb-2">{item.description}</p>
                  {item.cout && (
                    <p className="text-sm text-gray-600 flex items-center mb-2">
                      <FiDollarSign className="mr-1" /> {item.cout} €
                    </p>
                  )}
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => openEditModal(item)}
                      className="p-2 text-gray-500 hover:text-amber-600 transition"
                      title="Modifier"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-gray-500 hover:text-red-600 transition"
                      title="Supprimer"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        <TravailModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setEditingTravail(null);
          }}
          onSave={editingTravail ? handleEdit : handleAdd}
          travail={editingTravail}
          bienNom={bienNom}
        />
      </main>

      <Footer />
    </div>
  );
};

export default HistoriqueTravaux;