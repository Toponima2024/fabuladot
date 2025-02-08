import React from 'react';

const SectionInfo = ({ children }) => {
  return (
    <section className="relative flex items-start justify-center 2xl:min-h-[60vh] md:min-h-[50vh] min-h-[75vh] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary"></div>
      <div className="absolute -top-10 w-full flex flex-col items-center justify-center z-10">
        <div className="max-w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;