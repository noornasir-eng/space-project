import React, { useState } from 'react';
import data from '../data.json';

const Destination: React.FC = () => {
  const [destination, setDestination] = useState(data.destinations[0]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/assets/destination/background-destination-desktop.jpg')`,
        fontFamily: 'Barlow, sans-serif',
      }}
    >
      <div className="container mx-auto p-6">
        <h1 className="text-2xl md:text-4xl uppercase mb-6" style={{ fontFamily: 'Bellefair, serif' }}>
          <span className="opacity-50">01</span> Pick Your Destination
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center">
            <img
              src={destination.images.png}
              alt={destination.name}
              className="max-w-xs md:max-w-md mx-auto"
            />
          </div>
          <div className="flex-1 text-left">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-lg tracking-widest uppercase mb-8">
              {data.destinations.map((dest, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${destination.name === dest.name ? 'border-b-2 border-white' : 'opacity-50 hover:opacity-100'}`}
                  onClick={() => setDestination(data.destinations[index])}
                >
                  {dest.name}
                </li>
              ))}
            </ul>
            <h2 className="text-4xl md:text-6xl font-heading uppercase mb-4" style={{ fontFamily: 'Bellefair, serif' }}>
              {destination.name}
            </h2>
            <p className="text-base md:text-lg mb-8" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {destination.description}
            </p>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div>
                <h3 className="text-sm uppercase">Avg. Distance</h3>
                <p className="text-2xl md:text-3xl font-heading" style={{ fontFamily: 'Bellefair, serif' }}>
                  {destination.distance}
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase ">Est. Travel Time</h3>
                <p className="text-2xl md:text-3xl font-heading" style={{ fontFamily: 'Bellefair, serif' }}>
                  {destination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
