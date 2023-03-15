import { createContext, useReducer, useState } from "react";

// 1.- Create the context
export const CartContext = createContext()

// Reducer set the state relying an action
// We use useReducer when we have several setStates for the same state
const initialState = [];
const reducer = (state, action) => {
  const {type: actionType, payload: actionPayload} = action;

  switch (action.type) {
    case 'Add_to_cart': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if(productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        const finded = newCart[productInCartIndex];
        finded.quantity += 1;
        return newCart
      }else{
        return [
          ...state,
          {
            ...actionPayload, // Product
            quantity: 1
          }
        ]
      } 
    } 
    case 'Remove_from_cart': {
      const { id } = actionPayload
      return state.filter(item => item.id !== id);
    }
    case 'Clear_cart': {
      return initialState
    } 
  }

  return state
}

// 2.- Create the access to the context
export const CartProvider = ({ children }) => {
  const [state, dispathc] = useReducer(reducer, initialState)

  const addToCart = product => dispathc({
    type: 'Add_to_cart',
    payload: product
  })
  const removeFromCart = product => dispathc({
    type: 'Remove_from_cart',
    payload: product
  })
  const clearCart = () => dispathc({ type: 'Clear_cart' });

  return (
    <CartContext.Provider value={{cart: state, clearCart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

// 3.- Create a hook to read the context