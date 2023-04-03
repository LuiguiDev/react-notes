import { useState } from 'react'
import './Styles/App.css'
import { ToDoList } from './Components/ToDoList'

const mockToDos = [
  {
    id: 1,
    title: 'task 1',
    completed: false
  },
  {
    id: 2,
    title: 'task 2',
    completed: false
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

  return (
    <>
      <h1>ToDo List with typescript</h1>
      <div className='toDoApp'>
        <ToDoList toDos={toDos} />
      </div>
    </>
  )
}

export default App
