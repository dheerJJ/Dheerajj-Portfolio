import React from 'react';

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Discover</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="row g-4 align-items-center">
          {/* Personal Introduction Card */}
          <div className="col-lg-6 reveal-left">
            <div className="glass-card">
              <h3 className="h4 mb-3 text-gradient">Who I Am</h3>
              <p className="mb-4 text-muted-custom">
                Hi, I'm Dheeraj Kumawat, a passionate Full Stack Web Developer currently learning Node.js, Express.js, MongoDB, React, and JavaScript. I enjoy building modern, interactive web applications and solving real-world challenges through clean, performant code.
              </p>
              <p className="mb-4 text-muted-custom">
                My approach focuses on creating responsive user interfaces backed by solid, scalable server architectures. I'm constantly learning new concepts, polishing my coding workflows, and looking for opportunities to collaborate on innovative projects.
              </p>
              
              <div className="about-stats row g-3 mt-2">
                <div className="col-4">
                  <div className="stat-item">
                    <span className="stat-num text-gradient">20+</span>
                    <span className="stat-title">GitHub Repos</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <span className="stat-num text-gradient">100%</span>
                    <span className="stat-title">Dedication</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <span className="stat-num text-gradient">8+</span>
                    <span className="stat-title">Skills Mastered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile details & Career Objectives */}
          <div className="col-lg-6 reveal-right">
            <div className="glass-card">
              <h3 className="h4 mb-4 text-gradient">Career Objectives</h3>
              <p className="text-muted-custom mb-4">
                To secure a challenging role as a Full Stack Web Developer in a forward-thinking organization, where I can apply my JavaScript stack skills (MERN), optimize server responsiveness, build user-centric frontends, and grow alongside industry leaders.
              </p>
              
              <hr className="my-4" style={{ borderColor: 'var(--glass-border)' }} />
              
              <h3 className="h4 mb-4 text-gradient">Basic Details</h3>
              <div className="row">
                <div className="col-sm-6">
                  <div className="about-info-item">
                    <div className="about-info-icon"><i className="bi bi-person"></i></div>
                    <div className="about-info-text">
                      <strong>Full Name</strong>
                      <span>Dheeraj Kumawat</span>
                    </div>
                  </div>
                  <div className="about-info-item">
                    <div className="about-info-icon"><i className="bi bi-geo-alt"></i></div>
                    <div className="about-info-text">
                      <strong>Location</strong>
                      <span>Jaipur, Rajasthan, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="about-info-item">
                    <div className="about-info-icon"><i className="bi bi-envelope"></i></div>
                    <div className="about-info-text">
                      <strong>Email</strong>
                      <span className="text-truncate d-inline-block" style={{ maxWidth: '180px' }}>dheerajjkumawat@gmail.com</span>
                    </div>
                  </div>
                  <div className="about-info-item">
                    <div className="about-info-icon"><i className="bi bi-phone"></i></div>
                    <div className="about-info-text">
                      <strong>Phone</strong>
                      <span>+91 7850915862</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
