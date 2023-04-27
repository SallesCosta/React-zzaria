import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react'

type ContextProps = {
  children: ReactNode | ReactNode[];
};

export type FlavoursProps = {
  id: string;
  image: string;
  name: string;
  select: boolean;
  value: {
    0: number;
    1: number;
    2: number;
  };
};

type SizeProps = {
  name: string;
  size: number;
  slices: number;
  flavours: number;
};

type ContextValue = {
  size: SizeProps;
  flavoursState: FlavoursProps[];
  quantity: number;

  chooseFlavours: (prop: FlavoursProps) => void;
  chooseQuantity: (prop: number) => void;

  setSize: Dispatch<SetStateAction<SizeProps>>;
};

const SizeInitialState = {
  name: '',
  size: 0,
  slices: 0,
  flavours: 0,
}

const DataContext = createContext<ContextValue | null>(null)

export function ContextProvider ({ children }: ContextProps): JSX.Element {
  const [size, setSize] = useState<SizeProps>(SizeInitialState)
  const [flavoursState, setFlavoursState] = useState<FlavoursProps[]>([])
  const [quantity, setQuantity] = useState(1)

  const chooseFlavours = useCallback(
    (prop: FlavoursProps) => {
      if (flavoursState.includes(prop)) {
        console.log('ja tem')
        // flavours.filter((i) => i !== prop)
      } else {
        console.log('nao tem')
        // setFlavours([...flavours].concat(prop))
      }
    },
    [setFlavoursState, flavoursState],
  )

  const chooseQuantity = useCallback(
    (prop: number) => setQuantity(prop),
    [setQuantity],
  )

  return (
    <DataContext.Provider
      value={{
        size,
        flavoursState,
        quantity,

        chooseFlavours,
        chooseQuantity,

        setSize,
        // checkboxes,
        // setCheckboxes,
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
