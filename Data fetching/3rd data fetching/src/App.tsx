import { useEffect, useState } from 'react'
import './App.css'
import { getFact } from './services/fact'
import { useFact } from './hooks/useImage'

// both getFact working, just different ways to get the same result
/* async function getFactAsync () {
  try {
    const response = await fetch('')

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }
    const json = await response.json()

    return json
  } catch (error) {
    throw new Error('Failed to search birds')
  }
}
 */

function App () {
  const [fact, setFact] = useState('')
  const { imageULR } = useFact({ fact })

  useEffect(() => {
    getFact().then(newFact => setFact(newFact))
  }, [])

  function manageClick () {
    getFact().then(fact => setFact(fact))
  }

  return (
    <main>
      <h1>Cat facts</h1>
      {fact && <p>{fact}</p>}
      {imageULR && <img src={imageULR} alt='Kitten saying hi' />}
      <button onClick={manageClick}>Reaload</button>
    </main>
  )
}

export default App
