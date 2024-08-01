import { useEffect, useState } from 'react'
import { getElementFilter } from '../functions'

export function useElementFilter () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getElementFilter()
      .then(data => {
        setCategories(data)
      })
  }, [])

  return { categories }
}
