import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Get all unique technologies from the projects data
  const allTechnologies = [...new Set(projectsData.flatMap(p => p.technologies))];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project =>
        project.technologies.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  return (
    <section id="projets">
      <h2>Mes Projets</h2>
      <FilterBar
        technologies={allTechnologies}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <div className="project-gallery">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
