import Filters from "./Filters";

export default function Header ({ changeFiltersValue }) {
  return (
    <>
      <h2>E-Comerce</h2>
      <Filters changeFiltersValue={changeFiltersValue} />
    </>
  )
}