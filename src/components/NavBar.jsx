import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center ">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Weather App
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;