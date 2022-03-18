import { createContext, useContext, useState } from "react";
import { Item } from "../interfaces";

interface CartState {
  items: Item[];
  totalPrice: number;
  addToCart: (item: Item) => void;
}

const initialState: CartState = {
  items: [] as Item[],
  totalPrice: 0,
  addToCart: () => {},
};

const CartContext = createContext<CartState>(initialState as CartState);

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState([...initialState.items]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart(item: Item) {
    setItems([...items, item]);

    setTotalPrice(totalPrice + (item.price || 0) * item.quantity);
  }

  return (
    <CartContext.Provider value={{ items, totalPrice, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
