import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const HeaderGestionBiens = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header style={styles.header}>
      
      
      <Link to="/" style={styles.logo}>
        IMMOPILOT
      </Link>

      
      <button
        style={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar1Open : {}) }} />
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar2Open : {}) }} />
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar3Open : {}) }} />
      </button>

      {/* Menu Gestion */}
      {menuOpen && (
        <div style={styles.mobileMenu}>

          <NavLink
            to="/gestionbiens"
            style={styles.mobileLink}
            onClick={closeMenu}
          >
            Tableau de bord
          </NavLink>

          <NavLink
            to="/mes-biens"
            style={styles.mobileLink}
            onClick={closeMenu}
          >
            Mes biens
          </NavLink>

          <NavLink
            to="/locataires"
            style={styles.mobileLink}
            onClick={closeMenu}
          >
            Locataires
          </NavLink>

          <NavLink
            to="/paiements"
            style={styles.mobileLink}
            onClick={closeMenu}
          >
            Paiements
          </NavLink>

          <NavLink
            to="/rapports"
            style={styles.mobileLink}
            onClick={closeMenu}
          >
            Rapports
          </NavLink>

          <NavLink
            to="/"
            style={styles.mobileLink}
            onClick={closeMenu}
          >
            ← Retour au site
          </NavLink>

        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#f3f4f6",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "3px",
    color: "#b8860b",
    textTransform: "uppercase",
    textDecoration: "none",
  },

  menuButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "25px",
    height: "18px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },

  bar: {
    width: "100%",
    height: "3px",
    backgroundColor: "#374151",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },

  bar1Open: {
    transform: "rotate(45deg) translate(5px, 5px)",
  },

  bar2Open: {
    opacity: 0,
  },

  bar3Open: {
    transform: "rotate(-45deg) translate(5px, -5px)",
  },

  mobileMenu: {
    position: "absolute",
    top: "70px",
    right: 0,
    width: "500px",
    maxWidth: "calc(100vw - 2rem)",
    backgroundColor: "#f3f4f6",
    borderLeft: "1px solid #e5e7eb",
    borderBottom: "1px solid #e5e7eb",
    borderRadius: "0 0 8px 8px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  mobileLink: {
    textDecoration: "none",
    padding: "0.9rem 1.2rem",
    borderRadius: "8px",
    fontWeight: 500,
    color: "#374151",
    border: "1px solid #d1d5db",
    textAlign: "center",
    transition: "all 0.3s",
    fontSize: "1.2rem",
  },
};

export default HeaderGestionBiens;