import { useState, useEffect } from 'react'

interface Props {
  fact: string
}

export function useFact ({ fact }: Props) {
  const word = 'Hi'
  const [imageULR, setImageURL] = useState('')

  useEffect(() => {
    if (!fact) return

    fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`)
      .then(data => data.json())
      .then(json => {
        const src = json.url
        const url = `https://cataas.com${src}`
        setImageURL(url)
      })
      .catch(error => console.log(error))
  }, [fact])

  return { imageULR }
}
