import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-4 text-center text-md-start">
            <a className="navbar-brand-custom mb-3 d-inline-block" href="#hero">
              <span className="text-gradient">Dheeraj</span> Kumawat
            </a>
            <p className="text-muted-custom small" style={{ maxWidth: '280px' }}>
              Full Stack Web Developer crafting modern and scalable MERN web solutions.
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <div className="footer-social-links">
              <a href="https://github.com/dheerajjkumawat" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="GitHub"><i className="bi bi-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="mailto:dheerajjkumawat@gmail.com" className="footer-social-btn" title="Email"><i className="bi bi-envelope-fill"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="row">
          <div className="col-12 text-center">
            <p className="footer-copyright mb-0">
              &copy; 2026 Dheeraj Kumawat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
