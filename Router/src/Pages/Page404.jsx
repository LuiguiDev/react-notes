import { Link } from "../Components/Link"

export function Page404 () {
  return (
    <>
      <h1>404 Not found</h1>
      <p>Try searching something else</p>
      <Link to={'/'}>Back to main page</Link>
    </>
  )
}