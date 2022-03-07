import React, { ButtonHTMLAttributes } from "react";
import { FaDiscord } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SocialButton: React.FC<ButtonProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${props.className} px-4 py-2 rounded bg-theme-discord text-white font-medium flex items-center w-full justify-center`}
      disabled={disabled}
      {...props}
    >
      {children}
      <FaDiscord className="mx-2" />
    </button>
  );
};
