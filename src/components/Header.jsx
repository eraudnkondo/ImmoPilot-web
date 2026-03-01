import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header style={styles.header}>
      
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        IMMOPILOT
      </Link>

      {/* Hamburger */}
      <button
        style={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar1Open : {}) }} />
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar2Open : {}) }} />
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar3Open : {}) }} />
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {/* Lien vers l'accueil */}
          <NavLink to="/" style={styles.mobileLink} onClick={closeMenu}>
            Accueil
          </NavLink>

          {/* Sous-menu Nos Services */}
          <div style={styles.subMenu}>
            <span style={styles.subMenuTitle}>Nos services</span>
            <NavLink to="GestionLocative" style={styles.mobileLink} onClick={closeMenu}>
              Gestion locative
            </NavLink>
            <NavLink to="/" style={styles.mobileLink} onClick={closeMenu}>
              Vente de biens
            </NavLink>
            <NavLink to="/" style={styles.mobileLink} onClick={closeMenu}>
              Suivi de patrimoine
            </NavLink>
          </div>

          {/* Ancres vers sections sur la page d'accueil */}
          <NavLink to="/#howItWorks" style={styles.mobileLink} onClick={closeMenu}>
            Comment ça marche
          </NavLink>
          <NavLink to="/#testimonials" style={styles.mobileLink} onClick={closeMenu}>
            Témoignages / Résultats
          </NavLink>

          {/* Pages dédiées */}
          <NavLink to="/espace-client" style={styles.mobileLink} onClick={closeMenu}>
            Espace client
          </NavLink>
          <NavLink to="/espace-agence" style={styles.mobileLink} onClick={closeMenu}>
            Espace agence / Propriétaire
          </NavLink>

          {/* Auth */}
          <NavLink to="/connexion" style={styles.mobileLink} onClick={closeMenu}>
            Connexion
          </NavLink>
          <NavLink to="/inscription" style={styles.mobileLink} onClick={closeMenu}>
            Inscription
          </NavLink>

          {/* Contact / Assistance */}
          <NavLink to="/contact" style={styles.mobileLink} onClick={closeMenu}>
            Contact / Assistance
          </NavLink>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f3f4f6',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: '#b8860b',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },

  menuButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '25px',
    height: '18px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },

  bar: {
    width: '100%',
    height: '3px',
    backgroundColor: '#374151',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  },

  bar1Open: {
    transform: 'rotate(45deg) translate(5px, 5px)',
  },

  bar2Open: {
    opacity: 0,
  },

  bar3Open: {
    transform: 'rotate(-45deg) translate(5px, -5px)',
  },

  mobileMenu: {
    position: 'absolute',
    top: '70px',
    right: 0,
    width: '500px',                 // ✅ encore plus large : 500px
    maxWidth: 'calc(100vw - 2rem)',  // garde une marge sur très petits écrans
    backgroundColor: '#f3f4f6',
    borderLeft: '1px solid #e5e7eb',
    borderBottom: '1px solid #e5e7eb',
    borderRadius: '0 0 8px 8px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',                    // espacement accru
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },

  mobileLink: {
    textDecoration: 'none',
    padding: '0.9rem 1.2rem',        // plus de padding pour une zone tactile confortable
    borderRadius: '8px',
    fontWeight: 500,
    color: '#374151',
    border: '1px solid #d1d5db',
    textAlign: 'center',
    transition: 'all 0.3s',
    fontSize: '1.2rem',               // texte plus grand
  },

  subMenu: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.5rem',
  },

  subMenuTitle: {
    fontWeight: 'bold',
    padding: '0.9rem 1.2rem',
    color: '#1f2937',
    fontSize: '1.3rem',               // titre du sous‑menu plus grand
  },
};

export default Header;