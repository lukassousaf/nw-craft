import { ChangeEvent, useState } from "react";
import { useItemRecipe } from "../../../contexts/ItemContext";
import { ItemComponent } from "../../../interfaces";
import { Input } from "../../core/Input";

interface Props {
  component: ItemComponent;
  position: number;
}

export const ItemComponentCraft: React.FC<Props> = ({
  component,
  position,
}) => {
  const { changeItemComponentPrice } = useItemRecipe();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    changeItemComponentPrice(position, +event?.target.value);
  }

  return (
    <div className="flex p-2 flex-col ">
      <div className="flex flex-row">
        <p className="mr-2">{component.quantity}</p>
        <p className="mr-2">{component.name}</p>
      </div>

      <div className="flex flex-1">
        {component.url && (
          <img
            src={component.url}
            alt="item image"
            className={
              component.type === 1
                ? "max-h-12 	bg-gradient-to-b from-green-card2 to-fuchsia-700 border-1 border-fuchsia-700"
                : "max-h-12 	bg-gradient-to-b from-green-card2 to-green-card border-1 border-border-green"
            }
          />
        )}

        <Input
          className="flex flex-1 ml-4"
          placeholder="Preço"
          value={component?.price || 0}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
