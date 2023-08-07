import { useEffect, useState } from 'react'
import './styles/App.css'
import { Users } from './types'
import { UsersList } from './components/UsersList'

const App = () => {
  const [users, setUsers] = useState<Users>([])

  function getUsers () {
    const maxResults = 100

    fetch(`https://randomuser.me/api/?results=${maxResults}`)
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <UsersList  users={users} />
    </>
  )
}

export default App
