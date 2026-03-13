import React from "react";
import Footer from "../components/Footer";
import HeaderGestionBiens from "../components/HeaderGestionBiens";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaMapMarkerAlt,
  FaRuler,
  FaCalendarAlt,
  FaArrowRight,
  FaBuilding,
  FaTrophy,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const GestionBiens = () => {

  const features = [
    {
      icon: <FaHome className="text-[#8A9BFF] text-3xl" />,
      title: "Ajout de biens",
      description:
        "Enregistrez facilement vos biens immobiliers avec toutes leurs caractéristiques : type, surface, nombre de pièces, étage, etc.",
      link: "/ajouter-bien",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#8A9BFF] text-3xl" />,
      title: "Localisation précise",
      description:
        "Géolocalisez chaque bien sur une carte interactive et visualisez les quartiers et commodités à proximité.",
    },
    {
      icon: <FaRuler className="text-[#8A9BFF] text-3xl" />,
      title: "Caractéristiques techniques",
      description:
        "Stockez les surfaces et diagnostics techniques ainsi que les documents associés.",
      link: "/caracteristiques-techniques",
    },
    {
      icon: <FaCalendarAlt className="text-[#8A9BFF] text-3xl" />,
      title: "Historique et travaux",
      description:
        "Gardez une trace des travaux effectués et de l’évolution de valeur du bien.",
      link: "/historique-travaux",
    },
  ];

  return (
    <>
      <HeaderGestionBiens />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#8A9BFF] to-[#6F8BFF] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <FaBuilding className="w-full h-full text-white" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gestion des biens immobiliers
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Centralisez toutes les informations de vos propriétés.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inscription"
              className="bg-white text-[#6F8BFF] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              Commencer <FaArrowRight />
       </Link>
          </div>
        </div>
      </section>
      
      {/* FEATURES */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Gérer vos biens facilement
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {features.map((feature, index) => {

              const Card = (
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center">

                  <div className="w-16 h-16 mx-auto bg-[#8A9BFF]/10 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              );

              return feature.link ? (
                <Link key={index} to={feature.link}>
                  {Card}
                </Link>
              ) : (
                <div key={index}>{Card}</div>
              );

            })}

          </div>
        </div>
      </section>



      <Footer />
    </>
  );
};

export default GestionBiens;