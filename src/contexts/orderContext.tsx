import { serverTimestamp } from 'firebase/firestore'
import { useAuth } from '@/contexts'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
  FormEvent,
  ChangeEvent,
  useMemo,
  useEffect,
} from 'react'
import { duid, cepMask } from '@/helpers'
import { saveData } from '@/services/firebase'

type AddressProps = Record<
  'number' | 'street' | 'complement' | 'codePostal' | 'city' | 'state',
  string
>;

type ContextProps = {
  children: ReactNode | ReactNode[];
};

type PizzaSize = {
  id: string;
  slices: number;
  name: string;
  size: number;
  flavours: number;
};

export type EachFlavourProps = {
  id: string;
  image: string;
  name: string;
  value: {
    [key: number]: number;
  };
};

type PizzaFlavourProps = {
  id: string;
  name: EachFlavourProps;
}

type PizzaProps = {
  pizzaSize: PizzaSize;
  pizzaFlavours: PizzaFlavourProps[];
  quantity: number;
};

interface PizzaPropsId extends PizzaProps {
  id: string;
}

type ContextValue = {
  phone: string;
  addPizzaToOrder: any;
  sendOrder: () => void;
  removePizza: (id: string) => void;
  handleAddress: (e: FormEvent<HTMLFormElement>) => void;
  handleChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  order: {
    pizzas: PizzaPropsId[];
    address: AddressProps;
    phone: string;
  };
};

export const OrderContext = createContext<ContextValue | null>(null)
const AddressInitialState: AddressProps = {
  street: '',
  number: '',
  complement: '',
  codePostal: '',
  city: '',
  state: '',
}

export const OrderProvider = ({ children }: ContextProps): JSX.Element => {
  const [orderInProgress, setOrderInProgress] = useState(false)
  const [pizzas, setAddPizza] = useState<PizzaPropsId[]>([])
  const [address, setAddress] = useState<AddressProps>(AddressInitialState)
  const [phone, setPhone] = useState('')
  const { user } = useAuth()
  const id = duid()

  const orderToSend = useMemo(() => {
    return {
      userId: user?.user?.uid,
      createdAt: serverTimestamp(),
      address,
      phone,
      pizzas: pizzas.map((p) => ({
        size: p.pizzaSize,
        flavours: p.pizzaFlavours,
        quantity: p.quantity,
      })),
    }
    // } as Order
  }, [user, address, phone, pizzas])

  const order = {
    pizzas,
    address,
    phone,
  }

  useEffect(() => {
    console.log('orderToSend', orderToSend)
  }, [orderToSend])

  const newPizza = useCallback(
    (pizza: PizzaProps): PizzaPropsId => {
      return { id, ...pizza }
    },
    [id],
  )

  const addPizzaToOrder = useCallback(
    (pizza: PizzaPropsId) => {
      console.log('aqui: ', newPizza(pizza))
      if (orderInProgress) {
        return setAddPizza(() => pizzas.concat(newPizza(pizza)))
      }
      setOrderInProgress(true)
      setAddPizza([newPizza(pizza)])
    },
    [newPizza, orderInProgress, pizzas],
  )

  const sendOrder = useCallback(() => {
    console.log('sendOrder')
    saveData('orders', orderToSend)
    setOrderInProgress(false)
  }, [orderToSend])

  const removePizza = (id: string) => {
    setAddPizza((pizzas) => pizzas.filter((p) => p.id !== id))
  }

  const handleAddress = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setAddress({
      street: form.street.value,
      number: form.number.value,
      codePostal: cepMask(form.codePostal.value),
      complement: form.complement.value,
      city: form.city.value,
      state: form.state.value,
    })
  }

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  return (
    <OrderContext.Provider
      value={{
        addPizzaToOrder,
        order,
        sendOrder,
        removePizza,
        handleChangePhone,
        handleAddress,
        phone,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder () {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error(
      'You must wrap your app with <ContextProvider /> component',
    )
  }
  return context
}
