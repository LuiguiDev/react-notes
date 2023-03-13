import './App.css'
import Header from './Modules/Header'
import RenderProducts from './Modules/Products'
import { products } from './Mocks/products.json'
import { Footer } from './Modules/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './Hooks/useFilters'
import { Cart } from './Modules/Cart'
import { CartContext, CartProvider } from './Context/cartContext'

function App() {
  const {filterProducts} = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <h2>List of products</h2>
      <RenderProducts products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
