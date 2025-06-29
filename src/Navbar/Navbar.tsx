import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <nav className="bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          FitPro
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/tasks" className="text-gray-700 hover:text-blue-600">
            Tasks
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>

        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
