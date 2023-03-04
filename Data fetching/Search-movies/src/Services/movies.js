const KEY = '94be3e4c'

export const searchMovies = async ({ search }) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=94be3e4c`)
    const json = await response.json();
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (error) {
    throw new Error ('Failed to search movies')
  }
}