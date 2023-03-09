import { useState } from 'react'
import '../styles/filters.css'
import { products } from '../Mocks/products.json'

// To get access to the setFilters function we'll use prop drilling method, where we pass the props through the parent component to finally get the props here
export default function Filters ({ changeFiltersValue }) {
  const [maxPrice, setMaxPrice] = useState(2000)
  const categories = [...new Set(getCategories(products))]

  function getCategories (products) {
    return products.map(element => {
      return element.category
    })
  }
  function getKey () {
    return Math.floor(Math.random() * 100000)
  }
  function changeMaxPrice (e) {
    setMaxPrice(e.target.value)
    // something smell bad 
    // two sources of truth
    changeFiltersValue(prevState => ({
      ...prevState,
      maxPrice: e.target.value
    }))
  }

  function changeCategory (e) {
    changeFiltersValue(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <div className="container">
      <div className="filter">
        <label htmlFor="price">Filter by price</label>
        <input 
          id="price"
          type="range"
          value={maxPrice}
          min={100}
          max={2000}
          step={100}
          onChange={changeMaxPrice}
        />
        <span>Max price: {maxPrice}</span>
      </div>
      <div className="filter">
        <label htmlFor="category">Filter by category</label>
        <select id="category" onChange={changeCategory}>
          <option value="all">all</option>
          {
            categories.map(cat => (
              <option value={cat}>{cat}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}