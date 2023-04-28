import { FILTERS_BUTTONS } from "../consts"
import { FilterType } from "../types"

interface Props {
  filterSelected: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a 
                className={className}
                href={href}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterType)
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