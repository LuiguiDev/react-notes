import { useEffect, useRef, useState } from "react"

export function Search () {
  const inputRef = useRef()
  
  function handleClick (e) {
    e.preventDefault()
    // The syntax below is equivalent to get an element by query / id
    const element = inputRef.current;
    const value = element.value;

    console.log(value)
  } // useRef only calls one element so we have to have one useRef for each element we need to validate, to call multiple inputs we use FormData instead

  // When we don't use react it's called not controlled calidation
  function handleSubmit (e) { // For a single input
    e.preventDefault();
    const data = new FormData(e.target)

    console.log(data.get('inputOne'))
  }

  // If we have multiple inputs within a form we can use the next code to get all the values
  function getAllData (e) {
    e.preventDefault();

    const fields = Object.fromEntries(new FormData(e.target)) // The inputs must be named
    // const {inputName} = " " <- To get an expecifict input from the object

    console.log(fields)
  }

  // When we use useState we said controlled validation, the disavantage with this is that everytime the value changes, the compnent is rendered
  const [query, setQuery] = useState('');

  function handleChange (e) {
    const newChange = e.target.value;
    setQuery(newChange);
    console.log(newChange)
  }

  // Add validations
  const [error, setError] = useState();

  useEffect(() => {
    if (query === ''){
      setError('You havent write anything')
      return
    }
    if(query.match(fuck)){
      setError('Can\'t search mature content')
      return
    }
    if(query.length < 2){
      setError('There isnt a movie like that')
      return
    }

    setError(null)
  }, [query])


  return (
    <form action="" onSubmit={getAllData}>
      <h1>Movie searcher</h1>
      <input name='inputOne' type="search" placeholder="Avengers, interstellar, ted" onChange={handleChange}/>
      <input name="InputTwo" type="text" placeholder="Year"/>
      <button type="submit" >Search</button>
      {
        error &&
        <p style={{color: 'red'}}>{error}</p>
      }
    </form>
  )
}