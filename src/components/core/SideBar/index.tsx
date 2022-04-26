import React from "react";

export const SideBar: React.FC = ({ children }) => {
  return (
    <div className="   flex flex-col  absolute  w-1/4 h-full top-0 right-0  bg-theme-gray-200">
      {children}
    </div>
  );
};
