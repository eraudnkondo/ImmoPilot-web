import React, { useState } from "react";
import {
  FaIdCard,
  FaPlus,
  FaEdit,
  FaTrash,
  FaDownload,
  FaTimes,
  FaSave,
} from "react-icons/fa";


const TYPES_PIECES = [
  "Carte d'identité",
  "Passeport",
  "Permis de conduire",
  "Titre de séjour",
  "Acte de naissance",
  "Justificatif de domicile",
  "Autre",
];

const PiecesIdentite = ({ pieces, onAdd, onUpdate, onDelete, onDownload }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingPiece, setEditingPiece] = useState(null);
  const [formData, setFormData] = useState({
    type: "Carte d'identité",
    numero: "",
    dateDelivrance: "",
    dateExpiration: "",
    fichier: null, 
  });

  
  const handleAddClick = () => {
    setEditingPiece(null);
    setFormData({
      type: "Carte d'identité",
      numero: "",
      dateDelivrance: "",
      dateExpiration: "",
      fichier: null,
    });
    setShowModal(true);
  };

  
  const handleEditClick = (piece) => {
    setEditingPiece(piece);
    setFormData({
      type: piece.type,
      numero: piece.numero,
      dateDelivrance: piece.dateDelivrance,
      dateExpiration: piece.dateExpiration,
      fichier: null, 
    });
    setShowModal(true);
  };

  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "fichier") {
      setFormData({ ...formData, fichier: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPiece = {
      id: editingPiece ? editingPiece.id : Date.now(),
      ...formData,
      
      fichierNom: formData.fichier ? formData.fichier.name : editingPiece?.fichier || "",
    };
    if (editingPiece) {
      onUpdate(newPiece);
    } else {
      onAdd(newPiece);
    }
    setShowModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <FaIdCard className="mr-2 text-amber-600" /> Pièces d'identité
        </h2>
        <button
          onClick={handleAddClick}
          className="px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition flex items-center"
        >
          <FaPlus className="mr-2" /> Ajouter
        </button>
      </div>

      {pieces.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Aucune pièce d'identité enregistrée.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Numéro</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Délivrance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiration</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fichier</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pieces.map((piece) => (
                <tr key={piece.id}>
                  <td className="px-4 py-3 text-sm text-gray-900">{piece.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{piece.numero}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {new Date(piece.dateDelivrance).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {new Date(piece.dateExpiration).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {piece.fichier || piece.fichierNom || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => onDownload && onDownload(piece)}
                      className="text-amber-600 hover:text-amber-800 mr-3"
                      title="Télécharger"
                    >
                      <FaDownload />
                    </button>
                    <button
                      onClick={() => handleEditClick(piece)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                      title="Modifier"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => onDelete(piece.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Supprimer"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  {editingPiece ? "Modifier la pièce" : "Ajouter une pièce"}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  >
                    {TYPES_PIECES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Numéro</label>
                  <input
                    type="text"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date de délivrance</label>
                  <input
                    type="date"
                    name="dateDelivrance"
                    value={formData.dateDelivrance}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date d'expiration</label>
                  <input
                    type="date"
                    name="dateExpiration"
                    value={formData.dateExpiration}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fichier (PDF, image)
                  </label>
                  <input
                    type="file"
                    name="fichier"
                    accept=".pdf,image/*"
                    onChange={handleChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                  />
                  {editingPiece && !formData.fichier && (
                    <p className="mt-1 text-xs text-gray-500">
                      Laissez vide pour conserver le fichier actuel.
                    </p>
                  )}
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition flex items-center"
                  >
                    <FaSave className="mr-2" /> {editingPiece ? "Modifier" : "Ajouter"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PiecesIdentite;