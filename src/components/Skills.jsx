import React from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <section id="competences">
      <h2>Arbre de Compétences</h2>
      <div className="skill-tree">
        {skillsData.map(tier => (
          <div key={tier.tier} className="skill-tier">
            {tier.skills.map(skill => (
              <div key={skill.id} className="skill-node">
                {skill.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
