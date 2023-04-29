import { useState } from 'react'
import './Styles/App.css'
import { ToDoList } from './Components/ToDoList'
import { TodoId } from './types'
import { ToDo, FilterType } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './Components/Footer'

const mockToDos = [
  {
    id: 1,
    title: 'This is a ling text just to test the close button',
    completed: true
  },
  {
    id: 2,
    title: 'task 2',
    completed: true
  },
  {
    id: 3,
    title: 'task 3',
    completed: false
  }
]

// options to add the return type:
//   - const App = (): JSX.Element => {}
//   - const App: React.FC = () => {} // Functional Component
function App():JSX.Element {
  const [toDos, setToDos] = useState(mockToDos) // TS already asing data types by this point by inference, its a good practice use this types assigned automatically because you dont have to update them when they change
  const [filterSelected, setFilterSelected] = useState<FilterType>(TODO_FILTERS.ALL) // This is a generic state we don´t save an specific value but can be any of TODO_FILTERS

  function handleRemove ({ id }: TodoId) {
    const newTodos = toDos.filter(element => element.id != id)
    setToDos(newTodos)
  }
  // If we have two or more props we type them using Pick where "|" means "and". "void" refers a function type with no returns
  // We can also type the props like: ({id, comp}: {id: TodoId, comp: TodoComp})
  function handleCompleted (
      {id, completed}: Pick<ToDo, 'id' | 'completed'>
    ): void {
      const newToDos = toDos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })

      setToDos(newToDos)
  }
  function handleFilterChange (filter: FilterType) {
    setFilterSelected(filter)
  }

  const activeCount = toDos.filter(toDo => !toDo.completed).length
  const completedCount = toDos.filter(toDo => toDo.completed).length

  return (
    <div className='todoapp'>
      <h1>ToDo list with <span className='ts'>TypeScript</span></h1>
      <div className='todos'>
        <ToDoList 
          toDos={toDos}
          handleRemove={handleRemove}
          handleCompleted={handleCompleted}
        />
        <Footer
          activeCount={activeCount}
          completeCount={completedCount}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
          onClearCompleted={() => {}}
        />
      </div>
    </div>
  )
}

export default App
