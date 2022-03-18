import React, { ButtonHTMLAttributes } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

interface ButtonProps {
  onClickAdd: () => void;
  onClickRemove: () => void;
}

export const CounterButton: React.FC<ButtonProps> = ({
  children,
  onClickAdd,
  onClickRemove,
}) => {
  return (
    <div className="flex items-center rounded bg-transparent  border border-border-gray	justify-between mr-7">
      <button className="px-2 py-2.5 text-white h-10" onClick={onClickRemove}>
        <span>
          <IoIosRemove />
        </span>
      </button>

      <div className="text-white ">{children}</div>
      <button className="px-2 py-2.5 text-white h-10" onClick={onClickAdd}>
        <span>
          <IoIosAdd />
        </span>
      </button>
    </div>
  );
};
