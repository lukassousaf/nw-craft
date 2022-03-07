import React from "react";

export const CenterLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-theme-black flex items-start flex-col px-8">
      <div className="flex flex-col flex-1 h-screen w-full lg:w-4/12 md:w-3/4 mx-auto py-16 sm:w-1/2">
        {children}
      </div>
    </div>
  );
};
