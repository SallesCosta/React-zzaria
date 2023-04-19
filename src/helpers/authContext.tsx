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
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
  user: any;
  loginWithEmailAndPassword: () => void;
  // register: () => void;
  logout: () => void;
  loginWithGitHub: () => void;
  loginWithGoogle: () => void;
  loginPwd: string;
  loginEmail: string;
  isUserLoggedIn: boolean;
};

const AuthContext = createContext<ContextValue | null>(null)

export function AuthProvider ({ children }: ContextProps): JSX.Element {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPw, setRegisterPw] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loginPwd, setLoginPwd] = useState<string>('teste123')
  const [loginEmail, setLoginEmail] = useState<string>(
    'newcapital.in@gmail.com',
  )

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log('passou pelo StateChanged')
      setUser(currentUser)
      setIsUserLoggedIn(true)
    })
  }, [])

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPw,
  //     )
  //     console.log(user)
  //     window.location.pathname = '/loginform'
  //     // navigate('/loginform')
  //   } catch (error: any) {
  //     console.log(error.message)
  //   }
  // }

  const loginWithEmailAndPassword = useCallback(async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPwd)
      setUser(user)

      setIsUserLoggedIn(true)
      navigate('/')
      console.log('passou pelo login')
    } catch (error: any) {
      console.log(error.message)
    }
  }, [loginPwd, loginEmail, navigate])

  const loginWithGitHub = useCallback(async () => {
    try {
      const provider = new GithubAuthProvider()
      await signInWithRedirect(auth, provider)
    } catch (error: any) {
      console.log('loginWithGitHub: ', error.message)
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
    setIsUserLoggedIn(false)
    console.log('passou pelo logout')
    navigate('/login')
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
        // register,
        logout,
        loginWithGitHub,
        isUserLoggedIn,
        setIsUserLoggedIn,
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
