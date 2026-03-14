import Footer from "../components/Footer";
import { 
  FaHome, FaUser, FaFileContract, FaMoneyBill, 
  FaTools, FaChartBar, FaArrowRight, FaBuilding 
} from "react-icons/fa";
import HeaderGestion from "../components/HeaderGestion";
import { Link } from "react-router-dom";

const GestionLocative = () => {
  const features = [
    {
      icon: <FaHome className="text-[#8A9BFF] text-3xl" />,
      title: "Gestion des biens",
      description:
        "Ajoutez, modifiez ou supprimez vos biens et consultez leurs fiches détaillées avec photos et localisation.",
      link: "/gestion-biens",
    },
    {
      icon: <FaUser className="text-[#8A9BFF] text-3xl" />,
      title: "Gestion des locataires",
      description:
        "Suivez vos locataires, leurs contrats et documents (bail, justificatifs, reçus de paiement).",
      link: "/gestion-locataires",
    },
    {
      icon: <FaFileContract className="text-[#8A9BFF] text-3xl" />,
      title: "Gestion des contrats",
      description:
        "Créez des contrats, gérez les échéances et recevez des notifications pour les baux à renouveler.",
      link: "/gestion-contrats",
    },
    {
      icon: <FaMoneyBill className="text-[#8A9BFF] text-3xl" />,
      title: "Paiements & finances",
      description:
        "Suivez les loyers payés et impayés, générez des reçus et analysez vos revenus mensuels et annuels.",
      link: "/paiements-finances",
    },
    {
      icon: <FaTools className="text-[#8A9BFF] text-3xl" />,
      title: "Maintenance & interventions",
      description:
        "Planifiez et suivez les réparations et maintenances, et informez vos locataires et propriétaires.",
      link: "/maintenance",
    },
    {
      icon: <FaChartBar className="text-[#8A9BFF] text-3xl" />,
      title: "Tableaux de bord",
      description:
        "Visualisez vos performances avec des graphiques : occupation, revenus, alertes importantes.",
      link: "/tableaux-de-bord",
    },
  ];

  const stats = [
    { value: "98%", label: "Taux d'occupation" },
    { value: "3 500+", label: "Biens gérés" },
    { value: "15j", label: "Délai moyen de relocation" },
    { value: "4.8/5", label: "Satisfaction client" },
  ];

  return (
    <>
      <HeaderGestion />

      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-[#8A9BFF] to-[#6F8BFF] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <FaBuilding className="w-full h-full text-white" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gestion locative simplifiée
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Pilotez vos locations en toute sérénité : biens, locataires, contrats et finances, 
            le tout depuis une interface unique et intuitive.
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

      {/* Statistiques */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#8A9BFF] mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fonctionnalités avec liens */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Une suite complète d'outils pour gérer efficacement votre patrimoine locatif.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block no-underline text-inherit"
              >
                <div className="w-14 h-14 bg-[#8A9BFF]/10 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="bg-[#8A9BFF] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Prêt à optimiser votre gestion locative ?</h2>
          <p className="text-xl mb-10 opacity-90">
            Rejoignez des milliers de propriétaires et d'agences qui nous font déjà confiance.
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

export default GestionLocative;