import React from 'react';
import LinkedIn from './LinkedIn.jsx';
import GitHub from '../project/GitHubIcon.jsx';

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/cordelia-payson/" target="_blank" rel="noreferrer noopener">
          <LinkedIn />
        </a>
        <a href="https://github.com/cordelia-payson" target="_blank" rel="noreferrer noopener">
          <GitHub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
