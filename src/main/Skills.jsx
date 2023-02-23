import React from 'react';
import SkillsCard from './SkillsCard.jsx';

function Skills() {
  const techSkills = ['Javascript', 'React', 'CSS', 'HTML', 'SQL/noSQL', 'Redux'];
  const softSkills = ['Agile Methodology', 'Problem Solving', 'Written and Oral Communication', 'Research'];

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Tech Stack</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
