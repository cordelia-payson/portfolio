import React from 'react';

function SkillsCard(props) {
  const { skill } = props;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{skill}</h2>
      </div>
    </div>
  );
}

export default SkillsCard;
