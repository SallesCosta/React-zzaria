import { InfoAddress } from './components/infoAddress'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { AnimatedText, H1, H2, Container } from '@/ui'
import { nameInEmail, SUCCESS } from '@/helpers'
import { useAuth } from '@/contexts'
import { OrderList } from './components/orderList'
import { Link } from 'react-router-dom'
import { useOrder } from '@/contexts/orderContext'

const Confirmation = () => {
  const { user } = useAuth()
  const { sendOrder } = useOrder()
  const name = nameInEmail(user.user.email)
  // TODO: switch to dinamic lang text
  return (
    <>
      <Stack flexGrow='1' pt='2em'>
        <H1>{name}</H1>
        <Text>Confiere, por favor, se está tudo certo com o seu pedido</Text>
        <Box w='450px' h='450px'>
          <H2>Info do pedido</H2>
          <OrderList />
          <InfoAddress />
        </Box>
      </Stack>
      <Container
        boxShadow='esc-shadow-lg-top'
        as='footer'
        justifyContent='center'
        h='200px'
      >
        <Button variant='primary' onClick={sendOrder}>
          <Link to={SUCCESS}>
            <AnimatedText>Tudo certo!</AnimatedText>
          </Link>
        </Button>
      </Container>
    </>
  )
}

export default Confirmation
