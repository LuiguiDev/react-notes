import { useMovies } from './Hooks/useMovies';
import { MovieList, RenderResults } from './Modules/Results';
import { Search } from './Modules/Search';
import { useCallback, useEffect, useState } from 'react';
import { useSearch } from './Hooks/useSearch';
import './app.css'
import debounce from 'just-debounce-it';

export default function App () {
  // useRef is ment to save data as useState, but when the value is updated the component don't gets re-rednered as in useState.
  const [sortByName, setSortByName] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);
  const { search, setSearch, error } = useSearch()
  const { movies, fetchMovies, loading } = useMovies(search, sortByName, sortByYear); // We can pass props to a hook

    // Every time the component re render the function runs again, so we have to save the function in order to it dont runs as the component

  const debounceMovies = useCallback(
      debounce(search => {
      console.log('Debounce working on it')
      fetchMovies(search)
    }, 500), [fetchMovies]
  )

  useEffect(() => {console.log(`new movies recived`)}, [movies])
  // Functions to save input data
  function getAllData (e) {
    e.preventDefault()
    fetchMovies(search)
  };
  function handleChange (e) {
    const newChange = e.target.value;
    setSearch(newChange)
    debounceMovies(newChange)
  };
  // Function to sort movies by name
  function handleSortByName () {
    setSortByName(!sortByName);
    setSortByYear(false)
  };
  function handleSortByYear () {
    setSortByYear(!sortByYear);
    setSortByName(false)
  };

  return (
    <div className='container'>
      <header>
        <form action="" onSubmit={getAllData}>
          <h1>Movie searcher</h1>
          <input name='inputOne' type="search" placeholder="Avengers, interstellar, ted" onChange={handleChange}/>
          <button type="submit" >Search</button>
          <div className="sortBy">
            <input type="checkbox" onChange={handleSortByName} checked={sortByName} />
            <label htmlFor="">Sort by name</label>

            <input type="checkbox" onChange={handleSortByYear} checked={sortByYear} />
            <label htmlFor="">Sort by year</label>
          </div>
          {
            error &&
            <p style={{color: 'red'}}>{error}</p>
          }
        </form>
      </header>
      
      
      <main>
        <h2>Results:</h2>
        {
          loading ? <p>Loading...</p> : <RenderResults movies={movies}/>

        }
      </main>
    </div>
  )
}