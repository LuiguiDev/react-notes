import { FilterType } from "../types"
import { Filters } from "./Filters"
import '../Styles/footer.css'

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
  const plural = activeCount > 1
  const text = plural ? 'tareas pendientes' : 'tarea pendiente'
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong> {text}
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  )
}