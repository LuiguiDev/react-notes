import { useState } from 'react';
import found from '../api/found.json';

const KEY = '94be3e4c'


export function useMovies (search) {
  const [moviesResponse, setMoviesResponse] = useState([]);
  const movies = moviesResponse.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    image: movie.Poster,
    year: movie.Year
  }))
  
  function fetchMovies () {
    if (search) {
      fetch(`https://www.omdbapi.com/?s=${search}&apikey=${KEY}`)
        .then(res => res.json())
        .then(data => setMoviesResponse(data))
      console.log(moviesResponse)
    }
  }

  return { movies: mappedMovies, fetchMovies }
}