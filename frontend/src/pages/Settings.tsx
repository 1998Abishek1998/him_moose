import React, { useState } from 'react';
import styles from '../styles/Settings.module.css';

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
    // Add your save logic here
    alert('Settings saved successfully!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      
      <form onSubmit={handleSubmit} className={styles.settingsForm}>
        <h2 className={styles.sectionTitle}>Appearance</h2>
        
        <div className={styles.formGroup}>
          <label htmlFor="theme">Theme:</label>
          <select 
            id="theme"
            name="theme" 
            value={formData.theme} 
            onChange={handleChange}
            className={styles.formControl}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="System">System Default</option>
          </select>
        </div>
        
        <h2 className={styles.sectionTitle}>Preferences</h2>
        
        <div className={styles.formGroup}>
          <label htmlFor="timezone">Timezone:</label>
          <select 
            id="timezone"
            name="timezone" 
            value={formData.timezone} 
            onChange={handleChange}
            className={styles.formControl}
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time (EST)</option>
            <option value="PST">Pacific Time (PST)</option>
            <option value="CET">Central European Time (CET)</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="itemsPerPage">Items per page:</label>
          <select 
            id="itemsPerPage"
            name="itemsPerPage" 
            value={formData.itemsPerPage} 
            onChange={handleChange}
            className={styles.formControl}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        
        <h2 className={styles.sectionTitle}>Notifications</h2>
        
        <div className={styles.formGroup}>
          <div className={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              id="notifications"
              name="notifications" 
              checked={formData.notifications} 
              onChange={handleChange}
            />
            <label htmlFor="notifications">Enable notifications</label>
          </div>
        </div>
        
        <button type="submit" className={styles.submitButton}>Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;