import { useId, useState } from 'react'
import '../styles/filters.css'
import { products } from '../Mocks/products.json'
import { useFilters } from '../Hooks/useFilters';

// To get access to the setFilters function we'll use prop drilling method, where we pass the props through the parent component to finally get the props here
export default function Filters () {
  const {filters, setFilters} = useFilters()
  // const [maxPrice, setMaxPrice] = useState(2000);
  const categories = [...new Set(getCategories(products))];
  const priceFilterId = useId();
  const categoryFilterId = useId();
  // Above I use the useId hook to create exclusive ids for the HTML elements, it is not recommended for a list of elements generated with .map

  function getCategories (products) {
    return products.map(element => {
      return element.category
    })
  }
  function changeMaxPrice (e) {
    // something smell bad 
    // two sources of truth, couse we declare states for maxPrice and categories despite we have a global context with those values 
    // setMaxPrice(e.target.value) <-- Previous code with local state instead of the global context
    setFilters(prevState => ({
      ...prevState,
      maxPrice: e.target.value
    }))
  }
  function changeCategory (e) {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <div className="container">
      <div className="filter">
        <label htmlFor={priceFilterId}>Filter by price</label>
        <input 
          id={priceFilterId}
          type="range"
          value={filters.maxPrice}
          min={100}
          max={2000}
          step={100}
          onChange={changeMaxPrice}
        />
        <span>Max price: {filters.maxPrice}</span>
      </div>
      <div className="filter">
        <label htmlFor={categoryFilterId} >Filter by category</label>
        <select id={categoryFilterId} onChange={changeCategory}>
          <option value="all">all</option>
          {
            categories.map(category => (
              <option value={category}>{category}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}