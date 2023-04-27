import { HOME, CHOOSE_PIZZA_FLAVOURS } from '@/helpers'

import { Stack, Input, Box } from '@chakra-ui/react'
import { H1, H2 } from '@/ui/text'
import { lazy, useState } from 'react'

const Footer = lazy(() => import('@/pages/components/Footer'))

const ChoosePizzaQuantity = () => {
  const [value, setValue] = useState('')
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
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <Footer
        buttons={[
          {
            to: CHOOSE_PIZZA_FLAVOURS,
            children: 'Mudar sabores',
            variant: 'solid',
          },
          {
            to: HOME,
            children: 'Finalizar compra',
            variant: 'primary',
          },
        ]}
      />
    </Stack>
  )
}

export default ChoosePizzaQuantity
