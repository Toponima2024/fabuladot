import React from 'react';

const SectionInfo = ({ children }) => {
  return (
    <section 
    className="relative flex items-start justify-center  bg-white py-12 px-4 sm:px-6 lg:px-8"
    style={{background: 'linear-gradient(to bottom, #B3E95C 50%, white 50%)'
    }}
    >
      {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-primary"></div> */}
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="max-w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;