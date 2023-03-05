import api from "../constants/apiObj"
import '../Styles/Results.css'
import found from '../api/found.json';

export function MovieList ({ movies }) {
  return (
    <ul className="movie_list">
      {
        movies.map(movie => (
          <div key={movie.id} className="card">
            <div className="data">
              <li>{movie.title}</li>
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
  let hasMovies = movies?.length > 0 

  return(
    hasMovies ? <MovieList movies ={movies} /> : <NoResults />
  )
}
