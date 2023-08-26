import { useEffect, useState, useRef, useMemo } from 'react'
import './styles/App.css'
import { Id, SortBy,  User,  Users } from './types.d'
import { UsersList } from './components/UsersList'

const App = () => {
  const [users, setUsers] = useState<Users>([])
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sortingBy, setSortingBy] = useState<SortBy>(SortBy.NONE)
  const [searchedCountry, setSearchedCountry] = useState<string | null>(null)
  const originalUsers = useRef<Users>([])

  function getUsers() {
    const maxResults = 20

    fetch(`https://randomuser.me/api/?results=${maxResults}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch(error => console.log(error))
  }

  function toggleShowColors() {
    setShowColors(!showColors)
  }

  // this funciton was mean to use in a separete button from the table
/*   function toggleSortByCountry() {
    const newSortValue = sortingBy === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    console.log(newSortValue)
    setSortingBy(newSortValue)
  }
 */
  function deleteUser(id: Id) {
    const usersFiltered = users.filter(user => {
      return user.id !== id
    })
    setUsers(usersFiltered)
  }

  function resetUsers() {
    setUsers(originalUsers.current)
  }

  function handleChangeSort(newSort: SortBy) {
    if (newSort === sortingBy) {
      setSortingBy(SortBy.NONE)
    }else{
      setSortingBy(newSort)
    }
  }

  function getSortedUsers(findedUsers: Users): Users {
    if (sortingBy === SortBy.NONE) return findedUsers

    const compareProperties: Record<string, (user: User) => any>  = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST_NAME]: user => user.name.last
    }
    const extractProperty = compareProperties[sortingBy]
    const sorted = findedUsers.toSorted((a, b) => {
      return extractProperty(a).localeCompare(extractProperty(b))
    })

    return sorted
  }

  function findUsersByCountry(): Users {
    const findedByCountry = searchedCountry
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(searchedCountry.toLowerCase())
      })
      : users

    return findedByCountry
  }
  
  const findedUsers: Users = useMemo(() => findUsersByCountry(), [users, searchedCountry]) // input search
  const sortedUsers: Users = useMemo(() => getSortedUsers(findedUsers), [findedUsers, sortingBy]) // A-Z


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <header>
        <button onClick={toggleShowColors}>Show colors</button>
        <button onClick={resetUsers}>Reset users</button>
        <input
          type="text"
          placeholder='Ex: Germany'
          onChange={(e) => {setSearchedCountry(e.target.value)}}
        />
      </header>
      <main>
        <UsersList
          users={sortedUsers}
          showColors={showColors}
          sortingBy={sortingBy}
          handleChangeSort={handleChangeSort}
          deleteUser={deleteUser}
        />
      </main>
    </>
  )
}

export default App
