import React from "react";

const StartupHeadForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Startup Name"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="email"
        placeholder="Contact Email"
        className="border w-full px-4 py-2 rounded"
      />
      <textarea
        placeholder="Brief About Your Startup"
        rows="3"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Required Assistance"
        className="border w-full px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-teal-800 text-white w-full py-2 rounded hover:text-teal-800 hover:bg-white hover:border border-teal-800 transition"
      >
        Register as Startup Head
      </button>
    </form>
  );
};

export default StartupHeadForm;
