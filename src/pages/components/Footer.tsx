import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box, Button, Stack, Text } from '@chakra-ui/react'

import { Bold } from '@/ui/text'
import { nameInEmail, singleOrPlural, useAuth, WithRouter } from '@/helpers'

type buttonsProps = {
  buttons: {
    back: {
      children: string;
      variant?: string;
    };
    action: {
      disabled: boolean;
      state: any;
      to: string;
      children: string;
      variant?: string;
    };
  };
};

const Footer = (buttons: buttonsProps) => {
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const { pizzaSize, pizzaFlavours } = location.state
  const { flavours, name, slices } = pizzaSize
  const userName = nameInEmail(user.user.email)
  const quantity = singleOrPlural(flavours, 'sabor', 'sabores')

  const backPage = () => navigate(-1)
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
        <Button onClick={backPage} {...buttons.buttons.back} />
        <Button
          isDisabled={buttons.buttons.action.disabled}
          variant={buttons.buttons.action.variant}
        >
          <Link
            to={buttons.buttons.action.to}
            state={buttons.buttons.action.state}
          >
            {buttons.buttons.action.children}
          </Link>
        </Button>
      </Box>
    </Stack>
  )
}

export default WithRouter(Footer)
