import React from 'react';

const jobCategories = [
  { title: 'Web Developers', description: 'Explore opportunities in web development', imgSrc: '/assets/Hero.jpg' },
  { title: 'Graphic Designers', description: 'Find creative roles in graphic design', imgSrc: '/path-to-image' },
  { title: 'Cooks', description: 'Discover culinary roles', imgSrc: '/path-to-image' },
  { title: 'Project Managers', description: 'Find project management opportunities', imgSrc: '/path-to-image' },
  { title: 'Office Managers', description: 'Manage office operations and staff', imgSrc: '/path-to-image' },
  { title: 'Open Vacancies', description: 'Explore all available job openings', imgSrc: '/path-to-image' },
];

const JobCategories = () => {
  return (
    <section id="jobs" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Job Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <img src={category.imgSrc} alt={category.title} className="mb-4 mx-auto h-40 w-full object-cover" />
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
