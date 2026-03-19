import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaIdCard,
  FaFileContract,
  FaMoneyBillWave,
  FaEnvelope,
  FaPhone,
  FaArrowLeft,
  FaEdit,
  FaTrash,
  FaDownload,
} from "react-icons/fa";
import HeaderGestionLocataires from "../components/HeaderGestionLocataires";
import Footer from "../components/Footer";

const FicheLocataire = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [locataire, setLocataire] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simuler le chargement des données
  useEffect(() => {
    const mockLocataire = {
      id: parseInt(id),
      civilite: "M.",
      nom: "Dupont",
      prenom: "Jean",
      dateNaissance: "1985-06-15",
      lieuNaissance: "Paris",
      nationalite: "Française",
      email: "jean.dupont@email.com",
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
      contrat: {
        id: 1,
        type: "Bail d'habitation",
        dateDebut: "2023-03-01",
        dateFin: "2024-02-29",
        loyer: 1200,
        charges: 150,
        depotGarantie: 1200,
        bien: {
          nom: "Appartement Centre-ville",
          adresse: "15 Rue de la Paix, 75001 Paris",
        },
      },
      paiements: [
        { id: 1, date: "2025-03-01", montant: 1200, statut: "payé", mode: "Virement" },
        { id: 2, date: "2025-02-01", montant: 1200, statut: "payé", mode: "Virement" },
        { id: 3, date: "2025-01-01", montant: 1200, statut: "payé", mode: "Virement" },
        { id: 4, date: "2024-12-01", montant: 1200, statut: "payé", mode: "Virement" },
        { id: 5, date: "2024-11-01", montant: 1200, statut: "en retard", mode: "En attente" },
      ],
      echanges: [
        { id: 1, date: "2025-03-10", type: "Email", sujet: "Demande d'intervention", contenu: "Le locataire signale une fuite d'eau." },
        { id: 2, date: "2025-02-28", type: "Téléphone", sujet: "Rappel loyer", contenu: "Appel pour rappeler l'échéance." },
      ],
    };
    setLocataire(mockLocataire);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <HeaderGestionLocataires />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-xl text-gray-600">Chargement...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderGestionLocataires />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* En-tête avec retour et actions */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/gestion-locataires/liste")}
            className="flex items-center text-gray-600 hover:text-amber-600 transition"
          >
            <FaArrowLeft className="mr-2" /> Retour à la liste
          </button>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition flex items-center">
              <FaEdit className="mr-2" /> Modifier
            </button>
            <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition flex items-center">
              <FaTrash className="mr-2" /> Supprimer
            </button>
          </div>
        </div>

        {/* Informations personnelles */}
        <InfoSection title="Informations personnelles" icon={<FaUser className="mr-2 text-amber-600" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoItem label="Civilité" value={locataire.civilite} />
            <InfoItem label="Nom" value={locataire.nom} />
            <InfoItem label="Prénom" value={locataire.prenom} />
            <InfoItem label="Date de naissance" value={new Date(locataire.dateNaissance).toLocaleDateString("fr-FR")} />
            <InfoItem label="Lieu de naissance" value={locataire.lieuNaissance} />
            <InfoItem label="Nationalité" value={locataire.nationalite} />
            <InfoItem label="Email" value={locataire.email} icon={<FaEnvelope className="inline mr-1 text-gray-400" />} />
            <InfoItem label="Téléphone" value={locataire.telephone} icon={<FaPhone className="inline mr-1 text-gray-400" />} />
            <InfoItem label="Téléphone secours" value={locataire.telephoneSecours} />
            <InfoItem label="Situation familiale" value={locataire.situationFamiliale} />
            <InfoItem label="Profession" value={locataire.profession} />
            <InfoItem label="Employeur" value={locataire.employeur} />
            <InfoItem label="Revenus mensuels" value={`${locataire.revenus} €`} />
          </div>
        </InfoSection>

        {/* Pièces d'identité */}
        <InfoSection title="Pièces d'identité" icon={<FaIdCard className="mr-2 text-amber-600" />}>
          {locataire.piecesIdentite.length === 0 ? (
            <p className="text-gray-500">Aucune pièce d'identité enregistrée.</p>
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
                  {locataire.piecesIdentite.map((piece) => (
                    <tr key={piece.id}>
                      <td className="px-4 py-3 text-sm text-gray-900">{piece.type}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{piece.numero}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{new Date(piece.dateDelivrance).toLocaleDateString("fr-FR")}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{new Date(piece.dateExpiration).toLocaleDateString("fr-FR")}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{piece.fichier}</td>
                      <td className="px-4 py-3 text-sm flex space-x-2">
                        <button className="text-amber-600 hover:text-amber-800" title="Télécharger"><FaDownload /></button>
                        <button className="text-red-600 hover:text-red-800" title="Supprimer"><FaTrash /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <button className="mt-4 text-amber-600 hover:text-amber-700 flex items-center">+ Ajouter une pièce</button>
        </InfoSection>

        {/* Contrat, paiements et échanges → même pattern */}
        {/* ... tu peux réutiliser InfoSection et InfoItem pour chaque bloc ... */}

      </main>
      <Footer />
    </div>
  );
};

// Composants auxiliaires
const InfoItem = ({ label, value, icon }) => (
  <div className="flex flex-col">
    <span className="text-xs text-gray-500 uppercase">{label}</span>
    <span className="text-gray-800 font-medium flex items-center">{icon} {value}</span>
  </div>
);

const InfoSection = ({ title, icon, children }) => (
  <section className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">{icon} {title}</h2>
    {children}
  </section>
);

export default FicheLocataire;