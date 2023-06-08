import { Button, Divider, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Container, H1, H2, AnimatedText } from '@/ui'
import { HOME, nameInEmail } from '@/helpers'
import { useAuth, useLang } from '@/contexts'
import { OrderList } from './components/orderList'
import { InfoAddress } from './components/infoAddress'
import langSource from '@/lang/langSource.json'

const SuccessPage = () => {
  const { user } = useAuth()
  const { language } = useLang()

  const name = nameInEmail(user.user.email)

  const l = langSource[language]
  return (
    <>
      <VStack flexGrow={1}>
        <VStack>
          <H1>Ok {name}</H1>
          <AnimatedText>{l.pizzaWillArrive}</AnimatedText>
        </VStack>
        <Divider p='10px 0' />
        <VStack>
          <H2>Info do pedido</H2>
          <OrderList />
        </VStack>
        <Divider p='10px 0' />
        <InfoAddress />
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

export default SuccessPage
