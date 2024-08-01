import { CarShopping } from '../../../public/SVG/CarShopping'
import Filters from './components/Filters'

export default function Header () {
  return (
    <header className=' w-full flex flex-col items-center'>
      <section className='m-5 flex items-center gap-5'>
        <h1 className='text-white'>SHOPPING CAR</h1>
        <CarShopping clas='w-[4.5rem]' />
      </section>
      <section className='w-full m-5'>
        <Filters />
      </section>
    </header>
  )
}
