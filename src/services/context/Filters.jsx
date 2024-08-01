import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export default function FiltersProvider ({ children }) {
  const [filter, setFilter] = useState(
    {
      category: 'all',
      priceMin: 0
    }
  )
  return (
    <FiltersContext.Provider value={{
      filter,
      setFilter
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
