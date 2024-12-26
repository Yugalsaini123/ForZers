import React from 'react';
import Slider from "react-slick";
import './AnimatedText.css'; // Import the custom CSS file

const AnimatedText = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    adaptiveHeight: true, // Ensures the slider adjusts to content height
  };

  return (
    <div className="jobs-message-container">
      <Slider {...settings}>
        <div>
          <span className="animated-text">Dream Job</span>
        </div>
        <div>
          <span className="animated-text">Career</span>
        </div>
        <div>
          <span className="animated-text">Opportunity</span>
        </div>
      </Slider>
    </div>
  );
};

export default AnimatedText;
