import { useCart } from '../Hooks/useCart'
import '../styles/footer.css'

export function Footer () {
  const { cart } = useCart();

  return (
    <footer className='footer'>
      <h5>Luigui dev</h5>
    </footer>
  )
}