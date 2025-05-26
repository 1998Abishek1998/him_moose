import React from 'react';
import styles from '../styles/Users.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const Users: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'User', status: 'inactive' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Users</h1>
        <button className={styles.addButton}>+ Add User</button>
      </div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span style={{ 
                  color: user.status === 'active' ? '#1cc88a' : '#e74a3b',
                  fontWeight: 500
                }}>
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </td>
              <td>
                <div className={styles.actions}>
                  <button className={`${styles.btn} ${styles.btnEdit}`}>Edit</button>
                  <button className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;