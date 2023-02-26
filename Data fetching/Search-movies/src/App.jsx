import { useMovies } from './Hooks/useMovies';
import { RenderResults } from './Modules/Results';
import { Search } from './Modules/Search';

export default function App () {
  const { movies: mappedMovies } = useMovies();

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