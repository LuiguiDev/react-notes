import { useEffect, useRef, useState } from "react";

export function useSearch () {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true)
  
  // Add validations
  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }
    if (search === ''){
      setError('You havent write anything')
      return
    }
    if(search.toLowerCase() === 'fuck' || search.toLowerCase() === 'porn' || search.toLowerCase() === 'gore'){
      setError('Can\'t search mature content')
      return
    }
    if(search.length < 2){
      setError('There isnt a movie like that')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
