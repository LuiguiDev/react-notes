import { useCatImage } from "../Hooks/useCatImage"

export function CatImage ({ fact }) {
  const imageURL = useCatImage(fact)

  return(
    <img src={imageURL} alt={`Cat image that says ${fact}`} />
  )
}