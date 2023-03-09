import { useState } from 'react'
import './App.css'
import Header from './Modules/Header'
import RenderProducts from './Modules/Products'
import { products } from './Mocks/products.json'

function App() {
  const [filters, setFilters] = useState({
    category:'all',
    maxPrice: 2000
  })

  function filterProducts (products) {
    return products.filter(product => {
      return (
        product.price <= filters.maxPrice && (
          filters.category === 'all' ||
          product.category === filters.category 
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFiltersValue={setFilters} />
      <RenderProducts products={filteredProducts} />
    </>
  )
}

export default App
