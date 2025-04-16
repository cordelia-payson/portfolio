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
          <p className="py-6">Front-End Software Engineer with 1 year of startup experience building and deploying user-friendly web applications. Proficient in Typescript, React, Next.js, and AWS. Passionate about creating seamless user experiences and seeking new opportunities to contribute to innovative projects. </p>
          <p className="py-6">Interested in my background or want to chat about creating the perfect React component? Send me an email or connect on LinkedIn!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
