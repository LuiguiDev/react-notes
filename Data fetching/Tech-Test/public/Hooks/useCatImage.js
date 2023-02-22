// The difference between a function and a custume hook is custume hook can handle useState & useEffect
import { useState, useEffect } from "react";

const randomImageApi = 'https://cataas.com/cat/says/';

export function useCatImage ({fact}) { // 
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (!fact) return

    const factCroped = fact.split(' ', 3).join(' ')
    fetch(randomImageApi + factCroped + '?json=true')
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL('https://cataas.com/' + url)
      })
  }, [fact])

  return imageURL // We could return an object { imageUrl } in order to make it extensible for future added returns { imageURL, data, etc }
}