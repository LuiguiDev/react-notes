import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

export const useCart = () => {
  const context = useContext(CartContext);

  // Custume hooks that consume a context must verify if the context is not undefined, if so that means that the origin we are calling from is not included by the provider
  if (context === undefined)  {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}