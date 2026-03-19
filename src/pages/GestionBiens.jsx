import React from "react";
import Footer from "../components/Footer";
import HeaderGestionBiens from "../components/HeaderGestionBiens";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaEuroSign,
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
      icon: <FaEuroSign className="text-[#8A9BFF] text-3xl" />,
      title: "Suivi financier par bien",
      description:
        "Consultez les revenus locatifs, charges et taxes pour chaque bien et visualisez la rentabilité.",
      link: "/suivi-financier",
    },
    {
      icon: <FaRuler className="text-[#8A9BFF] text-3xl" />,
      title: "Caractéristiques techniques",
      description:
        "Stockez les surfaces et diagnostics techniques ainsi que les documents associés.",
      link: "/caractéristiques-techniques",
    },
    {
      icon: <FaCalendarAlt className="text-[#8A9BFF] text-3xl" />,
      title: "Historique et travaux",
      description:
        "Gardez une trace des travaux effectués et de l’évolution de valeur du bien.",
      link: "/historique-travaux",
    },
  ];

  const stats = [
    { value: "150+", label: "Biens enregistrés" },
    { value: "98%", label: "Données complètes" },
    { value: "3 ans", label: "Historique moyen" },
    { value: "4.9/5", label: "Satisfaction" },
  ];

  const leaderReasons = [
    {
      icon: <FaTrophy className="text-[#8A9BFF] text-3xl" />,
      title: "Reconnu par les professionnels",
      description: "Des milliers d'agences et propriétaires nous font confiance.",
    },
    {
      icon: <FaShieldAlt className="text-[#8A9BFF] text-3xl" />,
      title: "Sécurité des données",
      description: "Vos informations sont protégées par un chiffrement avancé.",
    },
    {
      icon: <FaChartLine className="text-[#8A9BFF] text-3xl" />,
      title: "Innovation constante",
      description: "Nos outils sont améliorés régulièrement.",
    },
    {
      icon: <FaUsers className="text-[#8A9BFF] text-3xl" />,
      title: "Communauté active",
      description: "Plus de 10 000 utilisateurs utilisent notre plateforme.",
    },
  ];

  return (
    <>
      <HeaderGestionBiens />

      
      <section className="relative bg-gradient-to-br from-[#8A9BFF] to-[#6F8BFF] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <FaBuilding className="w-full h-full text-white" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gestion des biens immobiliers
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Centralisez toutes les informations de vos propriétés : fiches,
            documents techniques et suivi financier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inscription"
              className="bg-white text-[#6F8BFF] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              Commencer <FaArrowRight />
            </Link>

            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#6F8BFF] transition">
              Voir une démo
            </button>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#8A9BFF] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Tout sur vos biens
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Des outils simples et complets pour gérer votre patrimoine immobilier.
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((feature, index) => {

              const Card = (
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">

                  <div className="w-14 h-14 bg-[#8A9BFF]/10 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                </div>
              );

              return feature.link ? (
                <Link key={index} to={feature.link} className="block">
                  {Card}
                </Link>
              ) : (
                <div key={index}>{Card}</div>
              );

            })}

          </div>
        </div>
      </section>


      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Leader de la gestion immobilière
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Ce qui fait d'IMMOPILOT la référence pour les propriétaires et les agences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {leaderReasons.map((reason, index) => (
              <div key={index} className="text-center p-6">

                <div className="w-16 h-16 mx-auto bg-[#8A9BFF]/10 rounded-full flex items-center justify-center mb-4">
                  {reason.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {reason.title}
                </h3>

                <p className="text-gray-600">
                  {reason.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#8A9BFF] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">

          <h2 className="text-4xl font-bold mb-6">
            Prêt à organiser vos biens ?
          </h2>

          <p className="text-xl mb-10 opacity-90">
            Créez votre compte gratuitement et commencez à gérer votre patrimoine.
          </p>

          <Link
            to="/inscription"
            className="bg-white text-[#8A9BFF] px-10 py-4 rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 inline-block"
          >
            Créer un compte gratuit
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default GestionBiens;