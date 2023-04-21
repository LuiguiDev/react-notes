import {type ToDo as ToDoType} from '../types'
import '../Styles/todo.css'

interface Props extends ToDoType {
  handleRemove: (id: number) => void
}

export const ToDo: React.FC<Props> = ({ id, title, completed, handleRemove }) => {
  function deleteTask () {}

  return (
    <div className="view">
      <input 
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {}}
      />
      <label htmlFor="">{title}</label>
      <button className="delete" onClick={() => {handleRemove(id)}}>X</button>
    </div>
  )
}