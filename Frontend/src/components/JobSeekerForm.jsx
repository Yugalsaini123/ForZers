import React from "react";

const JobSeekerForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Preferred Job Role"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="number"
        placeholder="Experience (in years)"
        className="border w-full px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-teal-800 text-white w-full py-2 rounded hover:text-teal-800 hover:bg-white hover:border border-teal-800 transition"
      >
        Register as Job Seeker
      </button>
    </form>
  );
};

export default JobSeekerForm;
