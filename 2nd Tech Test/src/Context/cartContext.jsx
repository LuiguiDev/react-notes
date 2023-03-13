import { createContext, useState } from "react";

// 1.- Create the context
export const CartContext = createContext()

// 2.- Create the access to the context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const clearCart = () => {
    setCart([])
  };
  const addToCart = (newItem) => {
    // Check if the product is already on the cart
    const productInCartIndex = cart.findIndex(item => item.id === newItem.id)

    if(productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }
    // If it is not on cart 
    setCart(prevState => ([
      ...prevState, {...newItem, quantity: 1}
    ]))
  };

  return (
    <CartContext.Provider value={{cart, clearCart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

// 3.- Create a hook to read the context