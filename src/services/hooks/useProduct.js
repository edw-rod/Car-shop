import { getElementProd } from '../functions'
import { useEffect, useState } from 'react'
import { useFilter } from './useFilter'

export function useProduct () {
  const [prod, setProd] = useState([])
  const [Loading, setLoading] = useState(true)
  const { filter } = useFilter()

  useEffect(() => {
    setLoading(true)
    getElementProd(filter.category)
      .then(data => {
        setProd(data)
        setLoading(false)
      })
  }, [filter])

  return { prod, Loading }
}
