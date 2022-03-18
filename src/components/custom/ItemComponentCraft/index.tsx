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
    <div className="flex p-2 flex-col">
      <div className="flex flex-row">
        <p className="mr-2">{component.quantity}</p>
        <p className="mr-2">{component.name}</p>
      </div>
      <Input
        className="mr-2"
        placeholder="Preço"
        value={component?.price || 0}
        onChange={handleChange}
      />
    </div>
  );
};
