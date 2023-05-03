import React from 'react';

function Intro() {
  return (
  // <div className="hero min-h-screen bg-base-200">
  //   <div className="hero-content text-left">
  //     <div className="">
  //       <h1 className="text-5xl font-bold">Hey, I'm Cordelia</h1>
  //       <p className="py-6 text-center">~ East Coast Based Software Engineer ~</p>
  //     </div>
  //   </div>
  // </div>

    <div className="hero min-h-screen" style={{ backgroundImage: 'url("/images/background2.jpg")' }}>
      <div className="hero-overlay bg-opacity-0" />
      <div className="hero-content text-left">
        <div className="text-black">
          <h1 className="text-5xl font-bold">Hey, I'm Cordelia</h1>
          <p className="py-6 text-center">~ East Coast Based Software Engineer ~</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
