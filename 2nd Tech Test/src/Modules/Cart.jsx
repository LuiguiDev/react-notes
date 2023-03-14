import '../styles/cart.css'
import { useId } from "react";
import { useCart } from '../Hooks/useCart';
import { useState, useEffect } from "react";

function CartItem ({ image, title, price, quantity, addItem }) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
          <small>Qty: {quantity}</small>
          <button onClick={addItem}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCeckboxId = useId()
  const { cart, addToCart, clearCart, total } = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartCeckboxId}>
        🛒
      </label>
      <input 
        type="checkbox"
        id={cartCeckboxId}
        hidden
      />
      {total > 0 && <aside className='cart'>
        <ul>
          {cart.map(product => {
            return (
              <CartItem
                key={product.id}
                image={product.thumbnail}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                addItem={() => addToCart(product)}
              />
            )
          })}
        </ul>
        <div className='line'></div>
        <h3>Total: ${total}</h3>
        <div className="buttons">
          <button onClick={clearCart} className='clear_cart'>Clear cart</button>
          <button className='pay'>Pay</button>
        </div>
      </aside>}
      {total === 0 && <aside className='cart'>
        <p>No has agregado ningun producto a tu carrito</p>
      </aside>}
    </>
  )
}