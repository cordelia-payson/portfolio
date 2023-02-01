import React from 'react';
import SingleProject from '../project/SingleProject.jsx';
import vh from '../project/vh.png';

function Projects() {
  return (
    <div className="display-flex flex-col">
      <h1 className="text-5xl font-bold">Projects</h1>
      <SingleProject name="Visualizing History" description="description" link="https://github.com/cordelia-payson/visualizing-history" photo={vh} />
    </div>
  );
}

export default Projects;
