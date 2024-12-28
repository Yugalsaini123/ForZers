import React from 'react';

const services = [
  { title: 'Web Developers', description: 'Explore opportunities in web development', imgSrc: '/Assets/hero image 1.svg' },
  { title: 'Graphic Designers', description: 'Find creative roles in graphic design', imgSrc: '/Assets/hero image 1.svg' },
  { title: 'Cooks', description: 'Discover culinary roles', imgSrc: '/Assets/hero image 1.svg' },
  { title: 'Project Managers', description: 'Find project management opportunities', imgSrc: '/Assets/hero image 1.svg' },
  { title: 'Office Managers', description: 'Manage office operations and staff', imgSrc: '/Assets/hero image 1.svg' },
  { title: 'Open Vacancies', description: 'Explore all available job openings', imgSrc: '/Assets/hero image 1.svg' },
];

const Services = () => {
  return (
    <section id="jobs" className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category) => (
            <div key={category.title} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <img src={category.imgSrc} alt={category.title} className="mb-4 mx-auto h-40 w-full object-cover" />
              <h3 className="text-2xl font-bold mb-2 text-teal-800">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;