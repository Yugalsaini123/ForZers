import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import AboutUs from './components/AboutUs.jsx';
import JobCategories from './components/JobCategories.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import Services from './components/Services.jsx'; // Fixed casing issue for consistency
import Footer from './components/Footer.jsx';
import RegisterPage from './components/RegisterPage.jsx'; // Import the new RegisterPage
import HomePage from './components/HomePage.jsx'; // Create a HomePage to include the main content



const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

