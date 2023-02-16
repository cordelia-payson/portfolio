import React from 'react';
import Github from './GitHub.jsx';

function SingleProject(props) {
  const { name, link, description, photo } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-10">
      <figure className=""><img src={photo} alt="Album" /></figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="">{description}</p>
        <div className="card-actions justify-end">
          <a href={link} alt="github link" target="_blank" rel="noreferrer noopener">
            <Github className="transform transition duration-500 hover:scale-125 hover:shadow-2xl" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default SingleProject;
