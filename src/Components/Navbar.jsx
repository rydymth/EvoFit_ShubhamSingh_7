import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-lg font-bold">
          EvoFit
        </div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-2">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white mx-2">
            About
          </Link>
          <Link to="/signin" className="text-gray-300 hover:text-white mx-2">
            Sign In
          </Link>
          <Link to="/signup" className="text-gray-300 hover:text-white mx-2">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
