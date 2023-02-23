import React from 'react';
import SkillsCard from './SkillsCard.jsx';

function Skills() {
  const frontSkills = ['Javascript', 'React', 'CSS', 'HTML', 'Redux', 'Figma'];
  const backSkills = ['MongoDB', 'PostgreSQL', 'Express', 'APIs'];
  const softSkills = ['Agile Methodology', 'Problem Solving', 'Written and Oral Communication', 'Research'];

  return (
    <div id="skills" className="hero min-h-screen bg-base-200">
      <div>
        <div>
          <h1 className="text-5xl font-bold text-center m-4">Skills</h1>
          <div className="flex flex-col lg:flex-row">
            <SkillsCard name="Frontend" skills={frontSkills} />
            <SkillsCard name="Backend" skills={backSkills} />
            <SkillsCard name="Soft Skills" skills={softSkills} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
