import { useState, useMemo } from 'react'
import './styles/App.css'
import { SortBy,  User,  Users } from './types.d'
import { UsersList } from './components/UsersList'
import React from 'react'
import useUsers from './hooks/useUsers'

const App = () => {
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sortingBy, setSortingBy] = useState<SortBy>(SortBy.NONE)
  const [searchedCountry, setSearchedCountry] = useState<string | null>(null)
  const {isLoading, isError, users, refetch, fetchNextPage, hasNextPage} = useUsers()

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
  function deleteUser() {}

  async function resetUsers() {
    await refetch()
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
        
        {isLoading && <h2>Loading...</h2>}

        {isError && <h2>Something went wrong</h2>}

        {!isLoading && users.length === 0 && <h2>There aren't any users</h2>}

        {hasNextPage && <button onClick={() => fetchNextPage()}>Load more results</button>}

        {!hasNextPage && <p>End of results</p>}
      </main>
    </>
  )
}

export default App
