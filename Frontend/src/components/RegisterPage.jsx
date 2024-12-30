// Frontend/src/pages/RegisterPage.jsx
import React, { useState } from 'react';

const RegisterPage = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const roles = [
    { id: "jobSeeker", label: "Job Seeker", description: "Looking for a job?" },
    { id: "employer", label: "Employer", description: "Hire top talent." },
    { id: "startupHead", label: "Startup Head", description: "Build your startup." },
  ];

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const renderForm = () => {
    switch (selectedRole) {
      case 'jobSeeker':
        return <JobSeekerForm />;
      case 'employer':
        return <EmployerForm />;
      case 'startupHead':
        return <StartupHeadForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-teal-800">Register on ForZers</h1>
      {!selectedRole ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Select Your Role:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRoleSelection(role.id)}
              className="border border-gray-300 rounded-lg p-4 hover:bg-teal-100 transition"
            >
              <h3 className="text-lg font-medium text-teal-800">{role.label}</h3>
              <p className="text-gray-600">{role.description}</p>
            </button>
          ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <button
            onClick={() => setSelectedRole('')}
            className="text-gray-500 hover:text-teal-800 text-sm mb-4"
          >
            &larr; Back
          </button>
          {renderForm()}
        </div>
      )}
    </div>
  );
};

const JobSeekerForm = () => (
  <form className="space-y-4">
    <h2 className="text-xl font-bold text-teal-800">Job Seeker Registration</h2>
    <input type="text" placeholder="Full Name" className="border w-full px-4 py-2 rounded" />
    <input type="email" placeholder="Email Address" className="border w-full px-4 py-2 rounded" />
    <input type="password" placeholder="Password" className="border w-full px-4 py-2 rounded" />
    <button
      type="submit"
      className="bg-teal-800 text-white w-full py-2 rounded hover:bg-teal-600 transition"
    >
      Register
    </button>
  </form>
);

const EmployerForm = () => (
  <form className="space-y-4">
    <h2 className="text-xl font-bold text-teal-800">Employer Registration</h2>
    <input type="text" placeholder="Company Name" className="border w-full px-4 py-2 rounded" />
    <input type="email" placeholder="Company Email" className="border w-full px-4 py-2 rounded" />
    <input type="password" placeholder="Password" className="border w-full px-4 py-2 rounded" />
    <button
      type="submit"
      className="bg-teal-800 text-white w-full py-2 rounded hover:bg-teal-600 transition"
    >
      Register
    </button>
  </form>
);

const StartupHeadForm = () => (
  <form className="space-y-4">
    <h2 className="text-xl font-bold text-teal-800">Startup Head Registration</h2>
    <input type="text" placeholder="Full Name" className="border w-full px-4 py-2 rounded" />
    <input type="email" placeholder="Email Address" className="border w-full px-4 py-2 rounded" />
    <input type="text" placeholder="Startup Name" className="border w-full px-4 py-2 rounded" />
    <input type="password" placeholder="Password" className="border w-full px-4 py-2 rounded" />
    <button
      type="submit"
      className="bg-teal-800 text-white w-full py-2 rounded hover:bg-teal-600 transition"
    >
      Register
    </button>
  </form>
);

export default RegisterPage;
