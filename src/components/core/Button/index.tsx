import React, { ButtonHTMLAttributes } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${props.className} font-medium flex items-center w-fit ${
        disabled ? "text-gray-600" : "text-white"
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
      <HiOutlineArrowNarrowRight className="mx-2" />
    </button>
  );
};
