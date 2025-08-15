import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#accueil" className="nav-link">Accueil</a>
        <a href="#a-propos" className="nav-link">À Propos</a>
        <a href="#competences" className="nav-link">Compétences</a>
        <a href="#projets" className="nav-link">Projets</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
