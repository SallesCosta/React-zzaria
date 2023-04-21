import { Link, useLocation } from 'react-router-dom'
import {
  Text,
  Heading,
  Stack,
  Box,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { H1 } from '@/ui/text'

const PizzaSizes = [
  { name: 'Pequena', size: 28, slices: 2, flavours: 1 },
  { name: 'Média', size: 30, slices: 6, flavours: 2 },
  { name: 'Grande', size: 32, slices: 6, flavours: 3 },
]

const ChoosePizzaFlavours = () => {
  const location = useLocation()
  const flavoursQuantity =
    location.state.flavours === 1
      ? 'Escolha o sabor'
      : `Escolha até ${location.state.flavours} sabores`

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
          {PizzaSizes.map((pizza) => (
            <GridItem key={pizza.name}>
              <Link state={pizza} to='/'>
                <Box
                  borderWidth='1px'
                  borderRadius='lg'
                  overflow='hidden'
                  w='100%'
                >
                  <Text>{pizza.name}</Text>
                  <Text>{pizza.size}cm</Text>
                  <Text>{pizza.slices} fatias</Text>
                  <Text>{pizza.flavours} sabores</Text>
                </Box>
              </Link>
            </GridItem>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  )
}

export default ChoosePizzaFlavours
