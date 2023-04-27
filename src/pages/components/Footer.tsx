import { Link, useLocation } from 'react-router-dom'
import { Box, Button, Stack, Text } from '@chakra-ui/react'

import { Bold } from '@/ui/text'
import { nameInEmail, singleOrPlural, useAuth, WithRouter } from '@/helpers'

type eachButtonProps = {
  to: string;
  children: string;
  variant?: string;
  state?: any;
};

type buttonsProps = {
  buttons: eachButtonProps[];
};

const Footer = (buttons: buttonsProps) => {
  const { user } = useAuth()
  const userName = nameInEmail(user.user.email)

  const location = useLocation()
  const { pizzaSize, pizzaFlavours } = location.state
  const { flavours, name, slices } = pizzaSize
  console.log('pizzaFlavours: ', pizzaFlavours)

  const quantity = singleOrPlural(flavours, 'sabor', 'sabores')

  return (
    <Stack
      bg={['red', 'green', 'gray', 'violet']}
      as='footer'
      justifyContent='space-between'
      alignItems='center'
      w='100%'
      maxW='960px'
      p='1em 2em'
      minH='80px'
      h='200px'
      flexDir={{ base: 'column', sm480: 'row' }}
    >
      <Box>
        <Text>
          Olá <Bold>{userName}</Bold>
        </Text>
      </Box>
      <Text>
        size: <Bold>{name}</Bold> ({flavours} {quantity} and {slices} slices)
      </Text>

      {pizzaFlavours && (
        <Text>
          {singleOrPlural(pizzaFlavours.length, 'sabor', 'sabores')}
          <Bold>
            {pizzaFlavours.map((name: any) => name.name.name).join(', ')}
          </Bold>
        </Text>
      )}

      <Box>
        {buttons.buttons.map((button: any) => (
          <Button key={button.to}>
            <Link to={button.to} {...button}>
              {button.children}
            </Link>
          </Button>
        ))}
      </Box>
    </Stack>
  )
}

export default WithRouter(Footer)
