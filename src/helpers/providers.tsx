import { BrowserRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './authContext'
import { theme } from '@/ui/theme'

type Props = {
  children: ReactNode | ReactNode[];
};

type Provider = {
  component: (props: any) => JSX.Element | null;
  props?: unknown;
};

// TODO: use ChakraProvider seems does not workin.
const providers: Provider[] = [
  { component: BrowserRouter },
  { component: AuthProvider },
  {
    component: ChakraProvider,
    props: {
      theme,
      resetCSS: true,
    },
  },
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
