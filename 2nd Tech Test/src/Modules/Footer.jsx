import { useCart } from '../Hooks/useCart'
import '../styles/footer.css'

export function Footer () {
  const { cart } = useCart();

  return (
    <footer className='footer'>
        {
          JSON.stringify(cart, null, 2)
        }
    </footer>
  )
}