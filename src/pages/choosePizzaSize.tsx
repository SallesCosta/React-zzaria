import { Link } from 'react-router-dom'
import { Text, Stack, Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import { useAuthContext } from '@/helpers/authContext'
import { nameInEmail } from '@/helpers/nameAndEmail'
import { H1, H2 } from '@/ui/text'
import { PizzaSizes } from '@/helpers/fake'

const ChoosePizzaSize = () => {
  const { user } = useAuthContext()

  const name = nameInEmail(user.user.email)

  return (
    <>
      <Stack w='100%' maxW='960px' textAlign='center' as='main'>
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
              <Link state={pizza} to='/sabores'>
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

export default ChoosePizzaSize
