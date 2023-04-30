// import shoud declare import {type type} or import type {type}
import {TodoId, type ListOfToDos} from '../types'
import {type ToDo as ToDoType} from '../types'
import { ToDo } from './ToDo'

interface Props {
  toDos: ListOfToDos
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({id, completed}: Pick<ToDoType, 'id' | 'completed'>) => void
}

// React.FC allow us to declare paremeter's types with React.FC<Props>
export const ToDoList: React.FC<Props> = ({toDos, handleRemove, handleCompleted}) => {
  return (
    <ul className='todo-list'>
      {toDos.map((task) => {
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
              handleCompleted={handleCompleted}
            />
          </li>
        )
      })}
    </ul>
  )
}