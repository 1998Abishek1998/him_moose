import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="stats">
        <div>Total Users: 100</div>
        <div>Total Products: 50</div>
        <div>Revenue: $10,000</div>
      </div>
    </div>
  );
};

export default Dashboard;