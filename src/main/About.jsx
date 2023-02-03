import React from 'react';
import portrait from '../images/portrait.jpeg';

function About() {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={portrait} alt="portrait" className="max-w-sm rounded-lg shadow-2xl m-4" />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">My name is Cordelia Payson.</p>
          <p className="py-6">I am a fullstack software engineer. I am enthusiastic about problem solving, writing clean code, and </p>
          <p className="py-6">My Tech Stack</p>
        </div>
      </div>
    </div>
  );
}

export default About;
