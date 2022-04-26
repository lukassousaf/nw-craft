import { createContext, useContext, useState } from "react";
import { Item } from "../interfaces";

const items: Item[] = [
  {
    id: "1",
    name: "Recipe: Orichalcum Heavy Healm",
    description: "Timeless Shards",
    quantity: 1,
    url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/armor/heavyheadbt5.png",
    type: 1,
    components: [
      {
        name: "Asmodeum",
        quantity: 1,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/ingott51.png",
        type: 1,
      },
      {
        name: "Runic Leather",
        quantity: 4,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/leathert51.png",
        type: 1,
      },
      {
        name: "Phoenixweave",
        quantity: 3,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/clotht51.png",
        type: 1,
      },
      {
        name: "Perk Modifier",
        quantity: 1,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/consecratediront3.png",
        type: 2,
      },
      {
        name: "Attribute Modifier",
        quantity: 10,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/conbonust1.png",
        type: 2,
      },
      {
        name: "Timeless Plate Helm Shard",
        quantity: 1,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/pattern_heavyhead.png",
        type: 1,
      },
    ],
  },
  {
    id: "2",
    name: "Luva Leve",
    quantity: 1,
    url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/armor/heavyheadbt5.png",
    type: 1,
    components: [
      {
        name: "Asmodeum",
        quantity: 1,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/ingott51.png",
        type: 1,
      },
      {
        name: "Runic Leather",
        quantity: 4,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/leathert51.png",
        type: 1,
      },
      {
        name: "Phoenixweave",
        quantity: 3,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/clotht51.png",
        type: 1,
      },
      {
        name: "Perk Modifier",
        quantity: 1,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/consecratediront3.png",
        type: 2,
      },
      {
        name: "Attribute Modifier",
        quantity: 10,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/conbonust1.png",
        type: 2,
      },
      {
        name: "Timeless Plate Helm Shard",
        quantity: 1,
        url: "https://cdn.nwdb.info/db/images/live/v8/icons/items/resource/pattern_heavyhead.png",
        type: 1,
      },
    ],
  },
];

interface ItemRecipeState {
  selectedItem: Item;
  items: Item[];
  quantity: number;
  setQuantity: (quant: number) => void;
  selectItem: (id: string) => void;
  changeItemComponentPrice: (position: number, price: number) => void;
}

const initialState: ItemRecipeState = {
  items,
  quantity: 1,
  setQuantity: () => {},
  selectedItem: { quantity: 1 } as Item,
  selectItem: () => {},
  changeItemComponentPrice: () => {},
};

const ItemRecipeContext = createContext<ItemRecipeState>(
  initialState as ItemRecipeState
);

export const ItemRecipeProvider: React.FC = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(
    initialState.selectedItem as Item
  );
  const [quantity, setQuantity] = useState(initialState.quantity);

  function selectItem(id: string) {
    const item = items.filter((item) => item.id === id)[0];
    setSelectedItem(item);

    setQuantity(item.quantity);
  }

  function setItemQuantity(quantity: number) {
    setSelectedItem({ ...selectedItem, quantity });
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
        quantity,
        setQuantity: setItemQuantity,
      }}
    >
      {children}
    </ItemRecipeContext.Provider>
  );
};

export const useItemRecipe = () => useContext(ItemRecipeContext);
