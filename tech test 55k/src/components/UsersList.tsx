import { Root, User } from "../types"

interface Props {
  users: User[],
  showColors: boolean,
  sortUsers: boolean
}

export const UsersList = ({ users, showColors, sortUsers }: Props) => {

  const sortedUsers = [...users].sort((a, b) => {
    return a.location.country.localeCompare(b.location.country)
  })
  const showedUsers = sortUsers ? sortedUsers : users

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>County</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {
          showedUsers.map((user, index) => {
            const isOdd = index % 2 === 0
            const color = isOdd ? '#333' : '#555'
            const isActive = showColors ? color : 'transparent'  
            return (
              <tr style={{backgroundColor: isActive}}>
                <td> <img src={user.picture.thumbnail} alt="Profile picture" /></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td><button>Delete</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}