import {
  Button,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  FormControl,
  Stack,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth, useLang } from '@/contexts'
import { LangControl } from './components/langControl'
import { AnimatedText, Container, Logo } from '@/ui'
import langSource from '@/lang/langSource.json'

const LoginPage = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false)

  const {
    loginWithEmailAndPassword,
    setLoginPwd,
    loginPwd,
    setLoginEmail,
    loginEmail,
  } = useAuth()

  const { language } = useLang()

  const handleloginWithEmailAndPassword = () => loginWithEmailAndPassword()

  const l = langSource[language]
  return (
    <>
      <Container
        bg='bg-default-b'
        flexDir='column'
        boxShadow='esc-shadow-lg-bottom'
        spacing={6}
        m='2em auto'
        w={500}
      >
        <Heading as='h1' size='2xl'>
          <Logo width='100%' />
        </Heading>
        <LangControl />
        <Stack spacing={3} w='90%' maxW='500'>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              isRequired
              value={loginEmail}
              placeholder='E-mail'
              name='email'
              onChange={(e) => setLoginEmail(e.target.value)}
              borderRadius={0}
              focusBorderColor='red.500'
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              <AnimatedText>{l.password}</AnimatedText>
            </FormLabel>
            <Input
              isRequired
              value={loginPwd}
              placeholder='Password'
              name='password'
              type={showPwd ? 'text' : 'password'}
              borderRadius={0}
              onChange={(e) => setLoginPwd(e.target.value)}
              focusBorderColor='red.500'
            />
          </FormControl>
          <HStack justifyContent='right'>
            <label htmlFor='show' />
            <Checkbox name='show' onChange={() => setShowPwd(!showPwd)}>
              <AnimatedText>{l.showPassword}</AnimatedText>
            </Checkbox>
          </HStack>
        </Stack>
        <Stack w='90%' spacing={6} maxW='500'>
          <Button
            onClick={handleloginWithEmailAndPassword}
            type='submit'
            w='100%'
            variant='primary'
          >
            <AnimatedText>{l.send}</AnimatedText>
          </Button>
        </Stack>
        <HStack />
      </Container>
    </>
  )
}

export default LoginPage
