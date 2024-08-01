import { createContext } from 'react'
import { useTypeCarShop } from '../hooks/useTypeCarshop'

export const CarShopContext = createContext()

export default function CarShopProvider ({ children }) {
  const { state, addProduct, deleteProduct, clearCarShop } = useTypeCarShop()
  return (
    <CarShopContext.Provider value={{
      CarShop: state,
      deleteProduct,
      addProduct,
      clearCarShop
    }}
    >
      {children}-
    </CarShopContext.Provider>
  )
}
