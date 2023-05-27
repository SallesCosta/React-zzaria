import { lazy, Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { VStack, Progress } from '@chakra-ui/react'

const Header = lazy(() => import('@/pages/components/header'))

const MainPage = () => {
  return (
    <VStack h='100vh'>
      <Header />
      <Suspense fallback={<Progress size='xs' isIndeterminate />}>
        <Outlet />
      </Suspense>
    </VStack>
  )
}

export default MainPage
