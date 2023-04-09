import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app'

import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './ui/theme'

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

root.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)

// <ErrorBoundary onError={logError} fallbackRender={fallbackRender}>
//
// </ErrorBoundary>
