// Frontend/src/components/LoginModal.jsx
import React, { useEffect, useRef } from 'react';
import GoogleIcon from '../assets/googleIcon.svg';

const LoginModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
    
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center">Login to ForZers</h2>
            <p className="text-center text-sm text-gray-500 mt-2">
              Don't have an account?{" "}
              <a href="#" className="text-teal-600 font-medium hover:underline">
                Register Now
              </a>
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Enter your email id"
                className="border w-full px-4 py-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="border w-full px-4 py-2 rounded"
              />
              <a
                href="#"
                className="text-teal-600 text-sm block text-right font-medium hover:underline"
              >
                Forgot Password?
              </a>
              <button
                type="submit"
                className="bg-teal-800 text-white w-full py-2 rounded hover:text-teal-800 hover:bg-white hover:border border-teal-800 transition"
              >
                Login
              </button>
            </form>
            <div className="flex items-center justify-between mt-6">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <button className="mt-4 bg-white text-teal-800 hover:text-white border border-teal-800 border w-full py-2 rounded flex items-center justify-center space-x-2 hover:bg-teal-800">
              <img
                src={GoogleIcon}
                alt="Google"
                className="w-6 h-6"
              />
              <span>Sign in with Google</span>
            </button>
        </div>
    </div>
  );
};

export default LoginModal;

