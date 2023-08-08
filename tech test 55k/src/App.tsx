import { useEffect, useState } from 'react'
import './styles/App.css'
import { Users } from './types'
import { UsersList } from './components/UsersList'

const App = () => {
  const [users, setUsers] = useState<Users>([])
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sortUsers, setSortUsers] = useState<boolean>(false)

  function getUsers() {
    const maxResults = 100

    fetch(`https://randomuser.me/api/?results=${maxResults}`)
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(error => console.log(error))
  }
  function toggleshowColors() {
    setShowColors(!showColors)
  }
  function toggleSortUsers() {
    setSortUsers(prevState => !prevState)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <header>
        <button onClick={toggleshowColors}>Show colors</button>
        <button onClick={toggleSortUsers}>Sort by country</button>
      </header>
      <main>
        <UsersList
          users={users}
          showColors={showColors}
          sortUsers={sortUsers}
        />
      </main>
    </>
  )
}

export default App
