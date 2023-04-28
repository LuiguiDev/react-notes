import { FilterType } from "../types"
import { Filters } from "./Filters"

interface Props {
  activeCount: number
  completeCount: number
  filterSelected: FilterType
  handleFilterChange: (filter: FilterType) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completeCount = 0,
  onClearCompleted,
  filterSelected,
  handleFilterChange
}) => {
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  )
}