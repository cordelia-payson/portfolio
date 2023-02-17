/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Toggle from './Toggle.jsx';
import Resume from './Resume.jsx';

function NavBar(props) {
  const { theme, setTheme } = props;
  return (
    <div className="navbar bg-primary sticky relative top-0 z-50">
      <div className="flex-1">
        <a href="#" className=" text-xl font-bold border-none transform transition duration-500 hover:scale-105 hover:shadow-2xl ml-2">Cordelia Payson</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="modal-open"><Resume /></li>
          <li><Toggle theme={theme} setTheme={setTheme} /></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
