import { FILTERS_BUTTONS } from "../consts"
import { FilterType } from "../types"
import '../Styles/filters.css'
import { useContext } from "react"
import { FiltersContext, FiltersProvider } from "../Context/FiltersContext"

interface Props {
  filterSelected: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const Filters = () => {
  const data = useContext(FiltersProvider)

  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === data.filterSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key} className="filters_btns">
              <a 
                className={className}
                href={href}
                onClick={(event) => {
                  event.preventDefault()
                  set
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}