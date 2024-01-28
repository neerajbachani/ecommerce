// src/components/Dropdown.js
import React from 'react';

const Dropdown = ({ onSelect }) => {
  const tabs = ['highlight', 'details', 'reviews'];

  return (
    <div className="flex flex-col space-y-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2  max-w-sm focus:ring-offset-2 focus:ring-indigo-500"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;

