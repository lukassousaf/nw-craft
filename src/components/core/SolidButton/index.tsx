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
      className={`${props.className}  rounded bg-theme-gray-400 justify-between`}
      disabled={disabled}
      {...props}
    >
      <button
        className={`${props.className} px-6 py-2  text-white font-medium flex items-center w-60 max-w-xs justify-between`}
        disabled={disabled}
        {...props}
      >
        <span>{children}</span>
        <span>2400G</span>
      </button>

      {/* {totalPrice} */}
    </div>
  );
};
