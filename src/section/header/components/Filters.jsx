import { Slider } from '@nextui-org/react'
import { Select, SelectItem } from '@nextui-org/select'
import categories from '../../../services/categories.json'
import { useFilter } from '../../../services/hooks/useFilter'

export default function Filters () {
  const { filter, setFilter } = useFilter()

  const hanndledChangePrice = (event) => {
    setFilter(prevState => (
      {
        ...prevState,
        priceMin: event
      }
    ))
  }

  const hanndledChangeCategory = (event) => {
    setFilter(prevState => (
      {
        ...prevState,
        category: event.target.value
      }
    ))
  }

  return (
    <form className='w-[100%] flex justify-evenly items-center text-white gap-5'>
      <div className='w-1/3'>
        <Slider
          size='sm'
          label='Precio'
          onChange={hanndledChangePrice}
          formatOptions={{ style: 'currency', currency: 'USD' }}
          value={filter.priceMin}
          step={50}
          maxValue={1000}
          minValue={0}
          classNames={{
            base: '',
            filler: 'bg-[#0f4cf5]',
            label: 'text-white',
            currency: 'text-white'
          }}
          renderThumb={(props) => (
            <div
              {...props}
              className='p-1 top-1/2 bg-[#0f4cf5] rounded-full cursor-grab data-[dragging=true]:cursor-grabbing'
            >
              <span className='bg-black rounded-full w-3 h-3 block' />
            </div>
          )}
        />
      </div>

      <div className='w-1/3'>
        <Select
          size='sm'
          variant='underlined'
          labelPlacement='outside'
          label='Categoria'
          onChange={hanndledChangeCategory}
        >
          <SelectItem key='all'>all</SelectItem>
          {categories.map((catg) => {
            return (
              <SelectItem key={catg}>{catg}</SelectItem>
            )
          })}
        </Select>
      </div>
    </form>
  )
}
