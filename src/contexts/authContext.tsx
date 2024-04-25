import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import { auth } from '@/services/firebase'
import { useNavigate } from 'react-router-dom'
import { HOME, LOGIN } from '@/helpers'
import { UserProps } from '@/contexts/types'

type ContextProps = {
  children: ReactNode | ReactNode[];
}

type ContextValue = {
  isUserLoggedIn: boolean;
  loginEmail: string
  loginPwd: string;
  loginWithEmailAndPassword: () => void;
  logout: () => void;
  name: string;
  pressEnter: (e: KeyboardEvent)=> void;
  setInternalLoginEmail: (email: string) => void;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
  setLoginPwd: Dispatch<SetStateAction<string>>;
  user: UserProps
}

const AuthContext = createContext<ContextValue | null>(null)

export function AuthProvider ({ children }: ContextProps): JSX.Element {
  const [name, setName] = useState<string>('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loginPwd, setLoginPwd] = useState<string>(
    'test123',
  )
  const [loginEmail, setLoginEmail] = useState<string>(
    'test@test.com',
  )
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const setInternalLoginEmail = (email: string) => setLoginEmail(email)

  const loginWithEmailAndPassword = useCallback(async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPwd)
      setUser(user)

      if (user.user.email) {
        const email = user.user.email
        setName(email?.substring(0, email?.indexOf('@')))
      }

      setIsUserLoggedIn(true)
      navigate(HOME)
    } catch (error: any) {
      console.log('Err: ', error.message)
    }
  }, [loginPwd, loginEmail, navigate])

  const logout = useCallback(async () => {
    await signOut(auth)
    setIsUserLoggedIn(false)
    navigate(LOGIN)
  }, [navigate])

  const pressEnter = (e: KeyboardEvent) => {
    const ENTER = 'Enter'

    if (e.key === ENTER) {
      loginWithEmailAndPassword()
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        loginEmail,
        loginPwd,
        loginWithEmailAndPassword,
        logout,
        name,
        pressEnter,
        setInternalLoginEmail,
        setIsUserLoggedIn,
        setLoginPwd,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
