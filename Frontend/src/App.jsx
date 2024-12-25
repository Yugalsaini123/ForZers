import React from 'react';
import Header from './components/Header.jsx';
import AboutUs from './components/AboutUs.jsx';
import JobCategories from './components/JobCategories.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <AboutUs />
      <JobCategories />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
