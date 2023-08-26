import { Id, SortBy, User } from "../types.d"

interface Props {
  users: User[],
  showColors: boolean,
  sortingBy: SortBy,
  handleChangeSort: (newSort: SortBy) => void
  deleteUser: (id: Id) => void,
}

export const UsersList = ({ users, showColors, sortingBy, handleChangeSort, deleteUser }: Props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th onClick={() => handleChangeSort(SortBy.NAME)}>Name</th>
          <th onClick={() => handleChangeSort(SortBy.LAST_NAME)}>Last Name</th>
          <th onClick={() => handleChangeSort(SortBy.COUNTRY)}>County</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {
          users.map((user, index) => {
            const isOdd = index % 2 === 0
            const color = isOdd ? '#333' : '#555'
            const isActive = showColors ? color : 'transparent'  
            return (
              <tr style={{backgroundColor: isActive}} key={user.email}>
                <td> <img src={user.picture.thumbnail} alt="Profile picture" /></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}