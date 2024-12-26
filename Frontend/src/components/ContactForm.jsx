import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s find great talents!</h2>
        <p className="mb-8">Connect with us to discover top-notch talents that can drive your business forward.</p>
        <form className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
          <input className="border rounded-lg p-4" type="text" placeholder="First Name" />
          <input className="border rounded-lg p-4" type="text" placeholder="Last Name" />
          <input className="border rounded-lg p-4" type="email" placeholder="Email" />
          <input className="border rounded-lg p-4" type="text" placeholder="Company Name" />
          <textarea className="border rounded-lg p-4" placeholder="How can we help?" rows="4"></textarea>
          <button className="bg-teal-800 text-white hover:text-teal-800 px-6 py-3 rounded-lg hover:bg-white hover:border border-teal-800 transition duration-300">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
