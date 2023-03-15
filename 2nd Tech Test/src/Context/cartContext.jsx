import { createContext, useReducer, useState } from "react";
import { cartReducer, initialState } from "../Reducers/cartReducer";

// 1.- Create the context
export const CartContext = createContext()

// 2.- Create the access to the context
export const CartProvider = ({ children }) => {
  const [state, dispathc] = useReducer(cartReducer, initialState)

  const addToCart = product => dispathc({
    type: 'addToCart',
    payload: product
  })
  const removeFromCart = product => dispathc({
    type: 'removeFromCart',
    payload: product
  })
  const clearCart = () => dispathc({ type: 'cleanCart' });

  return (
    <CartContext.Provider value={{cart: state, clearCart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

// 3.- Create a hook to read the context