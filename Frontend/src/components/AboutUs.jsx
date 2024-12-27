// Frontend/src/components/AboutUs.jsx
import React from 'react';
import AnimatedText from './Animations/Animatedtext';

const AboutUs = () => {
  return (
    <>
      {/* Desktop version */}
      <div className=" flex items-center justify-start">
        <div className="w-fit hidden md:grid grid-cols-1 gap-0 place-items-center  px-[100px] flex text-[#1A1C1F] flex-col space-y-8 w-[40%] bg-cover bg-center">
          <p className="font-bold text-xl flex items-center">
            Your &ensp; <AnimatedText /> &ensp; Is Just A Step Away!
          </p>
          <div className="px-4  border border-gray-300 bg-white rounded-3xl shadow-lg p-4 mt-[0px]">
            <div className="flex items-center space-x-2 mt-[20px]">
              <input
                type="text"
                placeholder="Enter Skills, Designation, etc."
                className="border border-gray-300 px-[10px] py-[10px] rounded-[5px] w-full"
              />
              <select
                className="border border-gray-300 px-[10px] py-[10px] rounded-[5px] text-gray-500"
              >
                <option>Experience</option>
                <option>0-1 Years</option>
                <option>1-2 Years</option>
                <option>2+ Years</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className="border border-gray-300 px-[10px] py-[10px] rounded-[5px] w-full"
              />
              <button className="bg-teal-800 text-white hover:text-teal-800 px-[10px] py-[10px] rounded-[5px] w-full rounded hover:bg-white hover:border border-teal-800 transition duration-300">
                Let's Find
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex justify-between items-center px-[100px] py-[225px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/hero image.svg')",
          backgroundColor: '#F3F6FB', // Fallback color for older browsers
        }}
      ></div>

      {/* Mobile version */}
      <div
        className="relative text-[#1A1C1F] md:hidden flex flex-col bg-[#F3F6FB] items-center px-[20px] py-[30px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/hero image.svg')",
        }}
      >
        <p className="font-semibold text-[14px]">
          Your <AnimatedText /> Is Just A Step Away!
        </p>
        <p className="text-center font-semibold text-[36px] mt-[10px]">
          Transforming Ideas into Digital Solutions
        </p>
        <p className="text-[14px] text-center text-[#5B6572] mt-[10px]">
          At forZers, we are dedicated to transforming ideas into groundbreaking digital solutions. We focus on customer-centric innovations, expertise, and integrity to ensure the success of each project.
        </p>
        <div className="flex flex-col w-full space-y-[10px] mt-[20px]">
          <input
            type="text"
            placeholder="Enter Skills, Designation, etc."
            className="border border-gray-300 px-[10px] py-[10px] rounded-[5px] w-full"
          />
          <select
            className="border border-gray-300 px-[10px] py-[10px] rounded-[5px] text-gray-500"
          >
            <option>Experience</option>
            <option>0-2 Years</option>
            <option>2-5 Years</option>
            <option>5+ Years</option>
          </select>
          <input
            type="text"
            placeholder="Location"
            className="border border-gray-300 px-[10px] py-[10px] rounded-[5px] w-full"
          />
          <button className="bg-[#FF3B30] text-white px-[15px] py-[10px] rounded-[5px] font-semibold">
            Let's Find
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
