import { useState, useEffect } from "react";
import { getNewImage } from '../Services/images'

export function useCatImage (cropped) {
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (!cropped) return
    
    getNewImage(cropped).then(url => setImageURL(url))

  }, [cropped])

  return imageURL // We could return an object { imageUrl } in order to make it extensible for future added returns { imageURL, data, etc }
}