import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-home-desktop bg-cover bg-center flex flex-col justify-center text-white p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="text-center lg:text-left lg:max-w-md">
          <h1 className="font-base text-secondary tracking-wider mb-2 text-xl">SO, YOU WANT TO TRAVEL TO</h1>
          <h2 className="font-heading text-accent text-8xl mb-4">SPACE</h2>
          <p className="font-base text-secondary text-lg">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex-shrink-0 mt-10 lg:mt-0 lg:ml-20">
          <button className="w-48 h-48 rounded-full bg-accent text-1/2xl font-heading text-black flex items-center justify-center hover:bg-opacity-80">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
