import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import PDF from './Cordelia Payson Resume (2).pdf';

function Resume() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="cursor-pointer">Resume</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Resume</h3>
          <Document file={PDF}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default Resume;
