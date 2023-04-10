import {
  useState,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react'

type ContextProps = {
  children: ReactNode | ReactNode[];
};

type ContextValue = {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
};

const DataContext = createContext<ContextValue | null>(null)

export function ContextProvider ({ children }: ContextProps): JSX.Element {
  const [data, setData] = useState('')

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useGlobalContext () {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
