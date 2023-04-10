import {
  createContext,
  Dispatch,
  KeyboardEventHandler,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth'

import { auth } from '@/services/firebase'
import { useNavigate } from 'react-router-dom'

type ContextProps = {
  children: ReactNode | ReactNode[];
};

type ContextValue = {
  pressEnter: any;
  setRegisterEmail: Dispatch<SetStateAction<string>>;
  setRegisterPw: Dispatch<SetStateAction<string>>;
  setLoginEmail: Dispatch<SetStateAction<string>>;
  setLoginPwd: Dispatch<SetStateAction<string>>;
  user: unknown;
  loginWithEmailAndPassword: () => void;
  register: () => void;
  logout: () => void;
  loginWithGitHub: () => void;
  isUserLoggetIn: boolean;
  loginWithGoogle: () => void;
  loginPwd: string;
  loginEmail: string;
};

const AuthContext = createContext<ContextValue | null>(null)

export function AuthProvider ({ children }: ContextProps): JSX.Element {
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

  return (
    <AuthContext.Provider
      value={{
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
        pressEnter,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext () {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
