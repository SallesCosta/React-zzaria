import {
  Text,
  Button,
  Heading,
  Stack,
  Box,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { useAuthContext } from '@/helpers/authContext'
import { useNavigate } from 'react-router-dom'
import { nameInEmail } from '@/helpers/nameAndEmail'
const PizzaSizes = [
  { name: 'Pequena', size: 28, slices: 2, flavours: 1 },
  { name: 'Média', size: 30, slices: 6, flavours: 2 },
  { name: 'Grande', size: 32, slices: 6, flavours: 3 },
]

const ChoosePizza = () => {
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const irParaPrivate = () => navigate('/private')

  const name = nameInEmail(user.user.email)

  return (
    <Stack w='100%' maxW='960px' textAlign='center' as='main'>
      <Button onClick={irParaPrivate}>Private</Button>
      dentro da main
      <Heading as='h1' size='2xl'>
        O que vai ser hoje {name}?
      </Heading>
      <Heading as='h2' size='xl'>
        Escolha o tamanho da pizza:
      </Heading>
      <SimpleGrid
        minChildWidth='288px' // 320px - 2* 1em (32px)
        gap={6}
        // border='1px'
        w='100%'
        p='2em 1em'
      >
        {PizzaSizes.map((pizza) => (
          <GridItem key={pizza.name}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%'>
              <Text>{pizza.name}</Text>
              <Text>{pizza.size}cm</Text>
              <Text>{pizza.slices} fatias</Text>
              <Text>{pizza.flavours} sabores</Text>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default ChoosePizza
