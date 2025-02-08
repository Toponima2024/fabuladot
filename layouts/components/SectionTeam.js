import React from 'react';

const SectionTeam = ({ children }) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full space-y-8">
        {children}
      </div>
    </section>
  );
};

export default SectionTeam;