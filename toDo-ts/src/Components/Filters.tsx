import { FILTERS_BUTTONS, TODO_FILTERS, filterType } from "../consts"

interface Props {
  filterSelected: filterType
  onFilterChange: (filter: filterType) => void
}

export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
  return (
    <ul className="filters">
      
    </ul>
  )
}