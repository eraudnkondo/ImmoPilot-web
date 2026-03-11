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
          className="text-4xl f#b8860b tracking-widest text-amber-600 uppercase no-underline"
        >
          IMMOPILOT
        </Link>

      
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/GestionBiens" className={navStyle}>
            Tableau de bord
          </NavLink>
          <NavLink to="/Mes biens" className={navStyle}>
            Mes biens
          </NavLink>
          <NavLink to="/Locatairs" className={navStyle}>
            Locataires
          </NavLink>
          <NavLink to="/Paiements" className={navStyle}>
            Paiements
          </NavLink>
        </nav>

      
        <Link
          to="/"
          className="hidden md:flex items-center gap-3  text-gray-800 px-6 py-3 rounded-full hover:bg-[#6F8BFF] transition transform hover:scale-105 shadow-md text-lg font-semibold"
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
      </header>
    </>
  );
};

export default HeaderGestionLocataires;