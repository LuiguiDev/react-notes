import {TodoCompleted, TodoId, type ToDo as ToDoType} from '../types'
import '../Styles/todo.css'

interface Props extends ToDoType {
  // before: (id: number) now: ({ id }: TodoId). Import a type is a better practice for types that may change, 
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({id, completed}: Pick<ToDoType, 'id' | 'completed'>) => void
}

export const ToDo: React.FC<Props> = ({ id, title, completed, handleRemove, handleCompleted }) => {
  // This is an alternative to type the event manually (Recommended, but not used here)
  function typeEvent (event: React.ChangeEvent<HTMLInputElement>): void {
    // By doing this types target and checked are available for auto-complete
    event.target.checked
  }

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(event) => { // this event is already typed by ts
          handleCompleted({ id, completed: event.target.checked })
        }}
      />
      <label htmlFor="">{title}</label>
      <button className="delete" onClick={() => {handleRemove({ id })}}>X</button>
    </div>
  )
}