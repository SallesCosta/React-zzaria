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
      {eachOrder.map((pizza, index) => {
        const { pizzaSize, pizzaFlavours, quantity, id } = pizza
        const { flavours, name, slices } = pizzaSize

        return (
          <ListItem key={index}>
            <Bold> {quantity}</Bold> - <Bold>{name}</Bold> (
            {singleOrPlural(flavours, `${l.flavor}`, `${l.flavors}`)} flavours
            and {slices} slices){' '}
            {singleOrPlural(pizzaFlavours.length, 'sabor', 'sabores')}{' '}
            <Bold>
              {pizzaFlavours.map((name: any) => name.name.name).join(', ')}
            </Bold>
            {isCheckout && (
              <SmallCloseIcon
                w={4}
                h={4}
                color='red.500'
                cursor='pointer'
                onClick={() => removePizza(id)}
              />
            )}
          </ListItem>
        )
      })}
    </List>
  )
}
