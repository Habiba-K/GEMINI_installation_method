import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-custom-purple via-custom-blue via-custom-light-green to-white flex items-center justify-center h-screen">
      <div className="text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-7xl text-white mb-6">
          A new era of imagination
        </h1>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed">
          A design platform for teams who build products together.
        </p>
        <div className="flex justify-center gap-5">
          <button className="bg-white text-black font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
            Start designing for free
          </button>
          <button className="bg-white text-gray-800 font-semibold py-4 px-10 rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition duration-300">
            Explore our launches
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
