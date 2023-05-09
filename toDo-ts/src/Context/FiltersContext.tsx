import React, { JSXElementConstructor, ReactNode, useState } from 'react'
import { TODO_FILTERS } from '../consts'

// 1.- Create a Context object: To create a context, use the React.createContext, react is implicit
export const FiltersContext = React.createContext(TODO_FILTERS)

// 2.- Add acces and value to the context
interface Props {
  children: ReactNode
  FiltersContext: React.ElementType
  filterSelected: string
  handleFilterChange: () => void
}

export const FiltersProvider: React.FC<Props> = ({ children, FiltersContext }) => {
  const [filterSelected, setFilter] = useState(TODO_FILTERS.ALL) 
  return (
    <FiltersContext value={{filterSelected, setFilter}}>
      { children }
    </FiltersContext>
  )
}