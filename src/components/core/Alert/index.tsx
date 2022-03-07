import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const Alert: React.FC = ({ children }) => {
  return (
    <div className="flex px-4 py-6 bg-theme-blue rounded-xl text-white border-theme-gray-900 border-1">
      <div className="flex items-center justify-center mr-4">
        <AiOutlineInfoCircle size={32} />
      </div>
      <div className="flex flex-col">
        <p className="text-sm">Atenção</p>
        <p className="text-xs">{children}</p>
      </div>
    </div>
  );
};
