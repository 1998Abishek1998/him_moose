import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Admin Panel</div>
      <nav className={styles.nav}>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/dashboard/users" 
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Users
        </NavLink>
        <NavLink 
          to="/dashboard/products" 
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Products
        </NavLink>
        <NavLink 
          to="/dashboard/settings" 
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;