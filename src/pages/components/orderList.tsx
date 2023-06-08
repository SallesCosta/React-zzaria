import { Box, List, ListItem, Center } from '@chakra-ui/react'
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
          <ListItem
            w='100%'
            key={index}
            h={isCheckout ? 16 : ''}
            alignItems='center' display='flex' justifyContent='space-between'
            pl={3}
            _hover={{
              background: 'esc-cardBackground',
              border: '1px solid',
              borderColor: 'red.500',
            }}
          >
            <Box>
              <Bold>{p.quantity}</Bold> <Bold>{p.size.name}</Bold> (
              {p.size.flavours} {singleOrPlural(p.size.flavours, `${l.flavor}`, `${l.flavors} `)}
              {' '} and {p.size.slices} slices){' '}
              {singleOrPlural(p.flavours.length, 'sabor', 'sabores')}{' '}
              <Bold>
                {p.flavours.map((name: any) => name.name.name).join(', ')}
              </Bold>
            </Box>
            {isCheckout && (
              <Center
                onClick={() => removePizza(p.id)}
                cursor='pointer'
                h={isCheckout ? 16 : ''}
                minW={8}
                _hover={{
                  background: 'red.200',
                }}
              >
                <SmallCloseIcon
                  w={6}
                  h={6}
                  color='red.500'
                />
              </Center>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}
