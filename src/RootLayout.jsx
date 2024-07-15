import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow bg-slate-700">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
