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
  const plural = activeCount > 1 || activeCount === 0
  const text = plural ? 'tareas pendientes' : 'tarea pendiente'
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong> {text}
      </span>
      {
        completeCount > 0 && (
          <button 
            className="clear_completed"
            onClick={onClearCompleted}
          >
            x
          </button>
        )
      }
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  )
}