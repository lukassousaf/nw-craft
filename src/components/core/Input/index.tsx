import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={`
        rounded bg-theme-gray-400 px-4 py-2 outline-none 
        font-sans text-white placeholder:text-theme-gray-100 
        font-medium ${className}`}
      {...props}
    />
  );
};
