import { createContext, useContext, useState } from "react";
import { Item } from "../interfaces";
import { useItemRecipe } from "./ItemContext";

interface CartState {
  items: Item[];
  totalPrice: number;
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
}

const initialState: CartState = {
  items: [] as Item[],
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext<CartState>(initialState as CartState);

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState([...initialState.items]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart(item: Item) {
    if (!item.price || item.price <= 0) return;
    setItems([...items, item]);

    setTotalPrice(totalPrice + (item.price || 0) * item.quantity);
  }
  function removeFromCart(item: Item) {
    const idToRemove = item.id;
    const newCart = items.filter((item) => item.id !== idToRemove);
    setItems(newCart);
    console.log(newCart);
    setTotalPrice(totalPrice - (item.price || 0) * item.quantity);
  }

  return (
    <CartContext.Provider
      value={{ items, totalPrice, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
