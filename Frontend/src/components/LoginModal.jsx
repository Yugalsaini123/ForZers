// Frontend/src/components/LoginModal.jsx
import React from 'react';
import GoogleIcon from '../assets/googleIcon.svg';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center">Login to ForZers</h2>
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-teal-600 font-medium">
                Register Now
              </a>
            </p>
            <form className="mt-4 space-y-4">
              <input
                type="email"
                placeholder="Enter your email id"
                className="border w-full px-4 py-2 rounded focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border w-full px-4 py-2 rounded focus:ring-2 focus:ring-teal-500"
              />
              <a
                href="#"
                className="text-teal-600 text-sm block text-right font-medium"
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
            <button className="mt-4 bg-white border w-full py-2 rounded flex items-center justify-center space-x-2 hover:bg-gray-100">
              <img
                src={GoogleIcon}
                alt="Google"
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </button>
        </div>
    </div>
  );
};

export default LoginModal;

