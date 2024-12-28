// Frontend/src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import LoginModal from './LoginModal'; // Make sure the import path is correct

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [activePage, setActivePage] = useState('/');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const activeClass = "text-teal-800 font-medium";
  const inactiveClass = "text-teal-800";

  const closeDropdown = () => setDropdown(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const handleNavigation = (path) => {
    setActivePage(path);
    window.history.pushState({}, '', path);
    closeDropdown();
  };

  return (
    <>
      <header className="bg-white-600 text-white pr-2 p-0 pb-0 md:pr-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }} className="pb-0 text-2xl md:pb-0 text-3xl font-bold">
            <img src="newweblogo.svg" alt="forZers Logo" className="h-16 w-16 pb-0 pt-0 md:h-32 md:w-32" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="/jobs" onClick={(e) => { e.preventDefault(); handleNavigation('/jobs'); }} className={`hover:underline ${activePage === '/jobs' ? activeClass : inactiveClass}`}>Find Jobs</a>
            <a href="/services" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }} className={`hover:underline ${activePage === '/services' ? activeClass : inactiveClass}`}>Services</a>
            <a href="/startups" onClick={(e) => { e.preventDefault(); handleNavigation('/contact'); }} className={`hover:underline ${activePage === '/startups' ? activeClass : inactiveClass}`}>Startup Assistance</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }} className={`hover:underline ${activePage === '/about' ? activeClass : inactiveClass}`}>About Us</a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigation('/contact'); }} className={`hover:underline ${activePage === '/contact' ? activeClass : inactiveClass}`}>Contact</a>
            <button className="bg-white text-teal-800 hover:text-white border border-teal-800 px-4 py-2 rounded hover:bg-teal-800 transition duration-300" onClick={() => setShowLoginModal(true)}>
              Login
            </button>

            <button className="bg-teal-800 text-white hover:text-teal-800 px-4 py-2 rounded hover:bg-white hover:border border-teal-800 transition duration-300">Register</button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setDropdown(!dropdown)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {dropdown && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-blue-600 z-10">
            <div className="container mx-auto py-4 space-y-4">
              <a href="/jobs" onClick={(e) => { e.preventDefault(); handleNavigation('/jobs'); }} className="block px-4 py-2 hover:bg-blue-700">Find Jobs</a>
              <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }} className="block px-4 py-2 hover:bg-blue-700">About Us</a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigation('/contact'); }} className="block px-4 py-2 hover:bg-blue-700">Contact</a>
              <div className="px-4">
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300" onClick={closeDropdown}>Sign In</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default Header;
