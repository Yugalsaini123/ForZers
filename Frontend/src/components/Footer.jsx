import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              {/* <li><a href="#about" className="hover:underline">FAQs</a></li>
              <li><a href="#about" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#about" className="hover:underline">Terms & Conditions</a></li> */}
              <li><a href="#contact" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">For Candidates</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#search-jobs" className="hover:underline">Search Jobs</a></li>
              <li><a href="#create-resume" className="hover:underline">Create Resume</a></li>
              <li><a href="#prepare-interview" className="hover:underline">Prepare Interview</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">For Businesses</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#business-type" className="hover:underline">Tell Business Type</a></li>
              <li><a href="#search-packages" className="hover:underline">Search Packages</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">For Websites</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#decide-theme" className="hover:underline">Decide Theme</a></li>
              <li><a href="#search-packages" className="hover:underline">Search Packages</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://instagram.com" className="hover:text-gray-400" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://facebook.com" className="hover:text-gray-400" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://linkedin.com" className="hover:text-gray-400" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://twitter.com" className="hover:text-gray-400" target="_blank"><FontAwesomeIcon icon={faXTwitter}  size="2x" /></a>
            <a href="https://youtube.com" className="hover:text-gray-400" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Contact Us</h3>
         
          <div className="flex justify-center space-x-4 mt-4">
            <p>© 2024 FORZERS - All Rights Reserved</p>
            <div className="flex items-center space-x-2">
            <a href="tel:+91 8233242077" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 8233242077</span>
            </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="mailto: forzersfz@gmail.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faEnvelope} />
              &thinsp;
              <span> forzersfz@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Kota, Rajasthan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
