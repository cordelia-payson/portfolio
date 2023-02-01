import React from 'react';
import SingleProject from '../project/SingleProject.jsx';
import vh from '../project/vh.png';
import thecampsite from '../project/thecampsite.png';

function Projects() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-bold m-5">Projects</h1>
      <div className="flex flex-row m-0">
        <SingleProject name="Visualizing History" description="Visualizing History was created as a result of my strong desire for a reliabe source for images of historical items without any visual clutter. This site is for readers, writers, and anyone with a love of history. Images are pulled from musuem collections for results that are more tailored than a Google search. the" link="https://github.com/cordelia-payson/visualizing-history" photo={vh} />
        <SingleProject name="TheCampSite" description="TheCampSite allows users to review campsites and find campsites based on their location. Users can log in with their Google account and save campsites they are interested. I worked with five other teammates to bring this project to life. I was the UI owner." link="https://github.com/BO-BiscayBay/TheCampSite" photo={thecampsite} />
      </div>

    </div>
  );
}

export default Projects;
