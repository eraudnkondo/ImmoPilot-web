import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AjouterBien = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    type: "appartement", // appartement, maison, local
    surface: "",
    nbPieces: "",
    loyer: "",
    charges: "",
    description: "",
    disponible: true,
    images: [], // pour gérer les uploads plus tard
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Effacer l'erreur pour ce champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.adresse.trim()) newErrors.adresse = "L'adresse est requise";
    if (!formData.surface) newErrors.surface = "La surface est requise";
    else if (isNaN(formData.surface) || parseFloat(formData.surface) <= 0)
      newErrors.surface = "Surface invalide";
    if (!formData.nbPieces) newErrors.nbPieces = "Le nombre de pièces est requis";
    else if (isNaN(formData.nbPieces) || parseInt(formData.nbPieces) <= 0)
      newErrors.nbPieces = "Nombre de pièces invalide";
    if (!formData.loyer) newErrors.loyer = "Le loyer est requis";
    else if (isNaN(formData.loyer) || parseFloat(formData.loyer) <= 0)
      newErrors.loyer = "Loyer invalide";
    if (formData.charges && (isNaN(formData.charges) || parseFloat(formData.charges) < 0))
      newErrors.charges = "Charges invalides";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Ici, tu appellerais une API pour enregistrer le bien
    console.log("Données du bien à ajouter :", formData);
    // Redirection ou message de succès
    alert("Bien ajouté avec succès !");
    navigate("/mes-biens"); // ou vers la liste des biens
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajouter un bien immobilier</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom du bien *
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
              errors.nom ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="ex: Appartement Centre-ville"
          />
          {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
        </div>

        {/* Adresse */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adresse complète *
          </label>
          <input
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
              errors.adresse ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="123 Rue Principale, 75001 Paris"
          />
          {errors.adresse && <p className="mt-1 text-sm text-red-600">{errors.adresse}</p>}
        </div>

        {/* Type et surface sur la même ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type de bien *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="appartement">Appartement</option>
              <option value="maison">Maison</option>
              <option value="local">Local commercial</option>
              <option value="terrain">Terrain</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Surface (m²) *
            </label>
            <input
              type="number"
              name="surface"
              value={formData.surface}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                errors.surface ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="65"
              step="0.1"
              min="1"
            />
            {errors.surface && <p className="mt-1 text-sm text-red-600">{errors.surface}</p>}
          </div>
        </div>

        {/* Nombre de pièces et loyer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre de pièces *
            </label>
            <input
              type="number"
              name="nbPieces"
              value={formData.nbPieces}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                errors.nbPieces ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="3"
              min="1"
              step="1"
            />
            {errors.nbPieces && <p className="mt-1 text-sm text-red-600">{errors.nbPieces}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loyer mensuel (€) *
            </label>
            <input
              type="number"
              name="loyer"
              value={formData.loyer}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                errors.loyer ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="850"
              step="0.01"
              min="0"
            />
            {errors.loyer && <p className="mt-1 text-sm text-red-600">{errors.loyer}</p>}
          </div>
        </div>

        {/* Charges (optionnel) et disponibilité */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Charges mensuelles (€)
            </label>
            <input
              type="number"
              name="charges"
              value={formData.charges}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                errors.charges ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="50"
              step="0.01"
              min="0"
            />
            {errors.charges && <p className="mt-1 text-sm text-red-600">{errors.charges}</p>}
          </div>
          <div className="flex items-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="disponible"
                checked={formData.disponible}
                onChange={handleChange}
                className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
              />
              <span className="text-sm text-gray-700">Disponible à la location</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="Description détaillée du bien..."
          />
        </div>

        {/* Upload d'images (à implémenter) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Photos
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
            
          />
          <p className="mt-1 text-xs text-gray-500">
            Vous pourrez ajouter des photos après la création.
          </p>
        </div>

        
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => navigate("/mes-biens")}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Ajouter le bien
          </button>
        </div>
      </form>
    </div>
  );
};

export default AjouterBien;