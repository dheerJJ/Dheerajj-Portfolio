import React from 'react';

export default function Services() {
  return (
    <section id="services" className="reveal">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">My Services</h2>
          <div className="title-line"></div>
        </div>
        
        <div className="row g-4">
          {/* Frontend Development */}
          <div className="col-md-6 col-lg-3 reveal-scale">
            <div className="service-card">
              <div className="service-icon-wrap">
                <i className="bi bi-window"></i>
              </div>
              <h3 className="service-title">Frontend Dev</h3>
              <p className="service-desc">
                Building dynamic, highly responsive web pages using modern HTML, CSS, JavaScript, and React framework structures. Highly focused on pixel-perfect styles and cross-browser rendering.
              </p>
            </div>
          </div>

          {/* Backend Development */}
          <div className="col-md-6 col-lg-3 reveal-scale delay-100">
            <div className="service-card">
              <div className="service-icon-wrap">
                <i className="bi bi-hdd-network"></i>
              </div>
              <h3 className="service-title">Backend Dev</h3>
              <p className="service-desc">
                Developing performant RESTful APIs, routing servers, security middleware, and file uploading subsystems using scalable architectures with Node.js and Express framework.
              </p>
            </div>
          </div>

          {/* Full Stack Web Development */}
          <div className="col-md-6 col-lg-3 reveal-scale delay-200">
            <div className="service-card">
              <div className="service-icon-wrap">
                <i className="bi bi-layers-half"></i>
              </div>
              <h3 className="service-title">Full Stack Dev</h3>
              <p className="service-desc">
                Designing complete, functional web apps. Connecting frontends with backend APIs and storing relational or unstructured states safely in document databases like MongoDB.
              </p>
            </div>
          </div>

          {/* Website Maintenance */}
          <div className="col-md-6 col-lg-3 reveal-scale delay-300">
            <div className="service-card">
              <div className="service-icon-wrap">
                <i className="bi bi-gear-wide-connected"></i>
              </div>
              <h3 className="service-title">Maintenance</h3>
              <p className="service-desc">
                Troubleshooting frontend layout bugs, resolving backend response bottlenecks, upgrading deprecated NPM modules, and keeping servers running secure and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
