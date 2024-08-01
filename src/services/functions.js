import { useFilter } from './hooks/useFilter'
import { CATEGORIES, GET_CATEGORIES, PRODUCTS } from './const'

export function FilterProducts (obj) {
  const { filter } = useFilter()

  return obj.filter((prod) => {
    return prod.price >= filter.priceMin && (
      filter.category === 'all' ||
        prod.category === filter.category
    )
  })
}

export async function getElementFilter () {
  const resp = await fetch(CATEGORIES)
  const data = await resp.json()
  return data
}

export async function getElementProd (category) {
  let URL_PRODUCT
  if (category === 'all') {
    URL_PRODUCT = PRODUCTS
  } else {
    URL_PRODUCT = `${GET_CATEGORIES}${category}`
  }
  const resp = await fetch(URL_PRODUCT)
  const data = await resp.json()

  return data
}
