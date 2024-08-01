import { FilterProducts } from '../functions'
import { useContext } from 'react'
import { FiltersContext } from '../context/Filters'

export function useFilter () {
  const { filter, setFilter } = useContext(FiltersContext)

  return { filter, FilterProducts, setFilter }
}
