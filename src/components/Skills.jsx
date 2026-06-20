import React, { useState } from 'react';

const skillsData = [
  { name: "HTML5", icon: "bi-filetype-html", progress: "95%", category: "frontend" },
  { name: "CSS3 / Bootstrap", icon: "bi-filetype-css", progress: "90%", category: "frontend" },
  { name: "JavaScript", icon: "bi-filetype-js", progress: "85%", category: "frontend" },
  { name: "React", icon: "bi-code-square", progress: "80%", category: "frontend" },
  { name: "Node.js", icon: "bi-terminal", progress: "75%", category: "backend" },
  { name: "Express.js", icon: "bi-cpu", progress: "75%", category: "backend" },
  { name: "MongoDB", icon: "bi-database", progress: "70%", category: "database" },
  { name: "C++", icon: "bi-file-earmark-code", progress: "80%", category: "programming" }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="reveal">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Proficiency</span>
          <h2 className="section-title">My Skills</h2>
          <div className="title-line"></div>
        </div>
        
        {/* Skill Category Navigation */}
        <div className="skills-nav">
          <button className={`skill-tab-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Skills</button>
          <button className={`skill-tab-btn ${activeCategory === 'frontend' ? 'active' : ''}`} onClick={() => setActiveCategory('frontend')}>Frontend</button>
          <button className={`skill-tab-btn ${activeCategory === 'backend' ? 'active' : ''}`} onClick={() => setActiveCategory('backend')}>Backend</button>
          <button className={`skill-tab-btn ${activeCategory === 'database' ? 'active' : ''}`} onClick={() => setActiveCategory('database')}>Database</button>
          <button className={`skill-tab-btn ${activeCategory === 'programming' ? 'active' : ''}`} onClick={() => setActiveCategory('programming')}>Languages</button>
        </div>
        
        {/* Skills Cards Grid */}
        <div className="skills-grid" id="skillsGrid">
          {skillsData.map((skill, index) => {
            const isVisible = activeCategory === 'all' || skill.category === activeCategory;
            if (!isVisible) return null;
            
            return (
              <div key={index} className="skill-card" data-category={skill.category} style={{ animation: 'reveal-scale 0.4s ease forwards' }}>
                <div className="skill-card-header">
                  <div className="skill-card-icon"><i className={`bi ${skill.icon}`}></i></div>
                  <h3 className="skill-card-title">{skill.name}</h3>
                </div>
                <div className="skill-progress-wrap">
                  <div className="skill-progress-label">
                    <span>Expertise</span>
                    <span>{skill.progress}</span>
                  </div>
                  <div className="skill-progress-bar-container">
                    <div className="skill-progress-fill" style={{ width: skill.progress }}></div>
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
