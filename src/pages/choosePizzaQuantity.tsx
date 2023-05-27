import { ChangeEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input, Button, VStack, HStack } from '@chakra-ui/react'

import { HOME, CHECKOUT } from '@/helpers'

import { AnimatedText, H1 } from '@/ui'
import Footer from '@/pages/components/footer'
import { useOrder, useLang } from '@/contexts'
import langSource from '@/lang/langSource.json'

export const ChoosePizzaQuantity = () => {
  const [quantity, setQuantity] = useState(1)
  const { language } = useLang()
  const { addPizzaToOrder } = useOrder()

  const location = useLocation()
  const navigate = useNavigate()
  const l = langSource[language]

  if (!location.state) {
    return navigate(HOME)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (+value >= 1) {
      setQuantity(+value)
    }
  }

  const changeQuantity = (s: string) => {
    if (quantity >= 1) {
      setQuantity(s === '+' ? quantity + 1 : quantity - 1)
    }
  }

  const data = {
    ...location.state,
    quantity,
  }
  console.log('data', data)

  const addPizza = () => {
    addPizzaToOrder(data)
    navigate(HOME)
  }

  return (
    <>
      <VStack
        maxW='960px'
        w='100%'
        textAlign='center'
        as='main'
        pt='2em'
        flexGrow='1'
        gap='4'
      >
        <H1>Quantity with this flavours?</H1>
        <HStack h='100px' w='150px'>
          <Input
            bg='bg-default-b'
            focusBorderColor='btn-primary-bg'
            w='100px'
            type='number'
            autoFocus
            value={quantity}
            onChange={handleChange}
            fontSize='60px'
            textAlign='center'
            h='100%'
          />
          <VStack h='100%'>
            <Button h='50%' w='50px' onClick={() => changeQuantity('+')}>
              +
            </Button>
            <Button
              h='50%'
              w='50px'
              onClick={() => changeQuantity('-')}
              isDisabled={quantity === 1}
            >
              -
            </Button>
          </VStack>
        </HStack>
        <Button variant='primary' onClick={addPizza}>
          <AnimatedText>{l.addAnotherPizza}</AnimatedText>
        </Button>
      </VStack>
      <Footer
        buttons={{
          back: {
            children: `${l.changeFlavor}`,
          },
          action: {
            onClick: () => addPizzaToOrder(data),
            variant: 'primary',
            to: CHECKOUT,
            children: `${l.finish}`,
            state: null,
          },
        }}
      />
    </>
  )
}
