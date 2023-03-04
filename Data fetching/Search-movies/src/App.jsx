import { useMovies } from './Hooks/useMovies';
import { MovieList, RenderResults } from './Modules/Results';
import { Search } from './Modules/Search';
import { useEffect, useRef } from 'react';
import { useSearch } from './Hooks/useSearch';

export default function App () {
  // useRef is ment to save data as useState, but when the value is updated the component don't gets re-rednered as in useState.
  const { search, setSearch, error } = useSearch()
  const { movies, fetchMovies, loading } = useMovies(search);
  
  function getAllData (e) {
    e.preventDefault()
    fetchMovies()
  }
  function handleChange (e) {
    const newChange = e.target.value;
    setSearch(newChange)
  }
  
  return (
    <div className='container'>
      <header>
        <form action="" onSubmit={getAllData}>
          <h1>Movie searcher</h1>
          <input name='inputOne' type="search" placeholder="Avengers, interstellar, ted" onChange={handleChange}/>
          <button type="submit" >Search</button>
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