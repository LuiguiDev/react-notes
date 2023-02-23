import { useCatImage } from "./Hooks/useCatImage";
import { useCatFact } from "./Hooks/useCatFact";
import { CatImage } from "./Modules/CatImage";

export function App () {
  const {fact, refreshFact, cropped} = useCatFact(); // Calling the useCatFact's returns
  const imageURL = useCatImage(fact, cropped);
  async function handleClick () {
    refreshFact();
  }

  return(
    <main>
      <h1>Kittens app</h1>
      {fact && <p>{fact}</p>}
      {imageURL &&
        <section className="Images">
          <CatImage fact={cropped}/>
        </section>
      }
      <button onClick={handleClick}>Generate new image</button>
    </main>
  )
}