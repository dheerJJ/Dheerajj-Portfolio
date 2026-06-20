import React, { useState, useEffect } from 'react';
import dheerajjPfp from '../assets/pfp_Main.png'
export default function Hero() {
  const words = ["Full Stack Developer", "MERN Stack Specialist", "Creative Problem Solver"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typeEffect = () => {
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(120);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, typingSpeed]);

  return (
    <section id="hero" className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Text */}
          <div className="col-lg-7 hero-content text-start reveal">
            <span className="hero-subtitle">Welcome to my Portfolio</span>
            <h1 className="hero-title">Hi, I'm <span className="text-gradient">Dheeraj Kumawat</span></h1>
            <h2 className="h3 mb-4 text-muted-custom" style={{ minHeight: '40px' }}>
              I am a <span>{typedText}</span><span className="typed-cursor">|</span>
            </h2>
            <p className="hero-desc">
              I craft clean, high-performance web applications from database schemas to polished frontend views. Explore my work and build something great together.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn-grad btn">View Projects</a>
              <a href="#contact" className="btn-outline-custom btn">Contact Me</a>
            </div>
          </div>
          
          {/* Hero Interactive Graphic */}
          <div className="col-lg-5 hero-visual text-center mt-5 mt-lg-0 reveal-scale delay-200">
            <div className="hero-visual-bg"></div>
            <div className="avatar-container">
              <div className="avatar-inner">
                <img src={dheerajjPfp} alt="Dheeraj Kumawat" className="img-fluid" />
              </div>
            </div>
            {/* Floating Badges */}
            <div className="floating-tech-badge badge-1" title="React"><i className="bi bi-braces"></i></div>
            <div className="floating-tech-badge badge-2" title="Node.js"><i className="bi bi-code-slash"></i></div>
            <div className="floating-tech-badge badge-3" title="MongoDB"><i className="bi bi-database"></i></div>
            <div className="floating-tech-badge badge-4" title="JavaScript"><i className="bi bi-braces-asterisk"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
