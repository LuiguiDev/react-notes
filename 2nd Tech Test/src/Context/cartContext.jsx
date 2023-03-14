import { createContext, useState } from "react";

// 1.- Create the context
export const CartContext = createContext()

// 2.- Create the access to the context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  
  const clearCart = () => {
    setCart([])
    setTotal(0)
  };
  const addToCart = (newItem) => {
    // Check if the product is already on the cart
    const productInCartIndex = cart.findIndex(item => item.id === newItem.id)

    if(productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      const finded = newCart[productInCartIndex]
      finded.quantity += 1;
      setCart(newCart);
      setTotal(prevState => prevState += finded.price)
    }else{
      setCart(prevState => ([
        ...prevState, {...newItem, quantity: 1}
      ]))
      setTotal(prevState => prevState += newItem.price)
    }
  };
  const removeFromCart = (product) => {
    const productIndex = cart.findIndex(item => item.id === product.id)

    setCart(prevState => prevState.filter(item => item.id != product.id))
    setTotal(prevState => prevState - cart[productIndex].price * cart[productIndex].quantity)
  }

  return (
    <CartContext.Provider value={{cart, clearCart, addToCart, removeFromCart, total}}>
      {children}
    </CartContext.Provider>
  )
}

// 3.- Create a hook to read the context