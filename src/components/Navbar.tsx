import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-4">
        <img src="/assets/shared/logo.svg" alt="Logo" className="w-10 h-10" />
        <div className="text-white text-xl sm:text-1xl font-heading">Space Tourism</div>
      </div>
      <ul className="hidden sm:flex space-x-6 text-base font-base text-white">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/destination" className="hover:text-gray-400">Destination</Link>
        </li>
        <li>
          <Link to="/crew" className="hover:text-gray-400">Crew</Link>
        </li>
        <li>
          <Link to="/technology" className="hover:text-gray-400">Technology</Link>
        </li>
      </ul>
      <div className="sm:hidden">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
