import React from "react";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <header className="w-full shadow-sm border-b border-gray-200" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="w-full px-10 py-4 flex items-center">

        {/* Logo à gauche (doré comme page d'accueil) */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wider uppercase"
          style={{
            color: "#b8860b", // couleur dorée
            letterSpacing: "3px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          IMMOPILOT
        </Link>

        {/* Spacer pour pousser le bouton complètement à droite */}
        <div className="flex-1" />

        {/* Bouton Accueil à droite */}
        <Link
          to="/"
          className="px-6 py-2 rounded-lg border border-[#8A9BFF] text-[#8A9BFF] font-medium hover:bg-[#8A9BFF] hover:text-white transition"
        >
          ACCUEIL
        </Link>

      </div>
    </header>
  );
};

export default HeaderAuth;