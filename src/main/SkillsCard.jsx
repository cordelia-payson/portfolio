import React from 'react';

function SkillsCard(props) {
  const { name, skills } = props;

  return (
    <div className="card w-96 bg-secondary text-primary-content m-3 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-xl">{name}</h2>
        {skills.map((skill) => <p>> {skill}</p>)}
      </div>
    </div>
  );
}

export default SkillsCard;
