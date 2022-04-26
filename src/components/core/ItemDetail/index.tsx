import React from "react";

export const ItemDetail: React.FC = ({ children }) => {
  return (
    <div className="flex px-2 py-12 text-white ">
      <div className="flex items-center justify-center mr-4"></div>
      <div className="flex flex-col">
        <p className="text-sm">Recipe: Orichalcum Heavy Healm</p>
        <p className="text-xs">{children}</p>
      </div>
    </div>
  );
};
