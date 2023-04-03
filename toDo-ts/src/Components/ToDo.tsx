import {type ToDo as ToDoType} from '../types'

type Props = ToDoType

export const ToDo: React.FC<Props> = ({ id, title, completed }) => {
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
      <button className="delete" onClick={deleteTask}></button>
    </div>
  )
}