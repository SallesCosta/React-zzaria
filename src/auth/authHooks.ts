import { KeyboardEventHandler, useCallback, useEffect, useState } from 'react'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import {
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth'

export const AuthHooks = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPw, setRegisterPw] = useState('')
  const [user, setUser] = useState<any>({})
  const [isUserLoggetIn, setIsUserLoggetIn] = useState(false)
  const [loginPwd, setLoginPwd] = useState<string>('teste123')
  const [loginEmail, setLoginEmail] = useState<string>(
    'newcapital.in@gmail.com',
  )
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser)
        setUser(currentUser)
        setIsUserLoggetIn(true)
      } else {
        setIsUserLoggetIn(false)
        console.log('nao ta logado')
      }
    })
  }, [])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPw,
      )
      console.log(user)
      window.location.pathname = '/loginform'
      // navigate('/loginform')
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const loginWithEmailAndPassword = useCallback(async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPwd)
      setUser(user)
      // navigate('/home')
      console.log('login')
    } catch (error: any) {
      console.log(error.message)
    }
  }, [loginPwd, loginEmail])

  const loginWithGitHub = useCallback(async () => {
    try {
      const provider = new GithubAuthProvider()
      await signInWithRedirect(auth, provider)
    } catch (error: any) {
      console.log('erro')
      console.log(error.message)
    }
  }, [])

  const loginWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider()
      signInWithRedirect(auth, provider)
    } catch (error: any) {
      console.log(error.message)
    }
  }, [])

  const logout = useCallback(async () => {
    await signOut(auth)

    setIsUserLoggetIn(false)
    console.log('deslogado')
    // navigate('/')
  }, [])

  // const pressEnter = (e: KeyboardEventHandler<HTMLInputElement>) => {
  const pressEnter = async (e: any) => {
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      // await login({loginEmail, loginPw})
    }
  }

  return {
    pressEnter,
    setRegisterEmail,
    setRegisterPw,
    user,
    loginWithEmailAndPassword,
    register,
    logout,
    loginWithGitHub,
    isUserLoggetIn,
    loginWithGoogle,
    setLoginPwd,
    loginPwd,
    setLoginEmail,
    loginEmail,
  }
}
