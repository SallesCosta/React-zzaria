import { BrowserRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider, LangProvider, OrderProvider } from '@/contexts'
import { theme } from '@/ui/theme'

type Props = {
  children: ReactNode | ReactNode[];
};

type Provider = {
  component: (props: any) => JSX.Element | null;
  props?: unknown;
};

// TODO: use ChakraProvider seems does not working.
const providers: Provider[] = [
  {
    component: ChakraProvider,
    props: {
      resetCSS: true,
      theme,
    },
  },
  { component: BrowserRouter },
  { component: AuthProvider },
  { component: LangProvider },
  { component: OrderProvider },
]

export const Providers = ({ children }: Props) => {
  return (
    <>
      {providers.reduceRight((child, provider) => {
        const allProps = Object.assign({}, provider.props)
        return <provider.component allProps>{child}</provider.component>
      }, children)}
    </>
  )
}
