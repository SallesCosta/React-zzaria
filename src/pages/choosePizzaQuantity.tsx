import { HOME, CHECKOUT } from '@/helpers'
import { useLocation, useNavigate } from 'react-router-dom'

import { Stack, Input, Box } from '@chakra-ui/react'
import { H1 } from '@/ui/text'
import { ChangeEvent, useState } from 'react'
import Footer from '@/pages/components/Footer'

export const ChoosePizzaQuantity = () => {
  const [value, setValue] = useState(1)
  const location = useLocation()
  const navigate = useNavigate()

  if (!location.state) {
    return navigate(HOME)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (+value >= 1) {
      setValue(+value)
    }
  }

  return (
    <Stack maxW='960px' w='100%' textAlign='center' as='main'>
      <H1>Quantity with this flavours?</H1>
      <Box>
        <Input
          w='100px'
          h='100px'
          type='number'
          autoFocus
          value={value}
          onChange={handleChange}
        />
      </Box>
      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores',
          },
          action: {
            to: CHECKOUT,
            children: 'Finalizar compra',
          },
        }}
      />
    </Stack>
  )
}
