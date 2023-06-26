import { useState } from 'react'
import './App.css'

async function getBirds (region: string) {
  const api = `https://api.ebird.org/v2/product/spplist/${region}`
  const token = 't2rrv9ecm0ac'
  const headers = {headers: {'X-eBirdApiToken': token}}

  try {
    const response = await fetch(api, headers)
    const json = await response.json()
    const data = json

    console.log(data)
  } catch (error) {
    throw new Error("Failed to search birds");
    
  }
}

getBirds('MX')

function App() {
  return (
    <h1>Birds</h1>
  )
}

export default App
