import { useDebugValue, useEffect, useState } from 'react'
import './App.css'

const factApi = 'https://catfact.ninja/fact'

// both getFact working, just different ways to get the same result
async function getFactAsync () {
  try {
    const response = await fetch(api)

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }
    const json = await response.json()

    return json
  } catch (error) {
    throw new Error('Failed to search birds')
  }
}

function App () {
  const [fact, setFact] = useState('')
  const [imageULR, setImageURL] = useState('')

  function getFact () {
    fetch(factApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
      .catch(error => console.log(error))
  }
  function getImage (word: string) {
    fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`)
      .then(data => data.json())
      .then(json => {
        const src = json.url
        const url = `https://cataas.com${src}`
        setImageURL(url)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getFact()
    getImage('hi')
  }, [])

  return (
    <main>
      <h1>Cat facts</h1>
      {fact && <p>{fact}</p>}
      {imageULR && <img src={imageULR} alt='Kitten saying hi' />}
    </main>
  )
}

export default App
