import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const HeaderGestionLocataires = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navStyle = ({ isActive }) =>
    `relative font-semibold text-xl transition pb-1
     ${isActive ? "text-[#8A9BFF] after:w-full" : "text-gray-700 after:w-0 hover:after:w-full"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[3px] after:bg-[#8A9BFF] after:transition-all`;

  return (
    <>
      <header className="flex justify-between items-center px-6 py-5 bg-gray-100 border-b border-gray-200 sticky top-0 z-50">
        
        
        <Link
          to="/"
          className="text-4xl #b8860b tracking-widest text-amber-600 uppercase no-underline"
        >
          IMMOPILOT
        </Link>

      
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/gestion-locataires/ajout" className={navStyle}>
            Ajouter un locataire
          </NavLink>
          <NavLink to="/gestion-locataires/liste" className={navStyle}>
            Liste des locataires
          </NavLink>
          <NavLink to="/gestion-locataires/contrats" className={navStyle}>
            Contrats
          </NavLink>
          <NavLink to="/gestion-locataires/paiements" className={navStyle}>
            Paiements
          </NavLink>
        </nav>

      
        <Link
          to="/"
          className="hidden md:flex items-center gap-3  text-gray-800 px-6 py-3  hover:bg-[#6F8BFF] transition transform hover:scale-105 shadow-md text-lg font-semibold"
        >
          <FaArrowLeft className="text-lg" />
          ACCEUIL
        </Link>

    
        <button
          className="md:hidden flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-full h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-full h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-full h-0.5 bg-gray-800 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        
        {menuOpen && (
          <div className="absolute top-16 right-0 w-80 max-w-[calc(100vw-2rem)] bg-gray-100 border-l border-b border-gray-200 rounded-bl-lg p-6 flex flex-col gap-4 shadow-lg md:hidden text-lg">
            <NavLink
              to="/gestion-locataires/ajout"
              className="text-center text-gray-700 font-medium border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-200 transition text-lg"
              onClick={closeMenu}
            >
              Ajouter un locataire
            </NavLink>
            <NavLink
              to="/gestion-locataires/liste"
              className="text-center text-gray-700 font-medium border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-200 transition text-lg"
              onClick={closeMenu}
            >
              Liste des locataires
            </NavLink>
            <NavLink
              to="/gestion-locataires/contrats"
              className="text-center text-gray-700 font-medium border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-200 transition text-lg"
              onClick={closeMenu}
            >
              Contrats
            </NavLink>
            <NavLink
              to="/gestion-locataires/paiements"
              className="text-center text-gray-700 font-medium border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-200 transition text-lg"
              onClick={closeMenu}
            >
              Paiements
            </NavLink>
            <Link
              to="/"
              className="mt-4 text-center  text-white px-6 py-3 rounded-full hover:bg-[#6F8BFF] transition text-lg font-semibold"
              onClick={closeMenu}
            >
               ACCEUIL
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderGestionLocataires;