import { useCart } from '../Hooks/useCart'
import '../styles/products.css'

function Products ({products}) {
  const { cart, addToCart, removeFromCart } = useCart();

  function checkProductInCart (product) {
    return cart.some(item => item.id === product.id)
  }

  return (
    <>
      <ul className="list">
        {
          products.slice(0, 9).map(element => {
            const alreadyInCart = checkProductInCart(element)

            return (
              <li className="card" key={element.id}>
                <img src={element.thumbnail} alt={element.title} />
                <p><strong>{element.title}</strong> - ${element.price}</p>
                <button onClick={() => {
                  alreadyInCart
                    ? removeFromCart(element)
                    : addToCart(element)
                  }}
                >
                  {
                    alreadyInCart
                      ? 'Remove from cart'
                      : 'Add to cart'
                  }
                </button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

function NotFound () {
  return (
    <p>There aren't products with those filters</p>
  )
}

export default function RenderProducts ({ products }) {
  if (products.length > 0) {
    return <Products products={products} />
  }else {
    return <NotFound />
  }
}