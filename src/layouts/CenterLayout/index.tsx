import React from "react";

export const CenterLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-theme-black flex items-start flex-col px-8">
      <div className="flex  flex-1 h-screen w-full lg:w-3/12 md:w-2/4 mx-auto  sm:w-1/2">
        {children}
      </div>
    </div>
  );
};
