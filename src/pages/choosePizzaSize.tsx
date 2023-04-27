import { Link } from 'react-router-dom'
import { Text, Stack, Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import { H1, H2 } from '@/ui/text'
import {
  nameInEmail,
  PizzaSizes,
  useAuth,
  useGlobalContext,
  CHOOSE_PIZZA_FLAVOURS,
} from '@/helpers'
const ChoosePizzaSize = () => {
  const { user } = useAuth()
  const { setSize } = useGlobalContext()

  const name = nameInEmail(user.user.email)

  return (
    <Stack maxW='960px' w='100%' textAlign='center' as='main'>
      <H1>O que vai ser hoje {name}?</H1>
      <H2>Escolha o tamanho da pizza:</H2>
      <SimpleGrid
        minChildWidth='288px' // 320px - 2* 1em (32px)
        gap={6}
        w='100%'
        p='2em 1em'
      >
        {PizzaSizes.map((pizza) => (
          <GridItem key={pizza.name}>
            <Link state={{ pizzaSize: pizza }} to={CHOOSE_PIZZA_FLAVOURS}>
              <Box
                onClick={() => setSize(pizza)}
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
  )
}

export default ChoosePizzaSize
