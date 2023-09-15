import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchUsers } from "../services/users"
import { Users } from "../types"


function useUsers() {
  const {isLoading, isError, data, refetch, fetchNextPage, hasNextPage} = useInfiniteQuery<{nextCursor?: number, users: Users}>(
    ['users'],
    fetchUsers,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor
    }
  )
  
  const users: Users = data?.pages.flatMap(page => page.users) ?? []
  
  return {
    isLoading,
    isError,
    users,
    refetch,
    fetchNextPage,
    hasNextPage
  }
}

export default useUsers