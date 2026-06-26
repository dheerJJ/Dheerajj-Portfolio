import React, { useState } from 'react';

const projectsData = [
  {
    title: "SmileCare Dental Clinic",
    category: "fullstack",
    desc: "A professional dental care platform with treatment listings, online appointment scheduling, service highlights, patient reviews, contact forms, and a clean responsive interface.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gitLink: "https://github.com/dheerJJ/Smile-dental",
    demoLink: "https://smile-dental-pearl.vercel.app/",
    svg: (
      <svg viewBox="0 0 100 60" className="project-img-placeholder">
        <rect width="100" height="60" fill="url(#svgGrad)" opacity="0.85"/>
        <circle cx="50" cy="30" r="14" fill="var(--svg-monitor-screen)" opacity="0.85" />
        <path d="M 44 26 L 47 26 L 49 32 L 54 32 L 56 28 L 48 28" stroke="var(--accent-blue)" strokeWidth="1.2" fill="none"/>
        <circle cx="50" cy="34" r="1.5" fill="var(--accent-purple)"/>
        <circle cx="53" cy="34" r="1.5" fill="var(--accent-purple)"/>
        <line x1="38" y1="44" x2="62" y2="44" stroke="var(--text-muted)" strokeWidth="1" opacity="0.5"/>
      </svg>
    )
  },
  {
    title: "Student Management System",
    category: "backend",
    desc: "Clean academic dashboard server providing REST APIs for registering students, updating marks records, computing GPA aggregates, and managing course enrollments.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
    gitLink: "https://github.com/dheerajjkumawat",
    demoLink: "#",
    svg: (
      <svg viewBox="0 0 100 60" className="project-img-placeholder">
        <rect width="100" height="60" fill="url(#svgGrad)" opacity="0.85"/>
        <circle cx="50" cy="30" r="14" fill="var(--svg-monitor-screen)" opacity="0.85" />
        <path d="M 43 27 L 50 24 L 57 27 L 50 30 Z" fill="none" stroke="var(--accent-blue)" strokeWidth="1.2"/>
        <path d="M 46 28.5 L 46 33 C 46 35, 54 35, 54 33 L 54 28.5" fill="none" stroke="var(--accent-blue)" strokeWidth="1.2"/>
        <path d="M 57 27 L 59 31" fill="none" stroke="var(--accent-purple)" strokeWidth="1"/>
        <line x1="38" y1="44" x2="62" y2="44" stroke="var(--text-muted)" strokeWidth="1" opacity="0.5"/>
      </svg>
    )
  },
  {
    title: "Portfolio Website",
    category: "frontend",
    desc: "Modern single page developer portfolio website built using custom CSS styles, Bootstrap 5 UI structures, custom filtering triggers, and interactive client contact validation.",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JS Vanilla"],
    gitLink: "https://github.com/dheerajjkumawat",
    demoLink: "#",
    svg: (
      <svg viewBox="0 0 100 60" className="project-img-placeholder">
        <rect width="100" height="60" fill="url(#svgGrad)" opacity="0.85"/>
        <circle cx="50" cy="30" r="14" fill="var(--svg-monitor-screen)" opacity="0.85" />
        <rect x="42" y="23" width="16" height="11" rx="1" stroke="var(--accent-blue)" strokeWidth="1.2" fill="none"/>
        <line x1="42" y1="26" x2="58" y2="26" stroke="var(--accent-blue)" strokeWidth="1"/>
        <circle cx="45" cy="30" r="1.5" fill="var(--accent-purple)"/>
        <rect x="48" y="29" width="7" height="2" fill="var(--svg-code-light)" opacity="0.8"/>
      </svg>
    )
  },
  {
    title: "Task Management App",
    category: "fullstack",
    desc: "Interactive Kanban project coordinator enabling task status creation, boards categorization, lists priority assignment, and real-time database state refreshes.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    gitLink: "https://github.com/dheerajjkumawat",
    demoLink: "#",
    svg: (
      <svg viewBox="0 0 100 60" className="project-img-placeholder">
        <rect width="100" height="60" fill="url(#svgGrad)" opacity="0.85"/>
        <circle cx="50" cy="30" r="14" fill="var(--svg-monitor-screen)" opacity="0.85" />
        <path d="M 44 30 L 48 34 L 56 26" stroke="var(--accent-blue)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="38" y1="44" x2="62" y2="44" stroke="var(--text-muted)" strokeWidth="1" opacity="0.5"/>
      </svg>
    )
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleDemoClick = (e, project) => {
    e.preventDefault();
    if (project.title === "Portfolio Website") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert(project.demoAlert);
    }
  };

  return (
    <section id="projects" className="reveal">
      <div className="container-fluid px-md-5">
        <div className="section-title-wrap">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">My Projects</h2>
          <div className="title-line"></div>
        </div>
        
        {/* Filter Controls */}
        <div className="projects-filter">
          <button className={`project-filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Projects</button>
          <button className={`project-filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`} onClick={() => setActiveFilter('frontend')}>Frontend</button>
          <button className={`project-filter-btn ${activeFilter === 'backend' ? 'active' : ''}`} onClick={() => setActiveFilter('backend')}>Backend</button>
          <button className={`project-filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`} onClick={() => setActiveFilter('fullstack')}>Full Stack</button>
        </div>
        
        {/* Projects Grid - 4 columns on desktop in a single row */}
        <div className="row g-4 projects-grid" id="projectsGrid">
          {projectsData.map((project, index) => {
            const isVisible = activeFilter === 'all' || project.category === activeFilter;
            
            return (
              <div 
                key={index} 
                className={`col-12 col-md-6 col-lg-3 project-card-wrapper ${!isVisible ? 'filtered-out' : ''}`}
                style={{ transition: 'all 0.4s ease' }}
              >
                <div className="project-card">
                  <div className="project-img-container">
                    {project.svg}
                    <div className="project-img-overlay">
                      <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" title="GitHub Code"><i className="bi bi-github"></i></a>
                      <a href={project.demoLink} className="project-overlay-btn" title="Live Preview" onClick={(e) => handleDemoClick(e, project)}><i className="bi bi-box-arrow-up-right"></i></a>
                    </div>
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tech-badges">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-badge">{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-btn-secondary"><i className="bi bi-github"></i> Code</a>
                      <a href={project.demoLink} className="project-link-btn project-link-btn-primary" onClick={(e) => handleDemoClick(e, project)}><i className="bi bi-globe"></i> Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
