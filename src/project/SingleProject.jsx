import React from 'react';
import GithubIcon from './GithubIcon.jsx';

function SingleProject(props) {
  const { name, link, description, photo } = props;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure className="w-3/5"><img src={photo} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} alt="github link" target="_blank" rel="noreferrer noopener">
            <GithubIcon />
          </a>

        </div>
      </div>
    </div>
  );
}

export default SingleProject;
