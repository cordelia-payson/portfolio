import React from 'react';
import portrait from '../images/portrait.jpeg';

function About() {
  return (
    <div id="about" className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={portrait} alt="portrait" className="max-w-sm rounded-lg shadow-2xl m-4" />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">Experienced in Front End and knowledeable about Back End</p>
          <p className="py-6"> My name is Cordelia and I am a fullstack software engineer. I am enthusiastic about problem solving, writing clean code, and </p>
          <p className="py-6">Currently learning.... Typescript</p>
        </div>
      </div>
    </div>
  );
}

export default About;
