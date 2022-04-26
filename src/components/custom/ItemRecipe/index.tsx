import React, { useEffect, useState } from "react";
import { Item } from "../../../interfaces";
import { ItemComponentCraft } from "../ItemComponentCraft";

interface Props {
  item: Item;
}

export const ItemRecipe: React.FC<Props> = ({ item }) => {
  return (
    <div className="mt-2">
      <div className="flex p-2">
        {item.url && (
          <img
            src={item.url}
            alt="item image"
            className=" max-h-24	bg-gradient-to-b from-green-card2 to-green-card border-1 border-border-green	"
          />
        )}
        <div className="flex flex-col ml-5">
          <p className="text-xl text-theme-name ">{item.name}</p>
          <p className="text-base mt-4">{item.description}</p>
        </div>
      </div>

      {item?.components?.length > 0 &&
        item.components.map((component, index) => (
          <ItemComponentCraft
            key={index}
            component={component}
            position={index}
          />
        ))}
    </div>
  );
};
