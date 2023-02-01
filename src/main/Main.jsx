import React from 'react';
import NavBar from '../navbar/NavBar.jsx';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

function Main() {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
