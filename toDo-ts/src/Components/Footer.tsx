import { Filters } from "./Filters"

export const Footer: React.FC<Props> = ({
  activeCount,
  toDos,
  onClearCompleted
}) => {
  return (
    <footer>
      <span>
        <strong>{toDos.lenght}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={() => {}}
        onFilterChange={() => {}}
      />
    </footer>
  )
}