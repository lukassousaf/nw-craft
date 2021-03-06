import React, { ButtonHTMLAttributes } from "react";
import { FaDiscord } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SolidButton: React.FC<ButtonProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <div
      className={`${props.className}  rounded bg-theme-gray-400 flex justify-between w-fit flex-1`}
    >
      <button
        className={`${props.className} px-6 py-2  text-white font-medium flex items-center  justify-between w-fit flex-1 `}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
