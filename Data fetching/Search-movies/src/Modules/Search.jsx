import { useEffect, useRef, useState } from "react"
import { useMovies } from "../Hooks/useMovies";
import { useSearch } from "../Hooks/useSearch";

export function Search () {
  const { search, setSearch, error } = useSearch()
  const { movies, fetchMovies } = useMovies(search)
  const [submited, setSubmited] = useState('')
  
  function getAllData (e) {
    e.preventDefault()
    fetchMovies(search)
  }
  function handleChange (e) {
    const newChange = e.target.value;
    setSearch(newChange)
  }

  return (
    <form action="" onSubmit={getAllData}>
      <h1>Movie searcher</h1>
      <input name='inputOne' type="search" placeholder="Avengers, interstellar, ted" onChange={handleChange}/>
      <button type="submit" >Search</button>
      {
        error &&
        <p style={{color: 'red'}}>{error}</p>
      }
    </form>
  )
}