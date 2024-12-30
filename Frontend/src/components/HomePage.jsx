import React from 'react';
import AboutUs from './AboutUs.jsx';
import JobCategories from './JobCategories.jsx';
import Services from './Services.jsx'; 
import Testimonials from './Testimonials.jsx';
import ContactForm from './ContactForm.jsx';

const Homepage = () => {
  return (
    <div>
      {/* About Us Section */}
      <section id="about-us" className="bg-white ">
        <AboutUs />
      </section>

      {/* Job Categories Section */}
      <section id="job-categories" className="bg-white ">
        <JobCategories />
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white ">
        <Services />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white ">
        <Testimonials />
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-white ">
        <ContactForm />
      </section>
    </div>
  );
};

export default Homepage;
