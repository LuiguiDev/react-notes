import { useState } from 'react'
import './App.css'

async function getFactAsync () {
  const api = 'https://catfact.ninja/fact'

  try {
    const response = await fetch(api)

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const json = await response.json()

    console.log(json)
  } catch (error) {
    throw new Error('Failed to search birds')
  }
}

function getFact () {
  const api = 'https://catfact.ninja/fact'

  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      return response.json()
    })
    .then((data) => console.log(data))
    .catch(error => console.log(error))
}

getFactAsync() // both getFact working, just different ways to get the same result

function App () {
  return (
    <h1>Birds</h1>
  )
}

export default App
