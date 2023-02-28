import React from 'react';

function Contact() {
  return (
    <div id="contact" className="hero bg-base-200">
      <div className="hero-content flex flex-col bg-base-200">
        <h1 className="text-5xl font-bold m-5">Contact</h1>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="chat chat-start justify-items-start">
              <div className="chat-bubble">send me an email</div>
            </div>

            <div className="chat chat-end">
              <a href="mailto:cordelia.payson@gmail.com" target="_blank" rel="noreferrer noopener">
                <button type="button" className="chat-bubble btn btn-primary w-fit m-3 normal-case rounded-xl">cordelia.payson@gmail.com</button>
              </a>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble">Connect on LinkedIn</div>
            </div>

            <div className="chat chat-end">
              <a href="https://www.linkedin.com/in/cordelia-payson/" target="_blank" rel="noreferrer noopener">
                <button type="button" className="chat-bubble btn btn-primary w-fit m-3 normal-case rounded-xl">linkedin.com/cordelia-payson</button>
              </a>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble">Check out my projects on GitHub</div>
            </div>

            <div className="chat chat-end">
              <a href="https://github.com/cordelia-payson" target="_blank" rel="noreferrer noopener">
                <button type="button" className="chat-bubble btn btn-primary w-fit m-3 normal-case rounded-xl">github.com/cordelia-payson</button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
  // return (
  //   <div id="contact" className="hero bg-base-200">
  //     <div className="hero-content flex flex-col bg-base-200">
  //       <h1 className="text-5xl font-bold m-5">Contact</h1>
  //       <div className="flex flex-row">
  //         <a href="mailto:cordelia.payson@gmail.com" target="_blank" rel="noreferrer noopener">
  //           <button type="button" className="btn btn-primary w-fit m-3 normal-case rounded-xl">cordelia.payson@gmail.com</button>
  //         </a>
  //         <a href="https://www.linkedin.com/in/cordelia-payson/" target="_blank" rel="noreferrer noopener">
  //           <button type="button" className="btn btn-primary w-fit m-3 normal-case rounded-xl">LinkedIn: cordelia-payson</button>
  //         </a>
  //         <a href="https://github.com/cordelia-payson" target="_blank" rel="noreferrer noopener">
  //           <button type="button" className="btn btn-primary w-fit m-3 normal-case rounded-xl">GitHub: cordelia-payson</button>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Contact;
