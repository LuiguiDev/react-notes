import { createContext, useReducer } from 'react'
import { cartReducer, initialState } from '../Reducers/cartReducer'

// 1.- Create the context
export const CartContext = createContext()

// 2.- Create the access and provide value to the context.
export const CartProvider = ({ children }) => {
  const [states, dispathc] = useReducer(cartReducer, initialState)

  const addToCart = product => dispathc({
    type: 'addToCart',
    payload: product
  })
  const removeFromCart = product => dispathc({
    type: 'removeFromCart',
    payload: product
  })
  const clearCart = () => dispathc({ type: 'cleanCart' })

  return (
    <CartContext.Provider value={{ cart: states.cart, clearCart, addToCart, removeFromCart, total: states.total }}>
      {children}
    </CartContext.Provider>
  )
}

// 3.- Create a hook to read the context
