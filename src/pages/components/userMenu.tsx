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
import { firstLetter, nameInEmail } from '@/helpers'
import langSource from '@/lang/langSource.json'

export const UserMenu = () => {
  const { toggleColorMode } = useColorMode()
  const { logout, user } = useAuth()

  const { language } = useLang()

  const name = nameInEmail(user.user.email)
  const firstLetterCapitalCase = firstLetter(name)

  const l = langSource[language]

  return (
    <Menu>
      <MenuButton
        _hover={{
          boxShadow: 'btn-primary-shadow',
        }}
      >
        <HStack>
          <Avatar
            display={{ base: 'none', md: 'block' }}
            name={firstLetterCapitalCase}
            color='esc-textHeading'
            bg='esc-shadowBox1'
            size='sm'
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
          toggle CorlorMode
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command='⌘N' onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
