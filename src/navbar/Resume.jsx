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
        <div className="modal-box relative">
          <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <img src={ResumePic} alt="resume" className="" />
          <a href="resume.pdf" download="CordeliaPaysonResume.pdf">
            <button className="btn" type="button">Download</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
