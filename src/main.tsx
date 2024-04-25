import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app'

import { ErrorBoundary } from 'react-error-boundary'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './ui/theme'
import { Providers } from './helpers'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)

type ErrorProps = {
  error: Error;
  resetErrorBoundary: string;
};

function fallbackRender ({ error, resetErrorBoundary }: any) {
  resetErrorBoundary()
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

const logError = (error: Error, info: { componentStack: string }) => {
  console.log('error', error)
  console.log('info', info.componentStack)
}

// TODO: use ChakraProvider from providers abstraction.
root.render(
  <StrictMode>
    <Providers>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Providers>
  </StrictMode>,
)
