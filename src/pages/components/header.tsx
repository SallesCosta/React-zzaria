import { useLocation } from 'react-router-dom'
import { VStack } from '@chakra-ui/react'

import { Logo, Container } from '@/ui'
import { LangControl } from './langControl'
import { UserMenu } from './userMenu'
import { CHECKOUT } from '@/helpers'

const Header = () => {
  const location = useLocation()
  const isCheckout = location.pathname === CHECKOUT

  return (
    <Container
      as='header'
      justifyContent='space-between'
      m='0 auto'
      h='auto'
      w='100%'
      boxShadow='esc-shadow-lg-bottom'
    >
      <Logo width='200px' />
      <UserMenu />
      <LangControl />
    </Container>
  )
}

export default Header
