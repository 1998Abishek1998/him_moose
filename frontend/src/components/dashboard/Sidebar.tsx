import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const linkClasses =
    'text-white no-underline py-2.5 px-5 transition-colors duration-300 hover:bg-white/10';

  const activeClass = 'bg-blue-500';

  return (
    <div className="w-[250px] bg-[#2c3e50] text-white h-screen sticky top-0">
      <div className="p-5 text-xl font-bold border-b border-white/10">
        Admin Panel
      </div>
      <nav className="flex flex-col py-5">
        <NavLink to="/dashboard" end className={({ isActive }) => `${linkClasses} ${isActive ? activeClass : ''}`}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/users" className={({ isActive }) => `${linkClasses} ${isActive ? activeClass : ''}`}>
          Users
        </NavLink>
        <NavLink to="/dashboard/products" className={({ isActive }) => `${linkClasses} ${isActive ? activeClass : ''}`}>
          Products
        </NavLink>
        <NavLink to="/dashboard/settings" className={({ isActive }) => `${linkClasses} ${isActive ? activeClass : ''}`}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
