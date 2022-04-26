
import React from "react";



interface Props {
  totalPrice: Number;
}

export const TotalPrice: React.FC<Props> = ({ totalPrice }) => {
  return ( 
      <div className="flex justify-between mx-10 max-w-sm h-16 bg-theme-gray-200">
        <p className="text-4xl">Total</p>
        <p className="text-3xl">{ totalPrice }G</p>
      </div>
      
    
  );
};
