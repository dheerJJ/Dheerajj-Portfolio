import React from 'react';

export default function Education() {
  return (
    <section id="education" className="reveal">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Academic Journey</span>
          <h2 className="section-title">Education</h2>
          <div className="title-line"></div>
        </div>
        
        {/* Timeline */}
        <div className="timeline">
          {/* BCA Timeline Item */}
          <div className="timeline-item left reveal-left">
            <div className="timeline-content">
              <span className="timeline-date">2023 - Present</span>
              <h3 className="timeline-title">Bachelor of Computer Applications (BCA)</h3>
              <span className="timeline-org">Manipal University</span>
              <p className="timeline-desc">
                Focusing on core computer science subjects, database management systems, structures and algorithms, objects-oriented programming, and web development fundamentals. Developing clean analytical logic and building academic web projects.
              </p>
            </div>
          </div>
          
          {/* Self-Directed Technical Training */}
          <div className="timeline-item right reveal-right">
            <div className="timeline-content">
              <span className="timeline-date">2024 - Continuous</span>
              <h3 className="timeline-title">Full Stack Web Development</h3>
              <span className="timeline-org">Self-Paced / Online Platforms</span>
              <p className="timeline-desc">
                Acquiring advanced JavaScript frameworks proficiency. Building end-to-end MERN (MongoDB, Express.js, React, Node.js) web applications. Implementing secure token-based user authentications, RESTful API design patterns, and database CRUD modeling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
