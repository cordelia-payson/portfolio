/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ResumePic from '../images/resume.jpg';

function Resume() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-5" className="cursor-pointer">Resume</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white max-w-4xl">
          <a href="resume.pdf" download="CordeliaPaysonResume.pdf">
            <button className="btn btn-sm absolute left-2 top-2 bg-primary text-primary-content border-none" type="button">Download</button>
          </a>
          <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary text-primary-content border-none">✕</label>
          <img src={ResumePic} alt="resume" className="max-w-full" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
