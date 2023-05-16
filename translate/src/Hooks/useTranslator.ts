import { AUTO_LANGUAGE } from '../consts'
import { FromLanguageType, LanguageType, actionType, stateType } from '../types'
import { useReducer } from 'react'

// useReducer receives an initialState and a reducer, returns a state and a dispatch, every time and action is called is dispatched, and the reducer generetes a new state

// 1.- Create a initial state
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'na',
  fromText: '',
  result: '',
  loading: false
}

// 2.- Create a reducer
function reducer (state: stateType, action: actionType) {
  const { type } = action

  if (type === 'interchange_languages') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if (type === 'set_fromLanguage') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }
  if (type === 'set_toLanguage') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }
  if (type === 'set_fromText') {
    return {
      ...state,
      fromText: action.payload,
      loading: true,
      result: '' // Restart the search every time there is a new input, even if only one character changed
    }
  }
  if (type === 'set_result') {
    return {
      ...state,
      result: action.payload,
      loading: false
    }
  }


  return state // reducer must return new state, if we dont have contemplated the case, we retrn the same state
}

// 3.- Use hook useReducer

export function useTranslator () {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  // 4.- Create functions to dispatch the acctions in order to avoid send the dispatch directly
  const interchangeLanguages = () => {
    dispatch({type: 'interchange_languages'})
  }
  const setFromLanguage = (payload: FromLanguageType) => {
    dispatch({type: 'set_fromLanguage', payload})
  }
  const setToLanguage = (payload: LanguageType) => {
    dispatch({type: 'set_toLanguage', payload})
  }
  const setResult = (payload: string) => {
    dispatch({type: 'set_result', payload})
  }
  const setFromText = (payload: string) => {
    dispatch({type: 'set_fromText', payload})
  }

  return {
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
  }
}