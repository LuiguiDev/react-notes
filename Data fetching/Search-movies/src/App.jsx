import found from './api/found.json'
import notFound from './api/not-found.json'

export default function App () {

  return (
    <div>
      <header>
        <form action="">
          <label htmlFor="">Write a movie title</label>
          <input type="search" placeholder="Avengers, interstellar, ted" />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <h2>Search results</h2>
        {
          found.Response &&
          <div>
            <p>{found.Title}</p>
            <img src={found.Poster} alt={`Film poster for ${found.Title}`} />
          </div>
        }
      </main>
    </div>
  )
}