import React from "react";

const roles = [
  { id: "JobSeeker", label: "Job Seeker", description: "Looking for a job?" },
  { id: "Employer", label: "Employer", description: "Hire top talent." },
  { id: "StartupHead", label: "Startup Head", description: "Build your startup." },
];

const RoleSelection = ({ onRoleSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-xl font-semibold text-center mb-4">Select Your Role</h2>
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => onRoleSelect(role.id)}
          className="border border-gray-300 rounded-lg p-4 hover:bg-teal-50 transition"
        >
          <h3 className="text-lg font-medium text-teal-800">{role.label}</h3>
          <p className="text-gray-600">{role.description}</p>
        </button>
      ))}
    </div>
  );
};

export default RoleSelection;
