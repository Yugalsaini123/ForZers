import React from 'react';

const testimonials = [
  { name: 'Emily R.', feedback: 'The service is exceptional, always on time and reliable.', rating: 5 },
  { name: 'Michael S.', feedback: 'Great experience, the team is professional and friendly.', rating: 5 },
  { name: 'Samantha K.', feedback: 'Affordable prices and top-notch quality service every time.', rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Hear from our awesome users!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
              <div className="text-yellow-500">{'★'.repeat(testimonial.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
