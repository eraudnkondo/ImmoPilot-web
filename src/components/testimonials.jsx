import React from "react";
import temoinage from "../assets/images/temoinage.png";

const Testimonials = () => {
  return (
    <section className=" px-4 w-full">
      
      <div 
        className="relative w-full h-64 md:h-80 mb-16 rounded-2xl overflow-hidden bg-cover bg-center -mt-5"
        style={{ backgroundImage: `url(${temoinage})` }}
      >
        
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white px-4 text-center">
            Découvrez ce que nos clients pensent de notre service
          </h2>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 -mt-5">
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700 italic mb-4">
            “Grâce à Locagestion, je n'ai plus jamais eu de soucis de loyer impayé. Le service est réactif et rassurant.”
          </p>
          <div className="font-semibold">Sophie Martin</div>
          <div className="text-sm text-gray-500">Propriétaire depuis 3 ans</div>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700 italic mb-4">
            “La gestion locative n'a jamais été aussi simple. Je recommande vivement à tous les investisseurs.”
          </p>
          <div className="font-semibold">Thomas Dubois</div>
          <div className="text-sm text-gray-500">Gestionnaire de patrimoine</div>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐</div>
          <p className="text-gray-700 italic mb-4">
            “Un accompagnement personnalisé et des outils performants. Mes loyers sont versés automatiquement chaque mois.”
          </p>
          <div className="font-semibold">Claire Lefèvre</div>
          <div className="text-sm text-gray-500">Propriétaire bailleur</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-white py-12 px-6 rounded-2xl shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
            Nos résultats en chiffres
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#8A9BFF] mb-2">98%</div>
              <p className="text-gray-600">de loyers perçus à temps</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#8A9BFF] mb-2">+1500</div>
              <p className="text-gray-600">biens gérés</p>
            </div>
            <div><div className="text-5xl font-bold text-[#8A9BFF] mb-2">4.8/5</div>
              <p className="text-gray-600">note de satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#8A9BFF] mb-2">10 ans</div>
              <p className="text-gray-600">d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;