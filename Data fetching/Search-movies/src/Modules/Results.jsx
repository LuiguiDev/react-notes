import api from "../constants/apiObj"
import '../Styles/Results.css'

export function MovieList ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <div className="card" key={movie.id}>
            <div className="data">
              <li>{movie.title}</li>
              <span> | </span>
              <p>{movie.year}</p>
            </div>
            <img src={movie.image} alt={`Poster for ${movie.title}`} />
          </div>
        ))
      }
    </ul>
  )
}
export function NoResults () {

  return (
    <p>There are not results for this search</p>
  )
}

export function RenderResults ({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    hasMovies ? <MovieList movies={movies} /> : <NoResults />
  )
}
