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
        <h1 className="text-2xl uppercase mb-6 tracking-widest" style={{ fontFamily: 'Bellefair, serif' }}>
          <span className="opacity-50">01</span> Pick Your Destination
        </h1>
        <div className="flex justify-center items-center space-x-8">
          <div className="flex-1 text-center">
            <img
              src={destination.images.png}
              alt={destination.name}
              className="max-w-xs mx-auto"
            />
          </div>
          <div className="flex-1 text-left">
            <ul className="flex space-x-6 text-lg font-base tracking-widest uppercase mb-8">
              {data.destinations.map((dest, index) => (
                <li key={index} className={`cursor-pointer ${destination.name === dest.name ? 'border-b-2 border-white' : 'opacity-50 hover:opacity-100'}`} onClick={() => setDestination(data.destinations[index])}>
                  {dest.name}
                </li>
              ))}
            </ul>
            <h2 className="text-6xl font-heading uppercase mb-4">{destination.name}</h2>
            <p className="text-lg font-base mb-8" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {destination.description}
            </p>
            <div className="flex space-x-16">
              <div>
                <h3 className="text-sm uppercase tracking-widest">Avg. Distance</h3>
                <p className="text-3xl font-heading">{destination.distance}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest">Est. Travel Time</h3>
                <p className="text-3xl font-heading">{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
