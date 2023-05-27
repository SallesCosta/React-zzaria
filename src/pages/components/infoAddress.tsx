import { useOrder, useLang } from '@/contexts'

import { H4, AnimatedText } from '@/ui'
import { Box, Stack } from '@chakra-ui/react'
import langSource from '@/lang/langSource.json'

export const InfoAddress = () => {
  const { order } = useOrder()
  const { language } = useLang()

  const { street, number, complement, codePostal, city, state } =
    order?.address

  const l = langSource[language]

  return (
    <Stack>
      <H4>{l.deliveryAddress}</H4>
      <AnimatedText>
        {l.street}: {street}
      </AnimatedText>
      <AnimatedText>
        {l.number}: {number}{' '}
      </AnimatedText>
      <AnimatedText>
        {l.postalCode}: {codePostal}
      </AnimatedText>
      <AnimatedText>
        {l.complement}: {complement}
      </AnimatedText>
      <AnimatedText>
        {l.city}: {city}
      </AnimatedText>
      <AnimatedText>
        {l.state}: {state}
      </AnimatedText>
      <AnimatedText>
        {l.phone}: {order?.phone}
      </AnimatedText>
    </Stack>
  )
}
