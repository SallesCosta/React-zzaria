import { useState } from 'react'
import {
  Button,
  FormLabel,
  Input,
  VStack,
  HStack,
  Checkbox,
  FormControl,
  Stack,
  Heading,
} from '@chakra-ui/react'
import { AuthHooks } from '@/auth/authHooks'

export const LoginPage = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false)

  const {
    isUserLoggetIn,
    loginWithEmailAndPassword,
    loginWithGitHub,
    logout,
    loginWithGoogle,
    setLoginPwd,
    loginPwd,
    setLoginEmail,
    loginEmail,
  } = AuthHooks()

  const handleloginWithEmailAndPassword = () => loginWithEmailAndPassword()

  const handleGitHubSubmit = () => loginWithGitHub()

  const handleLoginWithGoogle = () => loginWithGoogle()

  const handleLogout = () => logout()

  return (
    <>
      <VStack mt={9} spacing={6}>
        <Heading as='h1' size='2xl'>
          Login
        </Heading>
        <Stack spacing={3} w='90%' maxW='500'>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              isRequired
              value={loginEmail}
              placeholder='E-mail'
              name='email'
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              isRequired
              value={loginPwd}
              placeholder='Password'
              name='password'
              type={showPwd ? 'text' : 'password'}
              onChange={(e) => setLoginPwd(e.target.value)}
            />
          </FormControl>
          <HStack justifyContent='right'>
            <label htmlFor='show' />
            <Checkbox name='show' onChange={() => setShowPwd(!showPwd)}>
              Show password
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
            Login
          </Button>
          <HStack justifyContent='space-between'>
            <Button onClick={handleGitHubSubmit}>Login with GitHub</Button>
            <Button onClick={handleLoginWithGoogle}>Login with Google</Button>
          </HStack>
          {isUserLoggetIn && <Button onClick={handleLogout}>LogOUT</Button>}
          {/* <Link to='/newuserform'> Créer un nouveau utilizateur</Link> */}
        </Stack>
      </VStack>
    </>
  )
}
