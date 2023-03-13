import '../styles/cart.css'
import { useId } from "react";

export function Cart () {
  const cartCeckboxId = useId()

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

      <aside className='cart'>
        <ul>
          <li>
            <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Iphone" />
            <div>
              <strong>Iphone</strong> - $1499
            </div>
          </li>
        </ul>

        <footer>
          <small>Qty: 1</small>
        </footer>
      </aside>
    </>
  )
}