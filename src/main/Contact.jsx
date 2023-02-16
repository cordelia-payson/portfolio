import React from 'react';

function Contact() {
  return (
    <div id="contact" className="hero bg-base-200">
      <div className="hero-content flex flex-col bg-base-200">
        <h1 className="text-5xl font-bold m-5">Contact</h1>
        <div className="flex flex-row">
          <a href="mailto:cordelia.payson@gmail.com" target="_blank" rel="noreferrer noopener">
            <button type="button" className="btn btn-primary w-fit m-3 normal-case rounded-xl">cordelia.payson@gmail.com</button>
          </a>
          <a href="https://www.linkedin.com/in/cordelia-payson/" target="_blank" rel="noreferrer noopener">
            <button type="button" className="btn btn-primary w-fit m-3 normal-case rounded">LinkedIn</button>
          </a>
          <a href="https://github.com/cordelia-payson" target="_blank" rel="noreferrer noopener">
            <button type="button" className="btn btn-primary w-fit m-3 normal-case">GitHub</button>
          </a>
        </div>

      </div>
    </div>

  );
}

export default Contact;
