import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
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

      
      {menuOpen && (
        <div style={styles.mobileMenu}>

          <NavLink to="/" style={styles.mobileLink} onClick={closeMenu}>
            Accueil
          </NavLink>

          <div style={styles.subMenu}>
            <span style={styles.subMenuTitle}>Nos services</span>

            <NavLink to="/GestionLocative" style={styles.mobileLink} onClick={closeMenu}>
              Gestion locative
            </NavLink>

            <NavLink to="/" style={styles.mobileLink} onClick={closeMenu}>
              Vente de biens
            </NavLink>

            <NavLink to="/" style={styles.mobileLink} onClick={closeMenu}>
              Suivi de patrimoine
            </NavLink>
          </div>

          <NavLink to="/#howItWorks" style={styles.mobileLink} onClick={closeMenu}>
            Comment ça marche
          </NavLink>

          <NavLink to="/#testimonials" style={styles.mobileLink} onClick={closeMenu}>
            Témoignages
          </NavLink>

          <NavLink to="/espace-client" style={styles.mobileLink} onClick={closeMenu}>
            Espace client
          </NavLink>

          <NavLink to="/espace-agence" style={styles.mobileLink} onClick={closeMenu}>
            Espace agence
          </NavLink>

          <NavLink to="/connexion" style={styles.mobileLink} onClick={closeMenu}>
            Connexion
          </NavLink>

          <NavLink to="/inscription" style={styles.mobileLink} onClick={closeMenu}>
            Inscription
          </NavLink>

          <NavLink to="/contact" style={styles.mobileLink} onClick={closeMenu}>
            Contact
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
    padding: '1.2rem 2.5rem',
    backgroundColor: '#f3f4f6', 
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: '2.3rem',
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: '#b8860b',
    textTransform: 'uppercase',
    textDecoration: 'none',
    marginLeft: '4.5rem',
  },

  menuButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '22px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },

  bar: {
    width: '100%',
    height: '4px',
    backgroundColor: '#374151',
    borderRadius: '3px',
    transition: 'all 0.3s ease',
  },

  bar1Open: {
    transform: 'rotate(45deg) translate(6px, 6px)',
  },

  bar2Open: {
    opacity: 0,
  },

  bar3Open: {
    transform: 'rotate(-45deg) translate(6px, -6px)',
  },

  
  mobileMenu: {
    position: 'absolute',
    top: '80px',
    right: '10px',
    width: '600px',
    maxWidth: '95vw',
    backgroundColor: 'rgba(255,255,255,0.0)', 
    borderRadius: '12px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    backdropFilter: 'blur(10px)', 
  },

  
  mobileLink: {
    textDecoration: 'none',
    padding: '1.1rem 1.5rem',
    borderRadius: '10px',
    fontWeight: 600,
    color: '#374151',
    backgroundColor: 'rgba(255,255,255,0.3)', 
    textAlign: 'center',
    fontSize: '1.25rem',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(229,231,235,0.7)',
  },

  subMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  subMenuTitle: {
    fontWeight: 'bold',
    padding: '0.8rem 1rem',
    color: '#1f2937',
    fontSize: '1.4rem',
  },
};

export default Header;