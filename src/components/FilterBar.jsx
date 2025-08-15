import React from 'react';

const FilterBar = ({ technologies, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <button
        onClick={() => onFilterChange('All')}
        className={activeFilter === 'All' ? 'active' : ''}
      >
        Tous
      </button>
      {technologies.map(tech => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={activeFilter === tech ? 'active' : ''}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
