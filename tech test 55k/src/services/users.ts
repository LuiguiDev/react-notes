export async function fetchUsers({pageParam = 1} : {pageParam?: number}) { 
  const path = 'https://randomuser.me/api/'
  const maxResults = 10
  const seed = 'luigui'

  return await fetch(`${path}?results=${maxResults}&seed=${seed}&page=${pageParam}`)
    .then(res => {
      if(!res.ok) throw new Error('Request failed')
      return res.json()
    })
    .then(data => {
      const currentPage = Number(data.info.page) + 1
      const nextCursor= currentPage > 3 ? undefined : currentPage
      return (
        {
          users: data.results,
          nextCursor
        }
      )
    })

}