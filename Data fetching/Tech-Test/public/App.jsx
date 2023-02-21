import { useState, useEffect } from "react"

const randomFactApi = 'https://catfact.ninja/fact'
const randomImageApi = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState();
  const [imageURL, setImageURL] = useState();

  let images = 0

  // Set random fact
  useEffect(() => {
    fetch(randomFactApi)
      .then(response => response.json())
      .then(data => {
        setFact(data.fact.split(' ', 3).join(' '))
      })
  }, [images]);

  // Set image url
  useEffect(() => {
    fetch(randomImageApi + fact + '?json=true')
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL('https://cataas.com/' + url)
      })
  }, [fact]) // this shows first an 'undefind' titled image and then loads the image with a fact

  function getNewImage () {
    images += 1;
    console.log(images)
  }

  return(
    <main>
      <h1>Kittens app</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Cat image that says \'${fact}\'`}/>}
      <button onClick={getNewImage}>Generate new image</button>
    </main>
  )
}