import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../Services/movies';

export function useMovies (search, sortByName, sortByYear) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // useRef save search value even when the entire component, (in this case a hook) gets re-rendered 
  const previousSearch = useRef(search)
  // we can get the same thing by declare a cariable outside useMovies, but the value will remain among all the components that call the hook

  // There is a hook that allow us to work with functions using useMemo, its called useCallback and works exactly like useMemo, but it dosn't need a callback but the function directly.
  // In order to avoid a race contidion, we'll use a debounce.
  const fetchMovies = useMemo(() => {
    return async (search) => {
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
  }, [])
  /*const fetchMovies = useCallback(async(search) => {
    code
  })
*/
  const sortMovies = useMemo(() => {
      if (sortByName) {
        return [...movies].sort((a, b) => a.title.localeCompare(b.title))
      }else if(sortByYear) {
        return [...movies].sort((a, b) => a.year.split('', 4).join('') - b.year.split('', 4).join(''))
      }else{
        return movies
      }
  }, [sortByName, sortByYear, movies])
  
  return { movies: sortMovies, fetchMovies, loading }
}