import React from 'react';

const Topbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-white shadow-md sticky top-0 z-[100]">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded w-64"
        />
      </div>
      <div className="flex items-center gap-2.5">
        <span>Admin User</span>
        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          AU
        </div>
      </div>
    </div>
  );
};

export default Topbar;
