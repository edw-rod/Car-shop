import products from '../services/products.json'
import { Products } from '../section/products'
import Header from '../section/header/Header'
import { useFilter } from '../services/hooks/useFilter'
import { useState } from 'react'
import ModalCarShoping from './ModalCarShoping'
import CarShopProvider from '../services/context/CarShop'

export default function CarShoping () {
  const [prod] = useState(products)
  const { FilterProducts } = useFilter()

  const FilteredProducts = FilterProducts(prod)

  return (
    <CarShopProvider>
      <section className='section'>
        <ModalCarShoping />
        <Header />
        <Products obj={FilteredProducts} />
      </section>
    </CarShopProvider>
  )
}
