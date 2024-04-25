import { InfoAddress } from './components/infoAddress'
import { VStack, Button, Stack, Divider } from '@chakra-ui/react'
import { AnimatedText, H1, H2, Container } from '@/ui'
import { SUCCESS } from '@/helpers'
import { useAuth, useLang } from '@/contexts'
import { OrderList } from './components/orderList'
import { Link } from 'react-router-dom'
import { useOrder } from '@/contexts/orderContext'
import langSource from '@/lang/langSource.json'

const ConfirmationPage = () => {
  const { sendOrder } = useOrder()
  const { language } = useLang()
  const { name } = useAuth()

  const l = langSource[language]

  return (
    <>
      <Stack flexGrow='1' p='2em' w='600px'>
        <VStack>
          <H1>{name}</H1>
          <AnimatedText>{l.verify}</AnimatedText>
        </VStack>
        <Divider p='10px 0' />
        <VStack>
          <H2>{l.commandInfo}</H2>
          <OrderList />
        </VStack>
        <Divider p='10px 0' />
        <InfoAddress />
      </Stack>
      <Container
        boxShadow='esc-shadow-lg-top'
        as='footer'
        justifyContent='center'
        h='200px'
      >
        <Button variant='primary' onClick={sendOrder}>
          <Link to={SUCCESS}>
            <AnimatedText>{l.confirmOrder}</AnimatedText>
          </Link>
        </Button>
      </Container>
    </>
  )
}

export default ConfirmationPage
