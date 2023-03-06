import { products } from '../Mocks/products.json'
import '../styles/products.css'

export default function Products () {
  return (
    <>
      <h2>List of products</h2>
      <div className="list">
        {
          products.slice(0, 9).map(element => {
            return (
              <div className="card" key={element.id}>
                <img src={element.thumbnail} alt={element.title} />
                <p><strong>{element.title}</strong> - ${element.price}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}