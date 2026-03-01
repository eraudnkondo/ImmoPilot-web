import React from "react";
import image from "../assets/images/image.png";

const HeroPage = () => {
  return (
    <>
      <div className="flex mt-20 ml-50  p-10 items-start justify-between">
        <div className="w-3/4 text-left -mt-16">
          <h3 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Bienvenue sur{" "}
            <span className="text-gray-700">IMMOPILOT</span>
          </h3>

          <p className="mt-10 font-medium text-2xl leading-relaxed ">
            <span className="block ">
              Optimisez votre suivi financier grâce à une gestion rigoureuse des paiements,
              vous permettant <br />
              d'identifier instantanément les loyers perçus et ceux en retard.
            </span>

            <span className="block  ">
              Pilotez votre activité avec sérénité grâce à un tableau de bord clair offrant
              des statistiques<br />
              globales et des graphiques précis sur vos performances immobilières.
            </span>

            <span className="block">
              Profitez d'une architecture moderne et sécurisée pour archiver l'historique
              de vos biens et préparer<br />
              sereinement l'évolution future de vos investissements.
            </span>
          </p>
        </div>
        <div className="w-1/2 flex justify-center ">
          <img
            src={image}
            alt="Immo illustration"
            className="w-130 -mt-24 animate-float "
          />
        </div>
      </div>

      {/* Protection banner with bottom margin to separate from next section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gray-200 rounded-xl flex flex-col md:flex-row items-center justify-between p-6 gap-6">

          <div className="flex items-center gap-4 ">
            <div className="text-teal-600 text-5xl">🛡️</div>
            <div>
              <h3 className="text-teal-700 font-semibold text-lg">
                Protection intégrale des loyers
              </h3>
              <p className="text-gray-600 mt-1 text-sm md:text-base">
                Vos loyers payés à temps, même si le locataire ne règle pas
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              className="bg-[#8A9BFF] text-white px-6 py-2 rounded-md font-medium hover:bg-[#6F8BFF] transition"
              onClick={() =>
                document.getElementById("howItWorks").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Voir plus
            </button>
          </div>

        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            30% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
};

export default HeroPage;