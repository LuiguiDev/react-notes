// import shoud declare import {type type} or import type {type}
import {type ListOfToDos} from '../types'
import { ToDo } from './ToDo'

interface Props {
  toDos: ListOfToDos
  handleRemove: (id: number) => void
}

// React.FC allow us to declare paremeter's types with React.FC<Props>
export const ToDoList: React.FC<Props> = ({toDos, handleRemove}) => {
  return (
    <ul className='todo-list'>
      {toDos.map((task) => {
        console.log(task.completed)
        return (
          <li 
            key={task.id}
            className={task.completed ? 'completed' : ''}
          >
            <ToDo
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              handleRemove={handleRemove}
            />
          </li>
        )
      })}
    </ul>
  )
}