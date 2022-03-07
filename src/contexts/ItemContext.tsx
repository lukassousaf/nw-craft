import { createContext, useContext, useState } from "react";
import { Item } from "../interfaces";

const items: Item[] = [
  {
    id: "1",
    name: "Bota Leve",
    components: [
      { name: "Modificador de Perk", quantity: 1 },
      { name: "Modificador de Atributo", quantity: 10 },
      { name: "Asmódeo", quantity: 1 },
      { name: "Fio de Fênix", quantity: 3 },
    ],
  },
  {
    id: "2",
    name: "Luva Leve",
    components: [
      { name: "Asmódeo", quantity: 5 },
      { name: "Fio de Fênix", quantity: 2 },
    ],
  },
];

interface ItemRecipeState {
  selectedItem: Item;
  items: Item[];
  selectItem: (id: string) => void;
  changeItemComponentPrice: (position: number, price: number) => void;
}

const initialState: ItemRecipeState = {
  items,
  selectedItem: {} as Item,
  selectItem: () => {},
  changeItemComponentPrice: () => {},
};

const ItemRecipeContext = createContext<ItemRecipeState>(
  initialState as ItemRecipeState
);

export const ItemRecipeProvider: React.FC = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState({} as Item);

  function selectItem(id: string) {
    const item = items.filter((item) => item.id === id)[0];
    setSelectedItem(item);
  }

  function changeItemComponentPrice(position: number, price: number) {
    const itemComponent = selectedItem.components[position];

    const newItemComponents = selectedItem.components.map(
      (component, index) => {
        if (index === position) {
          return {
            ...itemComponent,
            price,
          };
        }

        return component;
      }
    );

    setSelectedItem({
      ...selectedItem,
      components: newItemComponents,
      price: newItemComponents.reduce(
        (total, component) =>
          total + component.quantity * (component.price || 0),
        0
      ),
    });
  }

  return (
    <ItemRecipeContext.Provider
      value={{
        ...initialState,
        selectedItem: selectedItem,
        selectItem,
        changeItemComponentPrice,
      }}
    >
      {children}
    </ItemRecipeContext.Provider>
  );
};

export const useItemRecipe = () => useContext(ItemRecipeContext);
