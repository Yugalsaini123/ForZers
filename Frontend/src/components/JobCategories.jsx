// Frontend/src/components/JobCategories.jsx
import React from "react";
import { useState,useRef } from "react";

const jobCategories = [
  {
    title: "Computer Operator",
    description: "Master of data juggling.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Accountant",
    description: "Crunching numbers, saving bucks.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Business Development Officer",
    description: "Growing business, one deal daily.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Graphic Designer",
    description: "Crafting visuals that speak.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Telecaller",
    description: "Voices that close deals.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Receptionist",
    description: "First smiles, lasting impressions.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Manager and Supervisor",
    description: "Guiding teams, ensuring dreams.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Sales and Marketing",
    description: "Selling ideas, spreading buzz.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Security Guard",
    description: "Watching, guarding, keeping safe.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Driver",
    description: "Steering rides, ensuring destinations.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Receptionist (Hospital Staff)",
    description: "Welcoming with care, always.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Nursing Staff",
    description: "Healing hearts, saving lives.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Doctors",
    description: "Diagnosing, treating, life-saving experts.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  {
    title: "Teachers",
    description: "Shaping minds, inspiring futures.",
    imgSrc: "/Assets/hero image 1.svg",
  },
  // {
  //   title: "Receptionist (School Staff)",
  //   description: "Greeting parents, managing calls.",
  //   imgSrc: "/Assets/hero image 1.svg",
  // },
  {
    title: "Managing Staff",
    description: "Organizing schools, ensuring order.",
    imgSrc: "/Assets/hero image 1.svg",
  },
];

const JobCategories = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const viewButtonRef = useRef(null);

  const toggleView = () => {
    if (isExpanded) {
      setVisibleCount(6);
      // Scroll to the "View More" button after collapsing
      setTimeout(() => {
        viewButtonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } else {
      setVisibleCount(jobCategories.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="jobs" className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Job Categories</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-700"
        >
          {jobCategories.slice(0, visibleCount).map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={category.imgSrc}
                alt={category.title}
                className="mb-4 mx-auto h-40 w-full object-cover rounded-md transition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-2xl font-bold mb-2 text-teal-800">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
        <button
            ref={viewButtonRef}
            onClick={toggleView}
            className="bg-teal-800 text-white hover:text-teal-800 px-4 py-2 rounded hover:bg-white hover:border border-teal-800 transition duration-300"
          >
            {isExpanded ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;




