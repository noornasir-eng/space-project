import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center text-white p-8 bg-home-mobile sm:bg-home-desktop"
      style={{
        backgroundImage: `url('/assets/home/background-home-desktop.jpg')`,
        fontFamily: 'Barlow, sans-serif',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl mx-auto space-y-10 lg:space-y-0 lg:space-x-20">
        <div className="text-center lg:text-left lg:max-w-md px-4 lg:px-0 mt-40 lg:mt-0">
          <h1 className="font-base text-secondary mb-2 text-lg sm:text-xl">SO, YOU WANT TO TRAVEL TO</h1>
          <h2 className="font-heading text-accent text-4xl sm:text-6xl mb-4">
            SPACE
          </h2>
          <p className="font-base text-secondary text-base sm:text-lg md:text-xl">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex-shrink-0 mt-10 lg:mt-0 lg:ml-20">
          <button className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-accent text-lg sm:text-xl font-heading text-black flex items-center justify-center hover:bg-opacity-80">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
