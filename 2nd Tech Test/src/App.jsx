import './App.css'
import Header from './Modules/Header'
import RenderProducts from './Modules/Products'
import { products } from './Mocks/products.json'
import { Footer } from './Modules/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './Hooks/useFilters'

function App() {
  const {filterProducts, setFilters, filters} = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <h2>List of products</h2>
      <RenderProducts products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
