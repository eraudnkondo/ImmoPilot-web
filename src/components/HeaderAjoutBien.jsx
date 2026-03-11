import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiUsers,
  FiDollarSign,
  FiBarChart2,
  FiLogOut,
  FiUser,
  FiPlusCircle, // Nouvelle icône pour ajouter un bien
} from "react-icons/fi";

const HeaderAjoutBiens = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = { name: "Jean Dupont", initials: "JD" };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-widest text-amber-700 uppercase no-underline">
          IMMOPILOT
        </Link>

        {/* Bloc droite : avatar + menu burger */}
        <div className="flex items-center space-x-4">
          {/* Avatar utilisateur */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-semibold text-sm">
              {user.initials}
            </div>
            <span className="hidden sm:inline text-sm font-medium text-gray-700">
              {user.name}
            </span>
          </div>

          {/* Bouton hamburger (mobile) */}
          <button
            className="flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer focus:outline-none md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Overlay sombre pour mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Menu mobile (drawer latéral) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-100 z-50 transform transition-transform duration-300 ease-in-out shadow-xl md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            className="self-end text-2xl mb-4 text-gray-600"
            onClick={closeMenu}
          >
            &times;
          </button>
          <nav className="flex flex-col space-y-3">
            <NavLink
              to="/gestionbiens"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-300 transition-colors ${
                  isActive
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
              onClick={closeMenu}
            >
              <FiHome className="text-lg" />
              <span>Tableau de bord</span>
            </NavLink>
            <NavLink
              to="/mes-biens"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-300 transition-colors ${
                  isActive
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
              onClick={closeMenu}
            >
              <FiGrid className="text-lg" />
              <span>Mes biens</span>
            </NavLink>
            {/* Nouveau lien : Ajouter un bien */}
            <NavLink
              to="/ajouter-bien"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-300 transition-colors ${
                  isActive
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
              onClick={closeMenu}
            >
              <FiPlusCircle className="text-lg" />
              <span>Ajouter un bien</span>
            </NavLink>
            <NavLink
              to="/locataires"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-300 transition-colors ${
                  isActive
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
              onClick={closeMenu}
            >
              <FiUsers className="text-lg" />
              <span>Locataires</span>
            </NavLink>
            <NavLink
              to="/paiements"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-300 transition-colors ${
                  isActive
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
              onClick={closeMenu}
            >
              <FiDollarSign className="text-lg" />
              <span>Paiements</span>
            </NavLink>
            <NavLink
              to="/rapports"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-300 transition-colors ${
                  isActive
                    ? "bg-amber-100 text-amber-800 border-amber-300"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
              onClick={closeMenu}
            >
              <FiBarChart2 className="text-lg" />
              <span>Rapports</span>
            </NavLink>
            <div className="border-t border-gray-300 my-2"></div>
            <NavLink
              to="/"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-200 transition-colors"
              onClick={closeMenu}
            >
              <FiLogOut className="text-lg" />
              <span>Retour au site</span>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Menu desktop */}
      <nav className="hidden md:flex items-center justify-end px-8 py-2 bg-white border-t border-gray-200 space-x-6">
        <NavLink
          to="/gestionbiens"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-600"
            }`
          }
        >
          Tableau de bord
        </NavLink>
        <NavLink
          to="/mes-biens"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-600"
            }`
          }
        >
          Mes biens
        </NavLink>
        {/* Nouveau lien desktop */}
        <NavLink
          to="/ajouter-bien"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-600"
            }`
          }
        >
          Ajouter un bien
        </NavLink>
        <NavLink
          to="/locataires"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-600"
            }`
          }
        >
          Locataires
        </NavLink>
        <NavLink
          to="/paiements"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-600"
            }`
          }
        >
          Paiements
        </NavLink>
        <NavLink
          to="/rapports"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-amber-700 border-b-2 border-amber-700 pb-1"
                : "text-gray-600 hover:text-amber-600"
            }`
          }
        >
          Rapports
        </NavLink>
        <Link
          to="/"
          className="text-sm font-medium text-gray-600 hover:text-amber-600 flex items-center space-x-1"
        >
          <FiLogOut className="text-base" />
          <span>Déconnexion</span>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderAjoutBiens;