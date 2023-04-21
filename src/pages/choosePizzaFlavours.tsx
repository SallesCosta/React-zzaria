import { useLocation } from 'react-router-dom'
import {
  Text,
  Stack,
  GridItem,
  SimpleGrid,
  Image,
  VStack,
  Checkbox,
} from '@chakra-ui/react'
import { H1 } from '@/ui/text'
import { singleOrPlural } from '@/helpers/singleOrPlural'
import { PizzaFlavours } from '@/helpers/fake'

const ChoosePizzaFlavours = () => {
  const location = useLocation()
  const flavoursQuantity = singleOrPlural(
    location.state.flavours,
    'Escolha o sabor',
    `Escolha até ${location.state.flavours} sabores`,
  )

  return (
    <>
      <Stack w='100%' maxW='960px' textAlign='center' as='main'>
        dentro da main
        <H1>{flavoursQuantity}</H1>
        <SimpleGrid
          minChildWidth='288px' // 320px - 2* 1em (32px)
          gap={6}
          w='100%'
          p='2em 1em'
        >
          {PizzaFlavours.map((pizza) => (
            <GridItem key={pizza.id}>
              <label htmlFor={pizza.name}>
                <VStack
                  cursor='pointer'
                  borderWidth='1px'
                  borderRadius='lg'
                  overflow='hidden'
                  w='100%'
                >
                  <Checkbox id={pizza.name} colorScheme='green' size='lg'>
                    <Text>{pizza.name}</Text>
                  </Checkbox>

                  <Image
                    borderRadius='full'
                    boxSize='200px'
                    src={pizza.image}
                    alt={`foto pizza de ${pizza.name}`}
                  />
                  <Text>R${pizza.value[0]},00</Text>
                </VStack>
              </label>
            </GridItem>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default ChoosePizzaFlavours
