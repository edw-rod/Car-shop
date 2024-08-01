import { useContext } from 'react'
import { CarShopContext } from '../context/CarShop'

export function useCarshop () {
  const { CarShop, addProduct, clearCarShop, deleteProduct } = useContext(CarShopContext)

  if (CarShop === undefined) throw Error('no se puede utilizar el contexto')

  return { CarShop, addProduct, clearCarShop, deleteProduct }
}
