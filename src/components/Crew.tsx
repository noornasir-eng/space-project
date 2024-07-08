import React, { useState } from 'react';
import crewData from '../data.json';

const Crew: React.FC = () => {
  const [crewMember, setCrewMember] = useState(crewData.crew[0]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('/assets/crew/background-crew-desktop.jpg')`,
        fontFamily: 'Barlow, sans-serif',
      }}
    >
      <div className="container mx-auto p-6">
        <h1 className="text-2xl uppercase mb-6 tracking-widest" style={{ fontFamily: 'Bellefair, serif' }}>
          <span className="opacity-50">02</span> Meet Your Crew
        </h1>
        <div className="flex justify-center items-center space-x-8">
          <div className="flex-1 text-center">
            <img
              src={crewMember.images.png}
              alt={crewMember.name}
              className="max-w-xs mx-auto"
            />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-2xl mb-2 uppercase tracking-widest" style={{ fontFamily: 'Bellefair, serif' }}>
              {crewMember.role}
            </h2>
            <h3 className="text-4xl mb-4 uppercase" style={{ fontFamily: 'Bellefair, serif' }}>
              {crewMember.name}
            </h3>
            <p className="text-lg mb-8" style={{ fontFamily: 'Barlow, sans-serif' }}>
              {crewMember.bio}
            </p>
            <ul className="flex space-x-4 justify-center">
              {crewData.crew.map((member, index) => (
                <li key={index}>
                  <button
                    className={`w-4 h-4 rounded-full ${
                      crewMember.name === member.name ? 'bg-white' : 'bg-gray-500'
                    }`}
                    onClick={() => setCrewMember(crewData.crew[index])}
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

export default Crew;
