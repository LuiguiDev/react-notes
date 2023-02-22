import { useState, useEffect } from "react"
import { getNewFact } from "./facts";
import { useCatImage } from "./Hooks/useCatImage";

export function App () {

  const [fact, setFact] = useState();
  const imageURL = useCatImage({ fact });
  
  useEffect(() => {
    getNewFact().then(newFact => setFact(newFact))
  },[])

  function handleClick () {
    getNewFact().then(setFact)
  }
  return(
    <main>
      <h1>Kittens app</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Cat image that says \'${fact}\'`}/>}
      <button onClick={handleClick}>Generate new image</button>
    </main>
  )
}