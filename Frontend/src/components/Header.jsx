import React, { useState, useEffect } from 'react';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [activePage, setActivePage] = useState('/');

  const activeClass = "text-white font-medium";
  const inactiveClass = "text-blue-200";

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
    <header className="bg-blue-600 text-white p-4 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }} className="text-2xl md:text-3xl font-bold">forZers</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/jobs" onClick={(e) => { e.preventDefault(); handleNavigation('/jobs'); }} className={`hover:underline ${activePage === '/jobs' ? activeClass : inactiveClass}`}>Find Jobs</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }} className={`hover:underline ${activePage === '/about' ? activeClass : inactiveClass}`}>About Us</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigation('/contact'); }} className={`hover:underline ${activePage === '/contact' ? activeClass : inactiveClass}`}>Contact</a>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300">Sign In</button>
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
  );
};

export default Header;