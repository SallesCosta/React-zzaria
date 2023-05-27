import { List, ListItem } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { SmallCloseIcon } from '@chakra-ui/icons'

import { useOrder, useLang } from '@/contexts'

import langSource from '@/lang/langSource.json'
import { Bold } from '@/ui'
import { singleOrPlural } from '@/helpers'

export const OrderList = () => {
  const location = useLocation()

  const { language } = useLang()

  const { order, removePizza } = useOrder()
  const eachOrder = order.pizzas

  const isCheckout = location.pathname === '/checkout'

  const l = langSource[language]

  return (
    <List spacing={2}>
      {eachOrder.map((p, index) => {
        return (
          <ListItem key={index}>
            <Bold> {p.quantity}</Bold> - <Bold>{p.size.name}</Bold> (
            {singleOrPlural(p.size.flavours, `${l.flavor}`, `${l.flavors}`)} flavours
            and {p.size.slices} slices){' '}
            {singleOrPlural(p.flavours.length, 'sabor', 'sabores')}{' '}
            <Bold>
              {p.flavours.map((name: any) => name.name.name).join(', ')}
            </Bold>
            {isCheckout && (
              <SmallCloseIcon
                w={4}
                h={4}
                color='red.500'
                cursor='pointer'
                onClick={() => removePizza(p.id)}
              />
            )}
          </ListItem>
        )
      })}
    </List>
  )
}
