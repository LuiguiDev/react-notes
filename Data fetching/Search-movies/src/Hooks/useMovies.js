import { useRef, useState } from 'react';
import { searchMovies } from '../Services/movies';

export function useMovies (search, sortByName) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // useRef save search value even when the entire component, (in this case a hook) gets re-rendered 
  const previousSearch = useRef(search)
  // we can get the same thing by declare a cariable outside useMovies, but the value will remain among all the components that call the hook

  async function fetchMovies () {
/*     if (search === previousSearch.current) {
      console.log('Refuse to search the same thing again')
      return
    }
 */
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
  };
/*   const sortMovies = sortByName 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
 */
  const sortMovies = (sortByName, sortByYear) => {
    if (sortByName) {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title))
    }else if(sortByYear) {
      return [...movies].sort((a, b) => a.year.split('', 4).join('') - b.year.split('', 4).join(''))
    }else{
      return movies
    }
  }
  console.log({movies: sortMovies()})

  return { movies: sortMovies, fetchMovies, loading }
}