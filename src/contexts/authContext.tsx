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

type ContextProps = {
  children: ReactNode | ReactNode[];
};

type ContextValue = {
  pressEnter: any;
  setLoginEmail: Dispatch<SetStateAction<string>>;
  setLoginPwd: Dispatch<SetStateAction<string>>;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
  user: any;
  loginWithEmailAndPassword: () => void;
  logout: () => void;
  loginPwd: string;
  loginEmail: string;
  isUserLoggedIn: boolean;
};

const AuthContext = createContext<ContextValue | null>(null)

export function AuthProvider ({ children }: ContextProps): JSX.Element {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loginPwd, setLoginPwd] = useState<string>('test123')
  const [loginEmail, setLoginEmail] = useState<string>(
    'test@test.com',
  )

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setIsUserLoggedIn(true)
    })
  }, [])

  const loginWithEmailAndPassword = useCallback(async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPwd)
      setUser(user)

      setIsUserLoggedIn(true)
      navigate(HOME)
    } catch (error: any) {
      console.log(error.message)
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
        user,
        loginWithEmailAndPassword,
        logout,
        isUserLoggedIn,
        setIsUserLoggedIn,
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

export function useAuth () {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
