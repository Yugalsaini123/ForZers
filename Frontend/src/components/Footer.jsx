import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-20">
      <div className="container mx-auto text-center">
        <p>© 2024 forZers - All Rights Reserved</p>
        <nav className="space-x-4 mt-4">
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Help Center</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
