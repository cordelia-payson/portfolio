import React from 'react';
import NavBar from '../navbar/NavBar.jsx';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from '../navbar/Footer.jsx';

function Main(props) {
  const { theme, setTheme } = props;
  return (
    <div className="">
      <NavBar theme={theme} setTheme={setTheme} />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
