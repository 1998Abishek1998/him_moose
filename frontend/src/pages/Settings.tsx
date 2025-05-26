// import React, { useState } from 'react';
// import styles from '../styles/Settings.module.css';

// interface SettingsForm {
//   theme: string;
//   notifications: boolean;
//   timezone: string;
//   itemsPerPage: number;
// }

// const Settings: React.FC = () => {
//   const [formData, setFormData] = useState<SettingsForm>({
//     theme: 'Light',
//     notifications: true,
//     timezone: 'UTC',
//     itemsPerPage: 10
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Settings saved:', formData);
//     // Add your save logic here
//     alert('Settings saved successfully!');
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Settings</h1>
      
//       <form onSubmit={handleSubmit} className={styles.settingsForm}>
//         <h2 className={styles.sectionTitle}>Appearance</h2>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="theme">Theme:</label>
//           <select 
//             id="theme"
//             name="theme" 
//             value={formData.theme} 
//             onChange={handleChange}
//             className={styles.formControl}
//           >
//             <option value="Light">Light</option>
//             <option value="Dark">Dark</option>
//             <option value="System">System Default</option>
//           </select>
//         </div>
        
//         <h2 className={styles.sectionTitle}>Preferences</h2>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="timezone">Timezone:</label>
//           <select 
//             id="timezone"
//             name="timezone" 
//             value={formData.timezone} 
//             onChange={handleChange}
//             className={styles.formControl}
//           >
//             <option value="UTC">UTC</option>
//             <option value="EST">Eastern Time (EST)</option>
//             <option value="PST">Pacific Time (PST)</option>
//             <option value="CET">Central European Time (CET)</option>
//           </select>
//         </div>
        
//         <div className={styles.formGroup}>
//           <label htmlFor="itemsPerPage">Items per page:</label>
//           <select 
//             id="itemsPerPage"
//             name="itemsPerPage" 
//             value={formData.itemsPerPage} 
//             onChange={handleChange}
//             className={styles.formControl}
//           >
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//             <option value="100">100</option>
//           </select>
//         </div>
        
//         <h2 className={styles.sectionTitle}>Notifications</h2>
        
//         <div className={styles.formGroup}>
//           <div className={styles.checkboxContainer}>
//             <input 
//               type="checkbox" 
//               id="notifications"
//               name="notifications" 
//               checked={formData.notifications} 
//               onChange={handleChange}
//             />
//             <label htmlFor="notifications">Enable notifications</label>
//           </div>
//         </div>
        
//         <button type="submit" className={styles.submitButton}>Save Settings</button>
//       </form>
//     </div>
//   );
// };

// export default Settings;

import React, { useState } from 'react';

interface SettingsForm {
  theme: string;
  notifications: boolean;
  timezone: string;
  itemsPerPage: number;
}

const Settings: React.FC = () => {
  const [formData, setFormData] = useState<SettingsForm>({
    theme: 'Light',
    notifications: true,
    timezone: 'UTC',
    itemsPerPage: 10
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings saved:', formData);
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold text-gray-800 mb-5">Settings</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Appearance
        </h2>
        
        <div className="mb-5">
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
            Theme:
          </label>
          <select
            id="theme"
            name="theme" 
            value={formData.theme} 
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="System">System Default</option>
          </select>
        </div>
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Preferences
        </h2>
        
        <div className="mb-5">
          <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
            Timezone:
          </label>
          <select
            id="timezone"
            name="timezone" 
            value={formData.timezone} 
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time (EST)</option>
            <option value="PST">Pacific Time (PST)</option>
            <option value="CET">Central European Time (CET)</option>
          </select>
        </div>
        
        <div className="mb-5">
          <label htmlFor="itemsPerPage" className="block text-sm font-medium text-gray-700 mb-1">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            name="itemsPerPage" 
            value={formData.itemsPerPage} 
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Notifications
        </h2>
        
        <div className="mb-5">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              name="notifications" 
              checked={formData.notifications} 
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
              Enable notifications
            </label>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;