import React from 'react';
import SingleProject from '../project/SingleProject.jsx';
import vh from '../images/vh.png';
import thecampsite from '../images/thecampsite.png';
import fec from '../images/fec.png';

function Projects() {
  return (
    <div id="projects" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <h1 className="text-5xl font-bold m-5">Projects</h1>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <SingleProject name="Visualizing History" description="Visualizing History was created as a result of my strong desire for a reliabe source for images of historical items without any visual clutter. This site is for readers, writers, and anyone with a love of history. Images are pulled from musuem collections for results that are more tailored than a Google search. the" link="https://github.com/cordelia-payson/visualizing-history" photo={vh} />
          </div>
          <div className="carousel-item">
            <SingleProject name="TheCampSite" description="TheCampSite allows users to review campsites and find campsites based on their location. Users can log in with their Google account and save campsites they are interested. I worked with five other teammates to bring this project to life. I was the UI owner." link="https://github.com/BO-BiscayBay/TheCampSite" photo={thecampsite} />
          </div>
          <div className="carousel-item">
            <SingleProject name="E-Commerce Product Page" description="This e-commerce product page was developed with a team of three others. I created the Ratings and Reviews section. Users can sort reviews, filter by rating, and add their own review." link="https://github.com/hr-gladiolus/fec-gladiolus" photo={fec} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
