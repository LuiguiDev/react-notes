import { useRef, useState } from 'react';
import { searchMovies } from '../Services/movies';

export function useMovies (search) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // useRef save search value even when the entire component, (in this case a hook) gets re-rendered 
  const previousSearch = useRef(search)
  // we can get the same thing by declare a cariable outside useMovies, but the 

  async function fetchMovies () {
    if (search === previousSearch.current) {
      console.log('Refuse to search the same thing again')
      return
    }

    try {
      setLoading(true);
      previousSearch.current = search
      const movies = await searchMovies({ search });
      setMovies(movies);
    } catch (error) {
      throw new Error (error.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, fetchMovies, loading }
}