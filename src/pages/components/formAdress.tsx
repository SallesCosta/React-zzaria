import { Divider, Button, Grid, FormLabel, Input } from '@chakra-ui/react'

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
          <FormGridItem colSpan={12} animatedText={l.street} name='street' autoFocused isRequired />
          <FormGridItem colSpan={4} animatedText={l.number} name='number' isRequired />
          <FormGridItem colSpan={8} animatedText={l.postalCode} name='codePostal' isRequired />
          <FormGridItem colSpan={8} animatedText={l.city} name='city' isRequired />
          <FormGridItem colSpan={4} animatedText={l.state} name='state' isRequired />
          <FormGridItem colSpan={12} animatedText={l.complement} name='complement' />
        </Grid>
        <Button type='submit' mt={3} w='100%' variant='secondary'>
          <AnimatedText>{l.send}</AnimatedText>
        </Button>
      </form>
      <Divider p={2} />
      <FormLabel>
        <AnimatedText>{l.phone}</AnimatedText>
      </FormLabel>
      <Input
        focusBorderColor='#ffcc00'
        value={phoneMask(phone)}
        onChange={handleChangePhone}
        type='text'
        borderRadius={0}
        bg='esc-cardBackground'
      />
    </>
  )
}
