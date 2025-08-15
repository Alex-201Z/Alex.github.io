import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noopener noreferrer">Code Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
