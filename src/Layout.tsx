import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Toggles from "./components/Toggles";

const Layout = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Sidebar />
      </div>

      <div className="flex-grow pl-[90px]">
        <Outlet />
      </div>

      <div className="pr-10">
        <Toggles />
      </div>
    </div>
  );
};

export default Layout;
