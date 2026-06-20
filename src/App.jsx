import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // ==========================================
    // 1. Navbar Scroll Shrink & Active Scrollspy
    // ==========================================
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      // Navbar shrink
      if (window.scrollY > 50) {
        navbar?.classList.add('navbar-scrolled');
      } else {
        navbar?.classList.remove('navbar-scrolled');
      }

      // Back to top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Scrollspy highlight
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 150)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Close mobile collapse on link click
    const navCollapse = document.getElementById('navbarContent');
    const handleLinkClick = () => {
      if (window.innerWidth < 992 && navCollapse?.classList.contains('show')) {
        // Safe check for Bootstrap collapse
        if (window.bootstrap) {
          const bsCollapse = window.bootstrap.Collapse.getInstance(navCollapse);
          bsCollapse?.hide();
        }
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // ==========================================
    // 2. Scroll Reveal Animations (Intersection Observer)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    // Cleanup listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      revealObserver.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-app">
      {/* Background Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      {/* Sections */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Back to top button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'active' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
}
