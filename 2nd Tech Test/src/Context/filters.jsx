import { createContext, useState } from "react";
// Use context is meant to declare not constant changing stuff, for constant-changing things we use Redux || Sustant

// 1.- Create the context, this returns the value={} declared in the funciton
export const FiltersContext = createContext();

// 2.- Crear the context.provider to get the access to the context
export function FiltersProvider ({ children })  {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 2000
  })
  // context value could be a state, number, object, etc, the context is a way to inject dependencies directly to the modules
  return (
    <FiltersContext.Provider value={{filters, setFilters}}>
      {children}
    </FiltersContext.Provider>
  )
}
// 3.- Consume the context (in the components)