import found from '../api/found.json';

export function useMovies () {
  const movies = found.Search;
  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    image: movie.Poster,
    year: movie.Year
  }))

  return { movies: mappedMovies }
}