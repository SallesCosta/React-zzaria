import { Button, Grid, GridItem, FormLabel, Input } from '@chakra-ui/react'

import { useLang, useOrder } from '@/contexts'
import langSource from '@/lang/langSource.json'
import { AnimatedText } from '@/ui'
import { phoneMask } from '@/helpers'

export const FormAdress = () => {
  const { handleAddress, handleChangePhone, phone } = useOrder()
  const { language } = useLang()

  const l = langSource[language]
  return (
    <>
      <form onSubmit={handleAddress}>
        <Grid templateColumns='repeat(12, 1fr)' gap={3}>
          <GridItem colSpan={12}>
            <FormLabel>
              <AnimatedText>{l.street}</AnimatedText>
            </FormLabel>
            <Input name='street' autoFocus type='text' />
          </GridItem>
          <GridItem colSpan={4}>
            <FormLabel>
              <AnimatedText>{l.number}</AnimatedText>
            </FormLabel>
            <Input name='number' type='text' />
          </GridItem>
          <GridItem colSpan={8}>
            <FormLabel>
              <AnimatedText>{l.postalCode}</AnimatedText>
            </FormLabel>
            <Input name='codePostal' type='text' />
          </GridItem>
          <GridItem colSpan={8}>
            <FormLabel>
              <AnimatedText>{l.city}</AnimatedText>
            </FormLabel>
            <Input name='city' type='text' />
          </GridItem>
          <GridItem colSpan={4}>
            <FormLabel>
              <AnimatedText> {l.state}</AnimatedText>
            </FormLabel>
            <Input name='state' type='text' />
          </GridItem>
          <GridItem colSpan={6}>
            <FormLabel>
              <AnimatedText>{l.complement}</AnimatedText>
            </FormLabel>
            <Input name='complement' type='text' />
          </GridItem>
          <GridItem colSpan={6}>
            <FormLabel>
              <AnimatedText>{l.phone}</AnimatedText>
            </FormLabel>
            <Input
              value={phoneMask(phone)}
              onChange={handleChangePhone}
              type='text'
            />
          </GridItem>
        </Grid>
        <Button type='submit' mt={3} w='100%'>
          <AnimatedText>{l.send}</AnimatedText>
        </Button>
      </form>
    </>
  )
}
