import {
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/react'
import { AnimatedText } from '@/ui'
import { useAuth, useLang } from '@/contexts'
import { ExternalLinkIcon, AddIcon } from '@chakra-ui/icons'
import { CHECKOUT } from '@/helpers'
import langSource from '@/lang/langSource.json'
import { useLocation } from 'react-router-dom'

export const UserMenu = () => {
  const location = useLocation()
  const { toggleColorMode } = useColorMode()
  const { logout, name } = useAuth()

  const { language } = useLang()

  const isCheckout = location.pathname === CHECKOUT

  const l = langSource[language]

  const firstLetter = name?.substring(0, 1).toUpperCase()

  return (
    <Menu>
      <MenuButton
        borderRadius={5}
        px={10}
        py={2}
        _hover={{
          boxShadow: 'btn-primary-shadow',
          bg: '#ffcc00',
          color: '#222',
        }}
      >
        <HStack>
          <Avatar
            display={{ base: 'none', md: 'block' }}
            name={firstLetter}
            color='esc-text'
            bg='bg-gray'
            size='sm'
            _hover={{
              color: '#222',
            }}
          />
          <AnimatedText>
            {l.hello} {name}
          </AnimatedText>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem
          icon={<AddIcon />}
          command='⌘T'
          onClick={() => toggleColorMode()}
        >
          toggle Color-Mode
        </MenuItem>

        {!isCheckout &&
          <MenuItem icon={<ExternalLinkIcon />} command='⌘N' onClick={logout}>
            Logout
          </MenuItem>}
      </MenuList>
    </Menu>
  )
}
