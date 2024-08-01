import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Card, CardHeader, Image, CardBody, CardFooter } from '@nextui-org/react'
import { CarShopping } from '../../public/SVG/CarShopping'
import { useCarshop } from '../services/hooks/useCarShop'

export default function ModalCarShoping () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { CarShop, deleteProduct, clearCarShop } = useCarshop()

  return (
    <>
      <div className='w-full flex justify-end'>
        <Button className='bg-white' onPress={onOpen}>
          <CarShopping clas='w-[4.5rem]' />
        </Button>
      </div>

      <Modal
        size='5xl'
        placement='center'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior='outside'
        className='min-h-[300px]'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex justify-center gap-1 text-3xl'>Car Shop</ModalHeader>
              <ModalBody>
                {
                (CarShop.length === 0)
                  ? <p className='text-center text-3xl'>Carrito Vacio</p>
                  : <Card>
                    <ul className='ListProduct'>
                      {
                              CarShop.map(element => {
                                return (

                                  <li
                                    className='card'
                                    key={element.id}
                                  >
                                    <CardHeader className='flex justify-center items-center'>
                                      <Image
                                        className='w-[150px] max-h-[150px]'
                                        src={element.image}
                                        alt={element.title}
                                      />
                                    </CardHeader>
                                    <CardBody className='flex flex-col items-center justify-center gap-1'>
                                      <p className='font-bold text-lg text-center'>{element.title}</p>
                                      <p className='font-bold text-md text-center'>{element.price * element.quantity} $ </p>
                                      <p className='font-bold text-md text-center'>cantidad: {element.quantity} </p>

                                    </CardBody>
                                    <CardFooter className='flex justify-center'>
                                      <Button
                                        onClick={() => deleteProduct(element)}
                                        className='bg-white'
                                      > <p className='text-red-600'>Eliminar</p>
                                      </Button>
                                    </CardFooter>
                                  </li>
                                )
                              })
                            }
                    </ul>

                    <CardFooter className='flex justify-around'>
                      <Button
                        onClick={() => clearCarShop()}
                        className='bg-red-500'
                      > <p className='text-white'>Eliminar Todo</p>
                      </Button>
                      <Button
                        className='bg-white'
                      > <p className='text-[#0f4cf5]'>Comprar</p>
                      </Button>

                    </CardFooter>
                    </Card>

                  }
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
