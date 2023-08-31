import { useEffect, useState, useRef, useMemo } from 'react'
import './styles/App.css'
import { Id, SortBy,  User,  Users } from './types.d'
import { UsersList } from './components/UsersList'

async function fetchUsers(page: number) { 
  const path = 'https://randomuser.me/api/'
  const maxResults = 10
  const seed = 'luigui'


  return await fetch(`${path}?results=${maxResults}&seed=${seed}&page=${page}`)
    .then(res => {
      if(!res.ok) throw new Error('Request failed')
      return res.json()
    })
    .then(data => data.results)

}

const App = () => {
  const [users, setUsers] = useState<Users>([])
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sortingBy, setSortingBy] = useState<SortBy>(SortBy.NONE)
  const [searchedCountry, setSearchedCountry] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(false)
  const originalUsers = useRef<Users>([])

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
    fetchUsers(currentPage)
      .then(data => {
        setUsers(prevState => prevState.concat(data))
        originalUsers.current = data
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

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
        {users.length > 0 &&
          <UsersList
            users={sortedUsers}
            showColors={showColors}
            sortingBy={sortingBy}
            handleChangeSort={handleChangeSort}
            deleteUser={deleteUser}
          />
        }
        
        {loading && <h2>Loading...</h2>}

        {error && <h2>Something went wrong</h2>}

        {!loading && users.length === 0 && <h2>There aren't any users</h2>}

        <button onClick={() => setCurrentPage(currentPage + 1)}>Load more results</button>
      </main>
    </>
  )
}

export default App
