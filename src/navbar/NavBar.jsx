import React from 'react';

function NavBar() {
  return (
    <div className="navbar bg-secondary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
          <li><a>Resume</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
