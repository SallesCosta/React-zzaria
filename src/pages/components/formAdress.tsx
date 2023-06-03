import { Divider, Button, Grid, GridItem, FormLabel, Input, Box, VStack } from '@chakra-ui/react'

import { useLang, useOrder } from '@/contexts'
import langSource from '@/lang/langSource.json'
import { AnimatedText, FormGridItem } from '@/ui'
import { phoneMask } from '@/helpers'

export const FormAdress = () => {
  const { handleAddress, handleChangePhone, phone } = useOrder()
  const { language } = useLang()

  const l = langSource[language]
  return (
    <>
      <form onSubmit={handleAddress}>
        <Grid templateColumns='repeat(12, 1fr)' gap={3}>
          <FormGridItem colSpan={12} animatedText={l.street} name='street' />
          <FormGridItem colSpan={4} animatedText={l.number} name='number' />
          <FormGridItem colSpan={8} animatedText={l.postalCode} name='codePostal' />
          <FormGridItem colSpan={8} animatedText={l.city} name='city' />
          <FormGridItem colSpan={4} animatedText={l.state} name='state' />
          <FormGridItem colSpan={12} animatedText={l.complement} name='complement' />
        </Grid>
        <Button type='submit' mt={3} w='100%'>
          <AnimatedText>{l.send}</AnimatedText>
        </Button>
      </form>
      <Divider p={2} />
      <FormLabel>
        <AnimatedText>{l.phone}</AnimatedText>
      </FormLabel>
      <Input
        value={phoneMask(phone)}
        onChange={handleChangePhone}
        type='text'
        borderRadius={0}
        bg='esc-cardBackground'

      />
    </>
  )
}
