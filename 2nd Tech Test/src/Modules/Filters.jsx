import '../styles/filters.css'

export default function Filters () {
  return (
    <div className="container">
      <div className="filter">
        <label htmlFor="price">Filter by price</label>
        <input id="price" type="range" min={0} max={1000} />
      </div>
      <div className="filter">
        <label htmlFor="price">Filter by category</label>
        <select id="category"></select>
      </div>
    </div>
  )
}