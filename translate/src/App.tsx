import { useReducer } from 'react'
import './App.css'
import { actionType, stateType } from './types'
import { useTranslator } from './Hooks/useTranslator'

function App() {
  // Use hook useReducer
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useTranslator()

  console.log(fromLanguage, toLanguage)
  return (
    <div className="App">
      <h1>Nahuatl translate</h1>
      <p>From: {fromLanguage}</p>
      <p>To: {toLanguage}</p>
      <button onClick={() => {
        interchangeLanguages()
      }}>Switch languages</button>
    </div>
  )
}

export default App
