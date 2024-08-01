import { Image, Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { CarShopping } from '../../public/SVG/CarShopping'
import { useCarshop } from '../services/hooks/useCarShop'

export function Products ({ obj }) {
  const { addProduct } = useCarshop()
  return (
    <ul className='ListProduct'>
      {
         obj.map(element => {
           return (

             <li key={element.id}>
               <Card className='card'>
                 <CardHeader className='flex justify-center items-center'>
                   <Image
                     className='w-[200px] max-h-[200px]'
                     src={element.image}
                     alt={element.title}
                   />
                 </CardHeader>
                 <CardBody className='flex flex-col items-center justify-center gap-1'>
                   <p className='font-bold text-lg text-center'>{element.title}</p>
                   <p className='font-bold text-lg text-center'>{element.price} $ </p>
                 </CardBody>
                 <CardFooter className='flex justify-center'>
                   <Button
                     onClick={() => addProduct(element)}
                     className='bg-[#b3b1b1]'
                   >
                     <CarShopping />
                   </Button>
                 </CardFooter>
               </Card>
             </li>

           )
         })
        }
    </ul>
  )
}
