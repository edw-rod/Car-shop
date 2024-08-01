import { useFilter } from './hooks/useFilter'

export function FilterProducts (obj) {
  const { filter } = useFilter()

  return obj.filter((prod) => {
    return prod.price >= filter.priceMin && (
      filter.category === 'all' ||
        prod.category === filter.category
    )
  })
}
