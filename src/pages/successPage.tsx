import { Box, Button, Stack, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Container, H1, H2, AnimatedText } from '@/ui'
import { HOME, nameInEmail } from '@/helpers'
import { useAuth, useLang } from '@/contexts'
import { OrderList } from './components/orderList'
import { InfoAddress } from './components/infoAddress'
import langSource from '@/lang/langSource.json'

const Success = () => {
  const { user } = useAuth()
  const { language } = useLang()

  const name = nameInEmail(user.user.email)

  const l = langSource[language]
  return (
    <>
      <VStack flexGrow={1}>
        <H1>Pronto {name}</H1>
        <AnimatedText>{l.pizzaWillArrive}</AnimatedText>
        <Stack w='450px' h='450px'>
          <H2>Info do pedido</H2>
          <OrderList />
          <InfoAddress />
        </Stack>
      </VStack>
      <Container
        boxShadow='esc-shadow-lg-top'
        as='footer'
        justifyContent='center'
        h='200px'
      >
        <Button variant='primary'>
          <Link to={HOME}>
            <AnimatedText>{l.backToStart}</AnimatedText>
          </Link>
        </Button>
      </Container>
    </>
  )
}

export default Success
