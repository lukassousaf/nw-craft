import React, { ButtonHTMLAttributes } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const TextButton: React.FC<ButtonProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <div
      className={` ml-5 mt-3 rounded bg-transparent flex justify-between `}
    >
      <button
        className={`px-6 py-2  font-medium flex items-center  justify-between w-fit flex-1 ${props.className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
