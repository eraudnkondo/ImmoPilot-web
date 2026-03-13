import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  FiHome,
  FiLayers,
  FiBattery,
  FiArrowLeft,
  FiEdit,
  FiX,
  FiSave,
  FiDroplet,
} from "react-icons/fi";

import { MdStraighten } from "react-icons/md";

import HeaderGestionBiens from "../components/HeaderGestionBiens";
import Footer from "../components/Footer";

const CaracteristiquesTechniques = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [bienNom, setBienNom] = useState("");
  const [caracs, setCaracs] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaracs, setEditedCaracs] = useState({});

  // Charger les données
  useEffect(() => {
    const storedBien = localStorage.getItem(`bien-${id}`);

    if (storedBien) {
      const data = JSON.parse(storedBien);
      setCaracs(data);
      setEditedCaracs(data);
      setBienNom(data.nom);
    } else {
      const mockCaracs = {
        id: id,
        nom: "Appartement Centre-ville",
        surface: 65,
        surfaceTerrain: null,
        nbPieces: 3,
        nbChambres: 2,
        nbSallesDeBain: 1,
        etage: 3,
        nbEtages: 5,
        anneeConstruction: 2010,
        typeChauffage: "Individuel gaz",
        classeEnergetique: "C",
        ges: "D",
        equipements: ["Ascenseur", "Parking", "Cave"],
      };

      setCaracs(mockCaracs);
      setEditedCaracs(mockCaracs);
      setBienNom(mockCaracs.nom);
    }

    setLoading(false);
  }, [id]);

  const handleEditToggle = () => {
    if (isEditing) {
      setEditedCaracs(caracs);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditedCaracs({
      ...editedCaracs,
      [name]: value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(`bien-${id}`, JSON.stringify(editedCaracs));

    setCaracs(editedCaracs);
    setIsEditing(false);

    alert("Caractéristiques mises à jour !");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <HeaderGestionBiens />
        <main className="flex-grow flex items-center justify-center">
          Chargement...
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderGestionBiens />

      <main className="flex-grow container mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 hover:text-amber-500 transition mr-4"
          >
            <FiArrowLeft className="mr-1" size={18} /> Retour
          </button>

          <h1 className="text-3xl font-bold text-gray-800">
            Caractéristiques techniques : {bienNom}
          </h1>

          <div className="ml-auto flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex items-center transition"
                >
                  <FiSave className="mr-2" /> Enregistrer
                </button>

                <button
                  onClick={handleEditToggle}
                  className="border border-gray-300 hover:border-gray-400 px-5 py-2 rounded-lg flex items-center transition"
                >
                  <FiX className="mr-2" /> Annuler
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg flex items-center transition"
              >
                <FiEdit className="mr-2" /> Modifier
              </button>
            )}
          </div>
        </div>

        {/* Contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Infos générales */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <FiHome className="mr-2 text-amber-500" />
              Informations générales
            </h2>

            <InfoRow
              icon={<MdStraighten className="text-amber-500 mr-2" />}
              label="Surface"
              name="surface"
              value={caracs.surface}
              editing={isEditing}
              editedValue={editedCaracs.surface}
              onChange={handleChange}
              unit="m²"
            />
            <InfoRow
              icon={<FiLayers className="text-amber-500 mr-2" />}
              label="Pièces"
              name="nbPieces"
              value={caracs.nbPieces}
              editing={isEditing}
              editedValue={editedCaracs.nbPieces}
              onChange={handleChange}
            />
            <InfoRow
              icon={<FiHome className="text-amber-500 mr-2" />}
              label="Chambres"
              name="nbChambres"
              value={caracs.nbChambres}
              editing={isEditing}
              editedValue={editedCaracs.nbChambres}
              onChange={handleChange}
            />
            <InfoRow
              icon={<FiDroplet className="text-amber-500 mr-2" />}
              label="Salles de bain"
              name="nbSallesDeBain"
              value={caracs.nbSallesDeBain}
              editing={isEditing}
              editedValue={editedCaracs.nbSallesDeBain}
              onChange={handleChange}
            />
            <InfoRow
              icon={<FiLayers className="text-amber-500 mr-2" />}
              label="Étage"
              name="etage"
              value={caracs.etage}
              editing={isEditing}
              editedValue={editedCaracs.etage}
              onChange={handleChange}
            />
            <InfoRow
              icon={<FiBattery className="text-amber-500 mr-2" />}
              label="Année construction"
              name="anneeConstruction"
              value={caracs.anneeConstruction}
              editing={isEditing}
              editedValue={editedCaracs.anneeConstruction}
              onChange={handleChange}
            />
          </div>

          {/* Équipements */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
              <FiBattery className="mr-2 text-amber-500" />
              Équipements
            </h2>

            {isEditing ? (
              <input
                type="text"
                value={editedCaracs.equipements.join(", ")}
                onChange={(e) =>
                  setEditedCaracs({
                    ...editedCaracs,
                    equipements: e.target.value
                      .split(",")
                      .map((s) => s.trim()),
                  })
                }
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-amber-500 transition"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {caracs.equipements.map((eq, i) => (
                  <span
                    key={i}
                    className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const InfoRow = ({
  icon,
  label,
  name,
  value,
  unit,
  editing,
  editedValue,
  onChange,
}) => {
  return (
    <div className="flex justify-between items-center border-b py-3">
      <div className="flex items-center text-gray-600">
        {icon}
        <span className="ml-1">{label}</span>
      </div>

      {editing ? (
        <input
          type="text"
          name={name}
          value={editedValue}
          onChange={onChange}
          className="border border-gray-300 px-3 py-1 rounded w-28 text-right focus:outline-amber-500 transition"
        />
      ) : (
        <span className="font-medium">
          {value} {unit}
        </span>
      )}
    </div>
  );
};

export default CaracteristiquesTechniques;