const inputRef = useRef()

function handleClick (e) {
  // useRef only calls one element so we have to have one useRef for each element we need to validate, to call multiple inputs we use FormData instead
 e.preventDefault()
 // The syntax below is equivalent to get an element by query / id
 const element = inputRef.current;
 const value = element.value;
}
function handleSubmit (e) { 
 // When we don't use react it's called not controlled calidation

 // For a single input
 e.preventDefault();
 const data = new FormData(e.target)

 console.log(data.get('inputOne'))
}
function getAllData (e) {
 // If we have multiple inputs within a form we can use the next code to get all the values
 e.preventDefault();
 const fields = Object.fromEntries(new FormData(e.target)) // The inputs must be named
 // const {inputName} = " " <- To get an expecifict input from the object
 fetchMovies(fields.inputOne)
}
// When we use useState we said controlled validation, the disavantage with this is that everytime the value changes, the compnent is rendered as we see in useSearch hook
function handleChange (e) {
 const newChange = e.target.value;
 setQuery(newChange);
}

// Inputs can by called by a name
<input name='inputOne' type="search" placeholder="Avengers, interstellar, ted" onChange={handleChange}/>
