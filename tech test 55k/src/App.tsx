import { useEffect, useState, useRef } from 'react'
import './styles/App.css'
import { Id, Users } from './types'
import { UsersList } from './components/UsersList'

const App = () => {
  const [users, setUsers] = useState<Users>([])
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sortUsers, setSortUsers] = useState<boolean>(false)
  const originalUsers = useRef<Users>([])

  function getUsers() {
    const maxResults = 100

    fetch(`https://randomuser.me/api/?results=${maxResults}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch(error => console.log(error))
  }
  function toggleshowColors() {
    setShowColors(!showColors)
  }
  function toggleSortUsers() {
    setSortUsers(prevState => !prevState)
  }
  function deleteUser(id: Id) {
    const usersFiltered = users.filter(user => {
      return user.id !== id
    })
    setUsers(usersFiltered)
  }
  function resetUsers() {
    setUsers(originalUsers.current)
  }

  // toSorted doesn't change the original array, if you use .sort you must use destructuring assignment [...users], but since TS havent added the type .toSorted, you should type it.
  const sortedUsers = sortUsers
    ? users.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : users


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <header>
        <button onClick={toggleshowColors}>Show colors</button>
        <button onClick={toggleSortUsers}>Sort by country</button>
        <button onClick={resetUsers}>Reset users</button>
      </header>
      <main>
        <UsersList
          users={sortedUsers}
          showColors={showColors}
          sortUsers={sortUsers}
          deleteUser={deleteUser}
        />
      </main>
    </>
  )
}

export default App
