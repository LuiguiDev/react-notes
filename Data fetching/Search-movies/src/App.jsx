import { useMovies } from './Hooks/useMovies';
import { RenderResults } from './Modules/Results';
import { Search } from './Modules/Search';
import { useRef } from 'react';

export default function App () {
  const { movies: mappedMovies } = useMovies();
  // useRef is ment to save data as useState, but when the value is updated the component don't gets re-rednered as in useState.
  

  return (
    <div className='container'>
      <header>
        <Search/>
      </header>

      <main>
        <h2>Results:</h2>
        <RenderResults movies={mappedMovies} />
      </main>
    </div>
  )
}