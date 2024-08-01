import FiltersProvider from '../services/context/Filters'
import CarShoping from './CarShoping'

export default function App () {
  return (
    <FiltersProvider>
      <main>
        <CarShoping />
      </main>
    </FiltersProvider>
  )
}
