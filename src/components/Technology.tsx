import React, { useState } from 'react';
import technologyData from '../data.json'; // Adjust the path as necessary

const Technology: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(technologyData.technology[0]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/assets/technology/background-technology-desktop.jpg')`,
        fontFamily: 'Barlow, sans-serif',
      }}
    >
      <div className="container mx-auto p-6">
        <h1 className="text-2xl uppercase mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl" style={{ fontFamily: 'Bellefair, serif' }}>
          <span className="opacity-50">03</span> Space Launch 101
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="flex-1 lg:flex-none lg:w-1/2">
            <img
              src={currentTech.images.portrait}
              alt={currentTech.name}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            />
          </div>
          <div className="flex-1 text-center lg:text-left lg:w-1/2">
            <h2 className="text-2xl mb-2 uppercase sm:text-2xl " style={{ fontFamily: 'Bellefair, serif' }}>
              The Technology...
            </h2>
            <h3 className="text-4xl mb-4 uppercase sm:text-2xl " style={{ fontFamily: 'Bellefair, serif' }}>
              {currentTech.name}
            </h3>
            <p className="text-lg mb-8 sm:text-xl " style={{ fontFamily: 'Barlow, sans-serif' }}>
              {currentTech.description}
            </p>
            <ul className="flex space-x-4 justify-center lg:justify-start">
              {technologyData.technology.map((tech, index) => (
                <li key={index}>
                  <button
                    className={`w-4 h-4 rounded-full ${
                      currentTech.name === tech.name ? 'bg-white' : 'bg-gray-500'
                    }`}
                    onClick={() => setCurrentTech(technologyData.technology[index])}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
