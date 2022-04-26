import { useCart } from "contexts/CartContext";
import { Item } from "interfaces";
import React from "react";
import { TextButton } from "../TextButton";
import { useItemRecipe } from '../../../contexts/ItemContext';


interface Props {
  item: Item;
}

export const ListItem: React.FC<Props> = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <>
      <div>
        <div className="flex  mt-10 max-w-sm">
            <img
              src={item.url}
              alt="item image"
              className=" max-h-16 rounded-lg	bg-gradient-to-b from-green-card2 to-green-card border-1 border-border-green	"
            />
  
          <div className="flex flex-col max-w-sm">
            <p className="text-xl  max-w-sm text-white ml-5 ">{item.quantity}x {item.name}</p>
            <div className="flex justify-between">
              <div className="flex ">
                <TextButton className="text-white font-medium" >Editar</TextButton>
                <TextButton  onClick={() => {
                  removeFromCart(item)}} className="text-gray-500 font-medium">Remover</TextButton>
              </div>
              <div className="flex mt-3">
                <p className="font-bold text-lg float-right">{item.price}G</p>
              </div>
            </div>
          </div>
        </div>
            <div className="bg-gray-600 h-0.5 max-w-sm mt-8"></div>
      </div>
        
      </>
      
    
  );
};
