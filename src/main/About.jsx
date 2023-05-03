import React from 'react';
import portrait from '../images/portrait.jpeg';

function About() {
  return (
    <div id="about" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={portrait} alt="portrait" className="max-w-sm rounded-lg shadow-2xl m-4" />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6"> My name is Cordelia Payson and I am a fullstack software engineer. I am enthusiastic about problem solving, writing clean code, and learning new tech. </p>
          <p className="py-6">After graduating college with a BA in European Studies I spent several years working a variety of jobs, searching for the right career. I had considered software engineering previously, but it wasn't until the summer of 2022 that I felt ready to pursue it as a career. I finally decided to enroll in the Hack Reactor 12-week software engineering immersive and learned full-stack development through 1,000+ hours of coding. </p>
          <p className="py-6">Interested in my background or want to chat about creating the perfect React component? Send me an email or connect on LinkedIn!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
