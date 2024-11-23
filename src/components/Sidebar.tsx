import { NavLink } from "react-router-dom";
import React from "react";
import { SideBar } from "."; // Ensure SideBar is an array of objects

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen flex flex-col items-center justify-between">
      <div className="w-0.5 h-[85px] bg-black dark:bg-white"></div>
      <ul className="flex flex-col items-center justify-center gap-[60px]">
        {SideBar.map((list) => (
          <li key={list.id} className="-rotate-90">
            <NavLink
              to={list.path}
              className={({ isActive }) =>
                ` font-semibold hover:underline decoration-2 ${
                  isActive ? "line-through hover:no-underline" : ""
                }`
              }
            >
              {list.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="w-0.5 h-[85px] bg-black dark:bg-white"></div>
    </div>
  );
};

export default Sidebar;
