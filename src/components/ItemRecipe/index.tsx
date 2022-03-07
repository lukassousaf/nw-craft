import React, { useEffect, useState } from "react";
import { Item } from "../../interfaces";
import { ItemComponentCraft } from "../ItemComponentCraft";

interface Props {
  item: Item;
}

export const ItemRecipe: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <p>Receita do Item {item.name}</p>
      {item?.components?.length > 0 &&
        item.components.map((component, index) => (
          <ItemComponentCraft key={index} component={component} position={index} />
        ))}
      <p>Preço: {item?.price}</p>
    </div>
  );
};
