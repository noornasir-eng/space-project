import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-4">
        <img src="/assets/shared/logo.svg" alt="Logo" className="w-10 h-10" />
        <div className="text-white text-xl sm:text-2xl font-heading">Space Tourism</div>
      </div>

      {/* Desktop Navigation */}
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

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <button className="text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-0 left-0 w-full bg-gray-900 py-4">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-400 block py-2">Home</Link>
            </li>
            <li>
              <Link to="/destination" className="text-white hover:text-gray-400 block py-2">Destination</Link>
            </li>
            <li>
              <Link to="/crew" className="text-white hover:text-gray-400 block py-2">Crew</Link>
            </li>
            <li>
              <Link to="/technology" className="text-white hover:text-gray-400 block py-2">Technology</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
