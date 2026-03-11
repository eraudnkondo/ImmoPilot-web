import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX, FiCheck } from "react-icons/fi";
import HeaderAjoutBiens from "../components/HeaderAjoutBien";
import Footer from "../components/Footer";
import CarteLocalisation from "../pages/CarteLocalisation"; 

const AjouterBien = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    type: "appartement",
    surface: "",
    nbPieces: "",
    loyer: "",
    charges: "",
    description: "",
    disponible: true,
    images: [],
    latitude: "",
    longitude: "",
  });

  const [errors, setErrors] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };
  const handleLocationSelect = (latlng) => {
    setCoordinates(latlng);
    setFormData({
      ...formData,
      latitude: latlng.lat,
      longitude: latlng.lng,
    });
    if (errors.coords) setErrors({ ...errors, coords: null });
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
    // Validation des coordonnées (optionnelle)
    if (!formData.latitude || !formData.longitude) {
      newErrors.coords = "Veuillez sélectionner un emplacement sur la carte";
    }
    return newErrors;
  };

  const isFormDirty = () => {
    return Object.keys(formData).some(key => {
      const value = formData[key];
      if (key === "disponible") return value !== true; 
      if (key === "type") return value !== "appartement";
      if (key === "images") return value.length > 0;
      if (key === "latitude" || key === "longitude") return false;
      return value !== "" && value !== undefined;
    });
  };

  const handleCancel = () => {
    if (isFormDirty()) {
      const confirmCancel = window.confirm(
        "Voulez-vous vraiment annuler ? Les données saisies seront perdues."
      );
      if (confirmCancel) navigate("/mes-biens");
    } else {
      navigate("/mes-biens");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Données du bien à ajouter :", formData);
      alert("Bien ajouté avec succès !");
      navigate("/mes-biens");
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderAjoutBiens />

      <main className="flex-grow flex justify-center items-start py-10 px-4">
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Ajouter un bien immobilier
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom du bien *
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                  errors.nom ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
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
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                  errors.adresse ? "border-red-500" : "border-gray-300"
                } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
                placeholder="123 Rue Principale, 75001 Paris"
              />
              {errors.adresse && <p className="mt-1 text-sm text-red-600">{errors.adresse}</p>}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type de bien *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-100"
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.surface ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  placeholder="65"
                  step="0.1"
                  min="1"
                />
                {errors.surface && <p className="mt-1 text-sm text-red-600">{errors.surface}</p>}
              </div>
            </div>

            
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.nbPieces ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.loyer ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  placeholder="850"
                  step="0.01"
                  min="0"
                />
                {errors.loyer && <p className="mt-1 text-sm text-red-600">{errors.loyer}</p>}
              </div>
            </div>

            
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
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.charges ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
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
                    disabled={isSubmitting}
                    className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-700">Disponible à la location</span>
                </label>
              </div>
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localisation précise (cliquez sur la carte pour placer le marqueur)
              </label>
              <CarteLocalisation onLocationSelect={handleLocationSelect} />
              {coordinates.lat && (
                <p className="mt-2 text-sm text-gray-600">
                  Coordonnées sélectionnées : {coordinates.lat.toFixed(5)}, {coordinates.lng.toFixed(5)}
                </p>
              )}
              {errors.coords && <p className="mt-1 text-sm text-red-600">{errors.coords}</p>}
            </div>
            

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                disabled={isSubmitting}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-100"
                placeholder="Description détaillée du bien..."
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photos
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                disabled={isSubmitting}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 disabled:opacity-50"
              />
              <p className="mt-1 text-xs text-gray-500">
                Vous pourrez ajouter des photos après la création.
              </p>
            </div>

            
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                disabled={isSubmitting}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <FiX className="mr-2" /> Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-lg text-white transition-colors flex items-center ${
                  isSubmitting
                    ? "bg-amber-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                }`}
              >
                <FiCheck className="mr-2" />
                {isSubmitting ? "Ajout en cours..." : "Ajouter le bien"}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AjouterBien;