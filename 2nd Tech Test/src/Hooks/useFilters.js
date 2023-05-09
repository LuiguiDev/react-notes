import { useContext } from 'react'
import { FiltersContext } from '../Context/filtersContext'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

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
  return { filterProducts, setFilters, filters }
}
