import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaArrowLeft, FaEdit, FaTrash, FaIdCard, FaDownload } from "react-icons/fa";
import HeaderGestionBiens from "../components/HeaderGestionBiens";
import Footer from "../components/Footer";
import PiecesIdentite from "../pages/PiecesIdentite";

const FicheLocataire = () => {
  const navigate = useNavigate();
  const [locataire, setLocataire] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockLocataire = {
      civilite: "M.",
      nom: "Jams",
      prenom: "Eraud",
      dateNaissance: "1985-06-15",
      lieuNaissance: "Cotonou",
      nationalite: "Congolaise",
      email: "eraudnkondo3@gmail.com",
      telephone: "06 12 34 56 78",
      telephoneSecours: "06 98 76 54 32",
      situationFamiliale: "Marié",
      profession: "Ingénieur",
      employeur: "Tech Corp",
      revenus: "3500",
      piecesIdentite: [
        { id: 1, type: "Carte d'identité", numero: "123456789012", dateDelivrance: "2020-01-10", dateExpiration: "2030-01-09", fichier: "cnifront.jpg" },
        { id: 2, type: "Passeport", numero: "AB123456", dateDelivrance: "2019-05-20", dateExpiration: "2029-05-19", fichier: "passeport.pdf" },
      ],
    };
    setLocataire(mockLocataire);
    setLoading(false);
  }, []);

  
  const handleAddPiece = () => {
    const newPiece = {
      id: Date.now(),
      type: "Nouvelle pièce",
      numero: "",
      dateDelivrance: new Date(),
      dateExpiration: new Date(),
      fichier: "",
    };
    setLocataire({
      ...locataire,
      piecesIdentite: [...locataire.piecesIdentite, newPiece],
    });
  };

  const handleUpdatePiece = (piece) => {
    console.log("Modifier", piece);
    
  };

  const handleDeletePiece = (id) => {
    if (window.confirm("Supprimer cette pièce ?")) {
      setLocataire({
        ...locataire,
        piecesIdentite: locataire.piecesIdentite.filter((p) => p.id !== id),
      });
    }
  };

  const handleDownloadPiece = (piece) => {
    console.log("Télécharger", piece);

  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <HeaderGestionBiens />
        <main className="flex-grow flex items-center justify-center">
          <span className="text-xl text-gray-600">Chargement...</span>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderGestionBiens />
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/gestion-locataires")}
            className="flex items-center text-gray-600 hover:text-amber-600 transition font-medium"
          >
        
          </button>
          <div className="flex space-x-3 items-center">
            <button className="flex items-center px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
              <FaEdit className="mr-2" /> Modifier
            </button>
            <button className="flex items-center px-5 py-2 border border-red-400 text-red-600 rounded-lg hover:bg-red-50 transition">
              <FaTrash className="mr-2" /> Supprimer
            </button>
          </div>
        </div>

        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaUser className="mr-2 text-amber-600" /> Informations personnelles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardInfo label="Civilité" value={locataire.civilite} />
            <CardInfo label="Nom" value={locataire.nom} />
            <CardInfo label="Prénom" value={locataire.prenom} />
            <CardInfo label="Date de naissance" value={new Date(locataire.dateNaissance).toLocaleDateString("fr-FR")} />
            <CardInfo label="Lieu de naissance" value={locataire.lieuNaissance} />
            <CardInfo label="Nationalité" value={locataire.nationalite} />
            <CardInfo label="Email" value={locataire.email} icon={<FaEnvelope className="inline mr-1 text-gray-400" />} />
            <CardInfo label="Téléphone" value={locataire.telephone} icon={<FaPhone className="inline mr-1 text-gray-400" />} />
            <CardInfo label="Téléphone secours" value={locataire.telephoneSecours} />
            <CardInfo label="Situation familiale" value={locataire.situationFamiliale} />
            <CardInfo label="Profession" value={locataire.profession} />
            <CardInfo label="Employeur" value={locataire.employeur} />
            <CardInfo label="Revenus mensuels" value={`${locataire.revenus} €`} />
          </div>
        </section>

        
        <PiecesIdentite
          pieces={locataire.piecesIdentite}
          onAdd={handleAddPiece}
          onUpdate={handleUpdatePiece}
          onDelete={handleDeletePiece}
          onDownload={handleDownloadPiece}
        />
      </main>
      <Footer />
    </div>
  );
};

const CardInfo = ({ label, value, icon }) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
    <span className="text-xs font-medium text-gray-500 uppercase">{label}</span>
    <span className="mt-1 text-gray-800 font-semibold flex items-center">{icon} {value}</span>
  </div>
);

export default FicheLocataire;