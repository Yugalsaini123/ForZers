import React from "react";

const EmployerForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Company Name"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="email"
        placeholder="Official Email"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Company Address"
        className="border w-full px-4 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Industry Type"
        className="border w-full px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-teal-800 text-white w-full py-2 rounded hover:text-teal-800 hover:bg-white hover:border border-teal-800 transition"
      >
        Register as Employer
      </button>
    </form>
  );
};

export default EmployerForm;
