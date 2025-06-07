import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-background">
        <Topbar />
        <div className="flex-1 p-5 bg-gray-100 overflow-auto text-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout