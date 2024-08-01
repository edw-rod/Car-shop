import CarShopProvider from '../services/context/CarShop'
import ModalCarShoping from './ModalCarShoping'
import Header from '../section/header/Header'
import { Products } from '../section/products'
import { CircularProgress } from '@nextui-org/react'
import { useFilter } from '../services/hooks/useFilter'
import { useProduct } from '../services/hooks/useProduct'

export default function CarShoping () {
  const { prod, Loading } = useProduct()
  const { FilterProducts } = useFilter()

  const FilteredProducts = FilterProducts(prod)

  return (
    <CarShopProvider>
      <section className='section'>
        <ModalCarShoping />
        <Header />
        {Loading
          ? <div className='flex justify-center'> <CircularProgress size='lg' label='Loading...' /></div>
          : <Products obj={FilteredProducts} />}
      </section>
    </CarShopProvider>
  )
}
