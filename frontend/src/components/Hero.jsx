import React from 'react';

const Hero = () => {
  return (
    <div
      className="pb-10"
      style={{
        background: 'linear-gradient(135deg, #FFDEE9 20%, #B5FFFC 100%)',
        height: '30vh',
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 h-full">
        <h1 className="text-5xl text-gray-800 font-bold text-center">
          Ready to <span className="text-blue-500 hover:text-blue-600">travel</span> to your dream destination?
        </h1>
        <p className="text-2xl text-gray-700">
          Discover the perfect <i className="text-blue-400">hotel</i> for your vacation.
        </p>
      </div>
    </div>
  );
};

export default Hero;
