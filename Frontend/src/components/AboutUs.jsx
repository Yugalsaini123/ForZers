// import React from 'react';

// const AboutUs = () => {
//   return (
//     <section id="about" className="bg-gray-100 py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6">About Us</h2>
//         <p className="text-lg mb-6">
//           At forZers, we are dedicated to transforming ideas into groundbreaking digital solutions. 
//           We focus on customer-centric innovations, expertise, and integrity to ensure the success of each project.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:flex justify-between items-center px-[100px] pt-[30px] bg-[#F4F4F4]">
        <div className="flex text-[#1A1C1F] flex-col space-y-8 w-[40%]">
          <p className="font-semibold">About forZers</p>
          <p className="text-[60px] font-semibold leading-tight w-[470px]">
            Transforming Ideas into Digital Solutions
          </p>
          <p className="text-[#5B6572]">
            At forZers, we are dedicated to transforming ideas into groundbreaking digital solutions. 
            We focus on customer-centric innovations, expertise, and integrity to ensure the success of each project.
          </p>
          <div className="flex space-x-3 items-center mt-[50px]">
            <a href="/contact">
              <div className="bg-[#2563eb] text-center px-[6px] py-[7px] text-white rounded-[5px] w-[220px]">
                <p className="font-semibold">Contact Us</p>
              </div>
            </a>
            <a href="tel:+123456789">
              <div className="px-[20px] py-[7px] rounded-[5px] bg-[#2563eb] flex justify-center items-center space-x-2">
                <img
                  src="/api/placeholder/18/18"
                  className="w-[18px]"
                  alt="icon"
                />
                <p className="text-white font-semibold text-center">
                  Call Now
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-[60%]">
          <img src="/Assets/HeroImg.jpeg" className="w-full" alt="About forZers" />
        </div>
      </div>

      {/* Mobile version */}
      <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-[#F9F9F9] items-center px-[20px] py-[30px]">
        <p className="font-semibold text-[12px]">About forZers</p>
        <p className="text-center font-semibold text-[36px] mt-[10px]">
          Transforming Ideas into Digital Solutions
        </p>
        <p className="text-[14px] text-center text-[#5B6572] mt-[10px]">
          At forZers, we are dedicated to transforming ideas into groundbreaking digital solutions. 
          We focus on customer-centric innovations, expertise, and integrity to ensure the success of each project.
        </p>
        <div className="w-full mt-[20px]">
          <img
            src="/Assets/HeroImg.jpeg"
            alt="About forZers"
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between space-x-5 mt-[20px]">
          <a href="/contact">
            <button className="text-white rounded-[5px] bg-[#2563eb] px-[15px] py-[10px] text-[13px] font-semibold">
              Contact Us
            </button>
          </a>
          <a href="tel:+123456789">
            <div className="flex items-center justify-center space-x-2 rounded-[5px] bg-[#2563eb] px-[15px] py-[10px]">
              <img
                src="/api/placeholder/20/20"
                alt="call"
                className="w-[20px]"
              />
              <p className="text-white text-[13px] font-semibold">
                Call Now
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
