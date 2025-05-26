
import styles from '../styles/Layout.module.css';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import { Outlet } from 'react-router-dom';


const DashboardLayout: React.FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Topbar />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;