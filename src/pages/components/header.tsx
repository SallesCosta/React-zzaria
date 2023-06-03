import { useLocation } from 'react-router-dom'

import { Logo, Container } from '@/ui'
import { LangControl } from './langControl'
import { UserMenu } from './userMenu'
import { HStack, Switch, VStack } from '@chakra-ui/react'

const Header = () => {
  const location = useLocation()
  const isCheckout = location.pathname === '/checkout'

  return (
    <Container
      as='header'
      justifyContent={isCheckout ? 'center' : 'space-between'}
      m='0 auto'
      h='auto'
      w='100%'
      boxShadow='esc-shadow-lg-bottom'
    >
      <Logo width='200px' />
      <VStack>
        {!isCheckout && <UserMenu />}
        <LangControl />
      </VStack>
    </Container>
  )
}

export default Header
