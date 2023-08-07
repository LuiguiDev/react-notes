import { Root, User } from "../types"

interface Props {
  users: User[]
}

export const UsersList = ({ users }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>County</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>
  )
}