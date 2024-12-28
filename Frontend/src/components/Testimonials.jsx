import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Emily R.",
    image: "../src/assets/Usericon.svg",
    feedback: "The service is exceptional, always on time and reliable.",
    rating: 5,
  },
  {
    name: "Michael S.",
    image: "../src/assets/Usericon.svg",
    feedback: "Great experience, the team is professional and friendly.",
    rating: 5,
  },
  {
    name: "Samantha K.",
    image: "../src/assets/Usericon.svg",
    feedback: "Affordable prices and top-notch quality service every time.",
    rating: 5,
  },
  {
    name: "John D.",
    image: "../src/assets/Usericon.svg",
    feedback: "Excellent support and prompt service every time.",
    rating: 5,
  },
  {
    name: "Anna T.",
    image: "../src/assets/Usericon.svg",
    feedback: "Great experience, highly recommended for everyone.",
    rating: 5,
  },
  {
    name: "David W.",
    image: "../src/assets/Usericon.svg",
    feedback: "Quick, reliable, and affordable – simply the best.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Hear from our awesome users!
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3} // Show 3 testimonials at a time
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            // disableOnInteraction: true, // Pause autoplay on user interaction
          }}
          loop={true}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-16 bg-white shadow-lg rounded-lg cursor-pointer"
                onClick={() => console.log(`Clicked on: ${testimonial.name}`)} // Handle onClick
              >
                <div className="flex place-content-center items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="text-xl text-teal-800 font-bold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                <div className="text-yellow-500">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
