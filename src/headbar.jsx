import React from 'react';

const HeaderBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-blue-700 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <nav className="flex space-x-8">
            <a href="#company" className="text-base font-medium text-white hover:text-blue-300 transition duration-150">
              Company Profile
            </a>
            <a href="#brand" className="text-base font-medium text-white hover:text-blue-300 transition duration-150">
              Brand
            </a>
            <a href="#about" className="text-base font-medium text-white hover:text-blue-300 transition duration-150">
              About Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
