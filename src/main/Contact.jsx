import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-bold m-5">Contact</h1>
      <div className="flex flex-row">
        <a href="mailto:cordelia.payson@gmail.com" target="_blank" rel="noreferrer noopener">
          <button type="button" className="btn btn-primary w-fit m-3 normal-case">cordelia.payson@gmail.com</button>
        </a>
        <a href="https://www.linkedin.com/in/cordelia-payson/" target="_blank" rel="noreferrer noopener">
          <button type="button" className="btn btn-primary w-fit m-3 normal-case">LinkedIn</button>
        </a>
        <a href="https://github.com/cordelia-payson" target="_blank" rel="noreferrer noopener">
          <button type="button" className="btn btn-primary w-fit m-3 normal-case">GitHub</button>
        </a>
      </div>

    </div>
  );
}

export default Contact;
