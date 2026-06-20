import React from 'react';

export default function Navbar() {
  const closeMenu = () => {
    const navbarContent = document.getElementById('navbarContent');
    if (navbarContent && navbarContent.classList.contains('show')) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarContent);
      if (bsCollapse) {
        bsCollapse.hide();
      } else if (window.bootstrap?.Collapse) {
        new window.bootstrap.Collapse(navbarContent).hide();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" id="mainNavbar">
      <div className="container">
        <a className="navbar-brand-custom" href="" onClick={closeMenu}>
          <span className="text-gradient">Dheeraj</span> Kumawat
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon-custom"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" href="#hero" id="nav-hero" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" id="nav-about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" id="nav-skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" id="nav-education" onClick={closeMenu}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" id="nav-projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" id="nav-services" onClick={closeMenu}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" id="nav-contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
