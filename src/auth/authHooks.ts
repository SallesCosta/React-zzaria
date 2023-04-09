import { KeyboardEventHandler, useEffect, useState } from 'react'
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
  const navigate = useNavigate()

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log(currentUser)
  //     setUser(currentUser)
  //     setIsUserLoggetIn(true)
  //   } else {
  //     setIsUserLoggetIn(false)
  //     console.log('nao ta logado')
  //   }
  // })

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

  const loginWithEmailAndPassword = async ({ loginEmail, loginPw }: any) => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPw)
      // navigate('/home')
      // console.log('logado: ', user)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const loginWithGitHub = async () => {
    try {
      console.log('02')
      const provider = new GithubAuthProvider()
      console.log('03')
      await signInWithRedirect(auth, provider)
      console.log('logado com gitHub')
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      signInWithRedirect(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        console.log('credential: ', credential)
        const token = credential?.accessToken
        console.log('token: ', token)
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
    // navigate('/')
    console.log('deslogado')
  }

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
  }
}
