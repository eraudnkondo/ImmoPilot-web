import React from "react";
import patrimoine from "../assets/images/patrimoine.png";

const WhyUs = () => {
  return (
    <div className=" w-full">
      
      <div className="relative w-full px-0 mb-8">  
        <img
          src={patrimoine}
          alt="Patrimoine"
          className="w-full h-[650px] md:h-[800px] object-cover shadow-lg"
        />

      
        <div className="absolute inset-0 bg-black/25"></div>

        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Gérer vos loyers et votre patrimoine en toute sérénité
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6">
            Loyers payés à temps, biens sécurisés et tranquillité garantie
          </p>
        </div>
      </div>

      
      <div
        id="howItWorks"
        className="max-w-7xl mx-auto py-16 px-6  -mt-15"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Comment ça marche
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">1. Inscription</h3>
            <p>Créez rapidement votre compte et accédez à nos services.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">2. Choix du service</h3>
            <p>Gestion locative, vente de biens ou suivi de patrimoine.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">3. Suivi simplifié</h3>
            <p>Suivez vos loyers, paiements et documents en ligne facilement.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-2">4. Tranquillité garantie</h3>
            <p>Loyers sécurisés et biens protégés pour votre sérénité.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhyUs;