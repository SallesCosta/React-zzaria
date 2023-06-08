import { useOrder, useLang } from '@/contexts'

import { H4 } from '@/ui'
import { Grid } from '@chakra-ui/react'
import langSource from '@/lang/langSource.json'
import { AdressGridItem } from '@/ui/formGridItem'

export const InfoAddress = () => {
  const { order } = useOrder()
  const { language } = useLang()

  const { street, number, complement, codePostal, city, state } =
    order?.address

  const l = langSource[language]
  return (
    <Grid w='510px'>
      <H4 pb='34px'>{l.deliveryAddress}</H4>
      <AdressGridItem colSpan={12}>
        {l.street}: {street}
      </AdressGridItem>
      <AdressGridItem colSpan={6}>
        {l.number}: {number}{' '}
      </AdressGridItem>
      <AdressGridItem colSpan={6} textAlign='right'>
        {l.postalCode}: {codePostal}
      </AdressGridItem>
      <AdressGridItem colSpan={12}>
        {l.complement}: {complement}
      </AdressGridItem>
      <AdressGridItem colSpan={8}>
        {l.city}: {city}
      </AdressGridItem>
      <AdressGridItem colSpan={4} textAlign='right'>
        {l.state}: {state}
      </AdressGridItem>
      <AdressGridItem colSpan={12}>
        {l.phone}: {order?.phone}
      </AdressGridItem>
    </Grid>
  )
}
