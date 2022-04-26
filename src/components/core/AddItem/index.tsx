import React, { ButtonHTMLAttributes } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const AddItem: React.FC<ButtonProps> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <div
      className={`${props.className} flex items-center rounded bg-transparent  border border-border-gray	justify-between mr-7`}
    >
      <button
        className={`${props.className} px-2 py-2.5 text-white h-10 `}
        disabled={disabled}
        {...props}
      >
        <span>
          <IoIosRemove />
        </span>
      </button>

      <div className="text-white ">1</div>
      <button
        className={`${props.className} px-2 py-2.5 text-white h-10 `}
        disabled={disabled}
        {...props}
      >
        <span>
          <IoIosAdd />
        </span>
      </button>

      {/* {totalPrice} */}
    </div>
  );
};
