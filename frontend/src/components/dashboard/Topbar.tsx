import React from 'react';
import styles from '../../styles/Topbar.module.css';

const Topbar: React.FC = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.userInfo}>
        <span>Admin User</span>
        <div className={styles.avatar}>AU</div>
      </div>
    </div>
  );
};

export default Topbar;