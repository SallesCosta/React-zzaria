import { Center, Divider, HStack, VStack } from '@chakra-ui/react'
import { H2 } from '@/ui/text'
import { CheckoutFooter } from './components/footer'
import { OrderList } from './components/orderList'
import { useNavigate } from 'react-router-dom'
import { useOrder, useLang } from '@/contexts'
import { HOME } from '@/helpers'
import { FormAdress } from './components/formAdress'
import { AnimatedText } from '@/ui'
import langSource from '@/lang/langSource.json'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const { order } = useOrder()
  const { language } = useLang()

  if (!order.pizzas.length) {
    return navigate(HOME)
  }

  const l = langSource[language]

  return (
    <>
      <HStack
        as='main'
        flexGrow='1'
        display='flex'
        maxW='960px'
        p='2em 0'
        alignItems='start'
        justifyContent='space-between'
      >
        <VStack w='50%' textAlign='center'>
          <H2>
            <AnimatedText>{l.deliveryAddress}?</AnimatedText>
          </H2>
          <FormAdress />
        </VStack>
        <Center height='100%' w={2}>
          <Divider orientation='vertical' />
        </Center>
        <VStack w='50%'>
          <H2>
            <AnimatedText>{l.orderInformation}</AnimatedText>
          </H2>
          <OrderList />
        </VStack>
      </HStack>
      <CheckoutFooter />
    </>
  )
}

export default CheckoutPage
