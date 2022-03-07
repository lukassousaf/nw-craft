import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ItemRecipeProvider } from "../contexts/ItemContext";
import { CartProvider } from "../contexts/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ItemRecipeProvider>
        <Component {...pageProps} />
      </ItemRecipeProvider>
    </CartProvider>
  );
}

export default MyApp;
